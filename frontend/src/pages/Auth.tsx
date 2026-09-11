import React from 'react'
import { ArrowRight, Cloud, Database, ShieldCheck, Sparkles } from 'lucide-react'
import GoogleButton from '../components/GoogleButton'

const featureCards = [
	{
		icon: Cloud,
		title: 'One storage layer',
		text: 'Connect multiple provider accounts and access them through a single workspace.',
	},
	{
		icon: Database,
		title: 'Distributed uploads',
		text: 'Large files can be segmented and spread across connected storage backends.',
	},
	{
		icon: ShieldCheck,
		title: 'Secure by design',
		text: 'Keep each account connected independently while deepFs coordinates the flow.',
	},
]

export default function Auth(): React.JSX.Element {
	return (
		<div className="min-h-screen bg-[#f4efe9] text-slate-900 relative overflow-hidden">
			<div className="absolute inset-0">
				<div className="absolute left-[-8rem] top-[-5rem] h-80 w-80 rounded-full bg-[#e7d9c7]" />
				<div className="absolute right-[-6rem] bottom-[-4rem] h-72 w-72 rounded-full bg-[#dfe9ef]" />
			</div>

			<div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-12 sm:px-8 lg:px-10">
				<div className="grid w-full items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
					<section className="max-w-xl">
						<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-3 py-1.5 text-xs font-medium tracking-[0.16em] uppercase text-slate-600 backdrop-blur-sm">
							<Sparkles className="h-3.5 w-3.5" />
							multi-cloud storage
						</div>

						<h1 className="text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
							One place for every storage account.
						</h1>

						<p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
							deepFs lets you connect your cloud accounts and treat them as one
							distributed storage layer. Upload once, spread securely, and manage
							everything from a single workspace.
						</p>

						<div className="mt-8 space-y-4">
							{featureCards.map(({ icon: Icon, title, text }) => (
								<div
									key={title}
									className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-sm"
								>
									<div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-950 text-white">
										<Icon className="h-4 w-4" />
									</div>
									<div>
										<h2 className="text-base font-medium text-slate-900">
											{title}
										</h2>
										<p className="mt-1 text-sm leading-6 text-slate-600">
											{text}
										</p>
									</div>
								</div>
							))}
						</div>
					</section>

					<section className="flex justify-center lg:justify-end">
						<div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-md sm:p-7">
							<div className="mb-6 flex items-center justify-between">
								<div>
									<p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
										deepFs
									</p>
									<h2 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-slate-950">
										Sign in
									</h2>
								</div>
								<div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-900">
									<Cloud className="h-5 w-5" />
								</div>
							</div>

							<div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
								<p className="text-sm text-slate-600">
									Connect your preferred cloud account to start using deepFs.
								</p>
							</div>

							<GoogleButton
								label="Continue with Google"
								href="/google_login"
								className="h-12 rounded-xl border border-slate-200 shadow-none bg-white hover:bg-slate-50"
							/>

							<div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-slate-400">
								<span className="h-px flex-1 bg-slate-200" />
								or
								<span className="h-px flex-1 bg-slate-200" />
							</div>

							<button
								type="button"
								className="mt-6 flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-950 px-4 py-3 text-left text-sm text-white transition hover:bg-slate-800"
							>
								<span className="font-medium">Connect another provider</span>
								<ArrowRight className="h-4 w-4" />
							</button>

							<p className="mt-6 text-center text-xs leading-5 text-slate-500">
								By continuing, you agree to the storage access terms for your
								connected accounts.
							</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}
