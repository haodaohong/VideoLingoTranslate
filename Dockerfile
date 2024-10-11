ARG CUDA_VERSION=12.4.1
FROM nvidia/cuda:${CUDA_VERSION}-devel-ubuntu20.04

# 设置环境变量
ENV DEBIAN_FRONTEND=noninteractive
ARG PYTHON_VERSION=3.10

# 更换软件源并安装基本工具和系统依赖
RUN sed -i 's/archive.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list && \
    sed -i 's/security.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list && \
    apt-get update && apt-get install -y --no-install-recommends \
    software-properties-common git curl sudo ffmpeg fonts-noto wget \
    && add-apt-repository ppa:deadsnakes/ppa \
    && apt-get update -y \
    && apt-get install -y python${PYTHON_VERSION} python${PYTHON_VERSION}-dev python${PYTHON_VERSION}-venv \
    && update-alternatives --install /usr/bin/python3 python3 /usr/bin/python${PYTHON_VERSION} 1 \
    && update-alternatives --set python3 /usr/bin/python${PYTHON_VERSION} \
    && ln -sf /usr/bin/python${PYTHON_VERSION}-config /usr/bin/python3-config \
    && curl -sS https://bootstrap.pypa.io/get-pip.py | python${PYTHON_VERSION} \
    && python3 --version && python3 -m pip --version

# 清理apt缓存
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Workaround for CUDA兼容性问题
RUN ldconfig /usr/local/cuda-$(echo $CUDA_VERSION | cut -d. -f1,2)/compat/

# 设置工作目录并克隆仓库
WORKDIR /app
RUN git clone https://github.com/Huanshere/VideoLingo.git .

# 安装PyTorch和torchaudio
RUN pip install torch==2.0.0 torchaudio==2.0.0 --index-url https://download.pytorch.org/whl/cu118

# 清理不必要的文件
RUN rm -rf .git

# 升级pip并安装基本依赖
RUN pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple && \
    pip install --no-cache-dir --upgrade pip requests rich ruamel.yaml

# 安装WhisperX和其他依赖
RUN cd third_party/whisperX && pip install --no-cache-dir -e .
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 下载UVR模型
RUN mkdir -p _model_cache/uvr5_weights && \
    wget -O _model_cache/uvr5_weights/HP2_all_vocals.pth https://huggingface.co/lj1995/VoiceConversionWebUI/resolve/e992cb1bc5d777fcddce20735a899219b1d46aba/uvr5_weights/HP2_all_vocals.pth && \
    wget -O _model_cache/uvr5_weights/VR-DeEchoAggressive.pth https://huggingface.co/lj1995/VoiceConversionWebUI/resolve/main/uvr5_weights/VR-DeEchoAggressive.pth

# 设置语言
RUN python3 -c "from core.config_utils import update_key; update_key('display_language', 'en_US')"

# 设置CUDA相关环境变量
ENV CUDA_HOME=/usr/local/cuda
ENV PATH=${CUDA_HOME}/bin:${PATH}
ENV LD_LIBRARY_PATH=${CUDA_HOME}/lib64:${LD_LIBRARY_PATH}

# 设置CUDA架构列表
ARG TORCH_CUDA_ARCH_LIST="7.0 7.5 8.0 8.6+PTX"
ENV TORCH_CUDA_ARCH_LIST=${TORCH_CUDA_ARCH_LIST}

EXPOSE 8501

CMD ["streamlit", "run", "st.py"]