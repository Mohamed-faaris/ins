import { Card } from '@/components/ui/card'
import { ArrowUp, ChevronDown, CloudDownload, Mic2, MonitorDown, Network, Plus, BarChart3 } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-muted-foreground max-w-4xl text-balance text-4xl font-medium tracking-tight">
                    <span className="text-foreground">The Insyrium Platform.</span> <br /> Your Enterprise Digital Twin for Change Intelligence.
                </h2>
                <div className="mt-8 grid gap-x-3 gap-y-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
                    <div className="row-span-2 grid grid-cols-subgrid gap-4">
                        <Card className="aspect-9/12 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative h-48 w-48">
                                    <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />
                                    <div className="absolute inset-4 rounded-full border border-primary/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
                                    <div className="absolute inset-8 rounded-full border border-primary/40 animate-pulse" style={{ animationDelay: '1s' }} />
                                    <Network className="absolute inset-0 m-auto h-16 w-16 text-primary" />
                                </div>
                            </div>
                            <AIInputIllustration />
                            <img
                                src="https://images.unsplash.com/photo-1656012710277-e103fe942e30?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="abstract background"
                                className="absolute inset-0 size-full object-cover opacity-20"
                            />
                        </Card>

                        <p className="text-muted-foreground text-balance">
                            <span className="text-foreground">Continuous Discovery. </span> Automatically discover and map applications, APIs, data flows, and dependencies across your entire landscape.
                        </p>
                    </div>

                    <div className="row-span-2 grid grid-cols-subgrid gap-4">
                        <Card className="aspect-9/12 bg-zinc-200! relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg viewBox="0 0 200 200" className="h-full w-full opacity-30">
                                    <defs>
                                        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="oklch(0.5 0.2 260)" />
                                            <stop offset="100%" stopColor="oklch(0.5 0.2 160)" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="100" cy="80" r="40" fill="none" stroke="url(#g1)" strokeWidth="2" opacity="0.4" />
                                    <circle cx="100" cy="80" r="20" fill="none" stroke="url(#g1)" strokeWidth="2" opacity="0.6" />
                                    <circle cx="100" cy="80" r="6" fill="url(#g1)" />
                                    <line x1="140" y1="60" x2="170" y2="40" stroke="url(#g1)" strokeWidth="1.5" opacity="0.3" />
                                    <line x1="60" y1="60" x2="30" y2="40" stroke="url(#g1)" strokeWidth="1.5" opacity="0.3" />
                                    <line x1="60" y1="110" x2="40" y2="150" stroke="url(#g1)" strokeWidth="1.5" opacity="0.3" />
                                    <line x1="140" y1="110" x2="160" y2="150" stroke="url(#g1)" strokeWidth="1.5" opacity="0.3" />
                                </svg>
                            </div>
                            <DynamicIslandIllustration />
                        </Card>

                        <p className="text-muted-foreground text-balance">
                            <span className="text-foreground">Impact Analysis. </span> Model change scenarios across your digital twin to understand blast radius, risk exposure, and assurance gaps.
                        </p>
                    </div>

                    <div className="row-span-2 grid grid-cols-subgrid gap-4">
                        <Card className="aspect-9/12 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
                            <DownloadIllustration />

                            <video
                                autoPlay
                                loop
                                muted
                                preload="none"
                                src="https://videos.pexels.com/video-files/37957431/16106725_1440_2560_24fps.mp4"
                                className="absolute inset-0 size-full object-cover opacity-30"
                            />
                        </Card>

                        <p className="text-muted-foreground text-balance">
                            <span className="text-foreground">Assurance Orchestration. </span> Automate testing, compliance checks, and approvals based on actual risk profiles and regulatory requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function DownloadIllustration() {
    return (
        <div className="z-1 absolute inset-0 m-auto size-fit scale-95">
            <div className="bg-background/75 inset-ring inset-ring-foreground/25 ml-1 inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-sm font-medium backdrop-blur h-7">
                <BarChart3 className="opacity-75 size-4" />
                <span className="border-r pr-2">3D Risk Map</span>
                <ChevronDown className="opacity-50 size-4" />
            </div>

            <div className="mt-3 min-w-52 rounded-2xl bg-white p-1 shadow-xl shadow-black/25 ring ring-black/10 *:cursor-pointer dark:bg-neutral-900 dark:ring-white/10">
                <div className="peer flex gap-2 rounded-xl px-3 py-1.5 hover:bg-black/5 dark:hover:bg-white/10">
                    <MonitorDown className="size-4 translate-y-0.5 text-black dark:text-white" />
                    <div className="space-y-0.5">
                        <div className="text-xs font-medium text-black dark:text-white">Critical</div>
                        <div className="text-xs text-black/50 dark:text-white/50">14 dependencies</div>
                    </div>
                </div>

                <div className="not-peer-hover:bg-black/5 flex gap-2 rounded-xl px-3 py-1.5 dark:hover:bg-white/10">
                    <CloudDownload className="size-4 translate-y-0.5 text-black dark:text-white" />
                    <div className="space-y-0.5">
                        <div className="text-xs font-medium text-black dark:text-white">Medium</div>
                        <div className="text-xs text-black/50 dark:text-white/50">31 dependencies</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AIInputIllustration() {
    return (
        <div
            aria-hidden
            className="z-1 absolute inset-8 m-auto h-fit scale-95"
        >
            <div className="bg-card ring-foreground/15 mt-auto h-fit rounded-3xl p-3 shadow-xl shadow-black/25 ring">
                <div className="text-muted-foreground p-2 pb-3 text-sm">Ask about any change impact...</div>
                <div className="flex justify-between gap-3">
                    <div className="flex items-center gap-1">
                        <div className="hover:bg-muted flex size-7 cursor-pointer rounded-full *:m-auto *:size-4">
                            <Plus />
                        </div>
                        <div className="hover:bg-muted flex size-7 cursor-pointer rounded-full *:m-auto *:size-4">
                            <Mic2 />
                        </div>
                    </div>

                    <div className="bg-foreground text-background flex size-7 cursor-pointer rounded-full *:m-auto *:size-4 hover:brightness-110">
                        <ArrowUp />
                    </div>
                </div>
            </div>
        </div>
    )
}

function DynamicIslandIllustration() {
    return (
        <div
            aria-hidden
            className="z-1 bg-black/2.5 absolute inset-x-8 bottom-0 mx-auto mt-auto h-2/3 w-10/12 origin-bottom scale-95 rounded-t-[4rem] border border-black/5 px-4 pt-4 dark:border-white/10 dark:bg-white/5"
        >
            <div className="h-full overflow-hidden rounded-t-[3rem] bg-white p-3 shadow-lg shadow-black/15 ring ring-black/10 dark:bg-neutral-900 dark:ring-white/10">
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1782366951390-d6798e902db7?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="absolute inset-0 top-0 size-full object-cover opacity-45 blur-xl contrast-200"
                    />
                    <div className="shadow-black/6.5 relative rounded-[2.25rem] bg-white p-2 shadow-xl ring ring-black/10 dark:bg-neutral-800 dark:ring-white/10">
                        <div className="flex gap-2">
                            <div className="size-18 relative overflow-hidden rounded-[1.75rem] shadow-md before:absolute before:inset-0 before:rounded-[1.75rem] before:border before:border-black/20">
                                <img
                                    src="https://images.unsplash.com/photo-1782366951390-d6798e902db7?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                    className="size-full object-cover"
                                />
                            </div>
                            <div className="py-1 pr-4">
                                <div className="text-sm font-medium text-black dark:text-white">Payment Service</div>
                                <div className="mt-1.5 flex items-center gap-3">
                                    <div>
                                        <div className="text-xs text-black/50 dark:text-white/50">Risk Score</div>
                                        <div className="mt-0.5 text-sm font-semibold text-black dark:text-white">74</div>
                                    </div>
                                    <div className="bg-border h-7 w-px" />
                                    <div>
                                        <div className="text-xs text-black/50 dark:text-white/50">Affected</div>
                                        <div className="mt-0.5 text-sm font-semibold text-black dark:text-white">12 apps</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
