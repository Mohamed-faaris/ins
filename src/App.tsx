import { ArrowRight, AlertTriangle, Search, Bug, Rocket, XCircle, TrendingDown } from 'lucide-react'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import {
  ConnectionDots,
  PulseAlert,
  LoopingArrows,
  FailedBars,
  IncidentList,
  DownwardChart,
} from '@/components/animated-backgrounds'
import Features from '@/components/features-3'
import HeroSection from '@/components/hero-section-5'
import FlickeringFooterDemo from '@/components/flickering-footer-demo'
import './App.css'

const stages = ['Requirements', 'Development', 'Testing', 'Deployment', 'Production']

const consequences = [
  { icon: AlertTriangle, title: 'Hidden dependencies', desc: 'Undocumented links between systems cause unexpected failures' },
  { icon: Search, title: 'Late risk discovery', desc: 'Risks surface in production instead of during impact analysis' },
  { icon: Bug, title: 'Unnecessary testing', desc: 'Teams over-test without knowing actual risk exposure' },
  { icon: Rocket, title: 'Failed releases', desc: 'Deployment rollbacks due to unanticipated side effects' },
  { icon: XCircle, title: 'Production incidents', desc: 'Critical outages from changes made in isolation' },
  { icon: TrendingDown, title: 'Costly business disruption', desc: 'Regulatory non-compliance and revenue loss from downtime' },
]

function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <section className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              The Enterprise Challenge
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Every Software Change Creates Invisible Risk
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Modern enterprises manage thousands of interconnected applications, services, and business processes. Yet the knowledge required to understand software change remains fragmented across teams, tools, and documents.
            </p>
          </div>

          <div className="mt-16">
            <div className="relative">
              <div className="flex items-center justify-center gap-0">
                {stages.map((stage, i) => (
                  <div key={stage} className="relative flex flex-col items-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-border bg-card text-center text-xs font-semibold text-foreground shadow-sm md:h-28 md:w-28 md:text-sm">
                      {stage}
                    </div>
                    {i < stages.length - 1 && (
                      <div className="absolute left-[calc(50%+3rem)] top-1/2 hidden h-0.5 w-[calc(100%-6rem)] bg-border md:block" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-center">
                <div className="inline-flex items-center gap-3 rounded-full border-2 border-destructive/30 bg-destructive/5 px-8 py-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/10">
                    <TrendingDown className="h-4 w-4 text-destructive" />
                  </div>
                  <span className="text-sm font-semibold text-destructive">Knowledge Lost</span>
                </div>
              </div>

              <div className="mt-3 flex justify-center gap-2">
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>

            <div className="mt-4 text-center text-sm text-muted-foreground">
              The result?
            </div>
          </div>

          <div className="mt-12">
            <BentoGrid>
              <BentoCard
                name={consequences[0].title}
                description={consequences[0].desc}
                Icon={consequences[0].icon}
                href="#"
                cta="Learn more"
                className="md:col-span-2 md:row-span-1"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
                    <ConnectionDots />
                  </div>
                }
              />
              <BentoCard
                name={consequences[1].title}
                description={consequences[1].desc}
                Icon={consequences[1].icon}
                href="#"
                cta="Learn more"
                className="md:col-span-1"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-transparent">
                    <PulseAlert />
                  </div>
                }
              />
              <BentoCard
                name={consequences[2].title}
                description={consequences[2].desc}
                Icon={consequences[2].icon}
                href="#"
                cta="Learn more"
                className="md:col-span-1"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
                    <LoopingArrows />
                  </div>
                }
              />
              <BentoCard
                name={consequences[3].title}
                description={consequences[3].desc}
                Icon={consequences[3].icon}
                href="#"
                cta="Learn more"
                className="md:col-span-1"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-transparent">
                    <FailedBars />
                  </div>
                }
              />
              <BentoCard
                name={consequences[4].title}
                description={consequences[4].desc}
                Icon={consequences[4].icon}
                href="#"
                cta="Learn more"
                className="md:col-span-1"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-transparent">
                    <IncidentList />
                  </div>
                }
              />
              <BentoCard
                name={consequences[5].title}
                description={consequences[5].desc}
                Icon={consequences[5].icon}
                href="#"
                cta="Learn more"
                className="md:col-span-3"
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-primary/5 to-transparent">
                    <DownwardChart />
                  </div>
                }
              />
            </BentoGrid>
          </div>
        </div>
      </section>

      <Features />

      <FlickeringFooterDemo />
    </div>
  )
}

export default App
