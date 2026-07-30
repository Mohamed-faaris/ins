import { motion } from 'motion/react'
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
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {stages.map((stage, i) => (
                  <motion.div
                    key={stage}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-14 items-center gap-3 rounded-xl border border-border bg-card px-5 shadow-sm">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                      <span className="whitespace-nowrap text-sm font-semibold text-foreground">
                        {stage}
                      </span>
                    </div>
                    {i < stages.length - 1 && (
                      <ArrowRight className="hidden h-5 w-5 text-muted-foreground/30 md:block" />
                    )}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex justify-center"
              >
                <div className="flex flex-col items-center gap-3">
                  <ArrowRight className="h-6 w-6 rotate-90 text-muted-foreground/30" />
                  <div className="inline-flex items-center gap-4 rounded-2xl border-2 border-destructive/30 bg-destructive/5 px-10 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                      <TrendingDown className="h-5 w-5 text-destructive" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-destructive/70">Result</p>
                      <p className="text-lg font-bold text-destructive">Knowledge Lost</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-border/50" />
                <span className="text-sm font-medium text-muted-foreground">The result?</span>
                <div className="h-px flex-1 bg-border/50" />
              </div>
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
