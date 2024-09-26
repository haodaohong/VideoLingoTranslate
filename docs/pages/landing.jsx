import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Github, Star, Youtube, CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { RainbowButton } from '@/components/magicui/rainbow-button'

export default function Component() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
					<div className="container mx-auto px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/none">
									VideoLingo: 连接世界的每一帧
								</h1>
								<p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl lg:text-2xl">
									全自动视频搬运工，生成 Netflix 品质的字幕！克隆自己的声音进行配音！
								</p>
							</div>
							<div className="space-x-4">
								<Link href="https://github.com/your-username/VideoLingo" passHref>
									<RainbowButton>GitHub</RainbowButton>
								</Link>
							</div>
							{/* 新增视频演示组件 */}
							<div className="w-full max-w-5xl mt-16 mb-16">
								<div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
									<video
										className="w-full h-full object-cover"
										controls
									>
										<source
											src="/videos/369750234-47d965b2-b4ab-4a0b-9d08-b49a7bf3508c.mp4"
											type="video/mp4"
										/>
										您的浏览器不支持视频标签。
									</video>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="features" className="w-full py-24 md:py-32 lg:py-40 bg-secondary">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-16">
							强大功能，释放创意
						</h2>
						<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
							<Card>
								<CardHeader>
									<CardTitle>智能字幕分割</CardTitle>
								</CardHeader>
								<CardContent>
									<p>使用 NLP 和 LLM 技术，精确分割字幕，确保每一句话都恰到好处。</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>上下文感知翻译</CardTitle>
								</CardHeader>
								<CardContent>
									<p>智能术语知识库，实现上下文感知翻译，让每一句翻译都自然流畅。</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>三步翻译过程</CardTitle>
								</CardHeader>
								<CardContent>
									<p>直接翻译 - 反思 - 改进，多重保障，确保翻译质量。</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>精确字幕对齐</CardTitle>
								</CardHeader>
								<CardContent>
									<p>单词级字幕对齐，让每一个字都准确同步。</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>高质量配音</CardTitle>
								</CardHeader>
								<CardContent>
									<p>GPT-SoVits 技术支持的高质量个性化配音，让视频更具魅力。</p>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>开发者友好</CardTitle>
								</CardHeader>
								<CardContent>
									<p>结构化文件设计，方便开发者自定义和扩展功能。</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<section id="demo" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
							看看效果
						</h2>
						<div className="grid gap-6 lg:grid-cols-2">
							<Card>
								<CardHeader>
									<CardTitle>翻译字幕效果</CardTitle>
								</CardHeader>
								<CardContent>
									<video controls className="w-full rounded-lg">
										<source src="/ted_demo_sub.mp4" type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>加上配音效果</CardTitle>
								</CardHeader>
								<CardContent>
									<video controls className="w-full rounded-lg">
										<source src="/ted_demo_dubbing.mp4" type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
							他们都在用 VideoLingo
						</h2>
						<div className="grid gap-6 lg:grid-cols-3">
							<Card>
								<CardContent className="p-6">
									<p className="text-lg mb-4">
										"VideoLingo
										彻底改变了我们的视频本地化流程。现在我们可以以前所未有的速度和质量制作多语言内容"
									</p>
									<p className="font-semibold">张三, CEO @ TechStart</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-6">
									<p className="text-lg mb-4">
										"作为一个独立创作者，VideoLingo
										让我能够轻松地将我的内容推广到全球观众。简直是游戏规则的改变者！"
									</p>
									<p className="font-semibold">李四, YouTuber</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-6">
									<p className="text-lg mb-4">
										"VideoLingo 的 AI
										配音功能令人惊叹。它为我们的教育视频增添了一个全新的维度。"
									</p>
									<p className="font-semibold">王五, 在线教育平台创始人</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
					<div className="container mx-auto px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
							常见问题
						</h2>
						<Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
							<AccordionItem value="item-1">
								<AccordionTrigger>VideoLingo 支持哪些视频格式？</AccordionTrigger>
								<AccordionContent>
									VideoLingo 支持大多数常见的视频格式，包括 MP4, AVI, MOV, WMV
									等。如果您有特殊格式需求，请联系我们的支持团队。
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2">
								<AccordionTrigger>翻译和配音的质量如何保证？</AccordionTrigger>
								<AccordionContent>
									我们使用先进的 AI 技术结合人工审核来确保翻译的准确性。对于配音，我们的
									GP-SoVits 技术可以生成自然流畅的语音。
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3">
								<AccordionTrigger>处理一个视频需要多长时间？</AccordionTrigger>
								<AccordionContent>
									处理时间取决于视频的长度和所需的服务。通常，一个 5
									分钟的视频完成翻译和配音大约需要 30 分钟。
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-4">
								<AccordionTrigger>可以自定义 VideoLingo 的功能吗？</AccordionTrigger>
								<AccordionContent>
									是的，VideoLingo 提供了灵活的 API
									和开发者文档，允许您根据需求进行自定义和集成。
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
					<div className="container mx-auto px-4 md:px-6 text-center">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
							准备好开始您的全球化之旅了吗？
						</h2>
						<p className="mx-auto max-w-[700px] mb-8 text-lg">
							加入 VideoLingo，让您的视频内容跨越语言的界限，触达全球观众。
						</p>
					</div>
				</section>
			</main>
		</div>
	)
}