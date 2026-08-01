import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { HeroHeader } from '@/components/hero-section-5-header'
import HeroVideo from '@/components/hero-section-5-video'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="relative mx-auto flex h-svh min-h-[600px] flex-col justify-end">
                        <div className="pointer-events-none absolute inset-0">
                            <HeroVideo />
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                        <div className="relative z-10 flex flex-col justify-end">
                            <div className="mx-auto w-full max-w-7xl px-6 pb-6 lg:pb-12">
                                <div className="flex flex-wrap items-end justify-between gap-4 lg:w-2/3">
                                    <h1 className="max-w-md text-balance text-5xl md:text-6xl !text-white">Understand Change. Predict Impact. Assure Outcomes.</h1>

                                    <div className="flex items-center gap-2">
                                        <InteractiveHoverButton>
                                            Explore Platform
                                        </InteractiveHoverButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
