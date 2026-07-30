import { ArrowRight, BarChart3, Network, AlertTriangle, Search, Bug, Rocket, XCircle, TrendingDown, PieChart, Workflow, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import {
  ConnectionDots,
  PulseAlert,
  LoopingArrows,
  FailedBars,
  IncidentList,
  DownwardChart,
} from '@/components/animated-backgrounds'
import {
  MotionNavigationMenu,
  MotionNavigationMenuContent,
  MotionNavigationMenuIndicator,
  MotionNavigationMenuItem,
  MotionNavigationMenuLink,
  MotionNavigationMenuList,
  MotionNavigationMenuTrigger,
} from '@/components/unlumen-ui/motion-navigation-menu'
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
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2 group/logo">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary transition-transform duration-300 group-hover/logo:scale-110">
              <BarChart3 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">Insyrium</span>
          </div>
          <nav className="hidden items-center md:flex">
            <MotionNavigationMenu
              viewport={false}
              springStiffness={350}
              springDamping={32}
            >
              <MotionNavigationMenuList highlightClassName="bg-primary/10 rounded-lg">
                <MotionNavigationMenuItem value="platform">
                  <MotionNavigationMenuTrigger>Platform</MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName="bg-primary/10 rounded-lg ring-1 ring-primary/15">
                    <div className="grid w-[400px] grid-cols-2 gap-1">
                      <MotionNavigationMenuLink href="/continuous-discovery">
                        <PieChart className="mb-1 h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Continuous Discovery</span>
                        <span className="text-xs text-muted-foreground">
                          Automatically map your enterprise landscape
                        </span>
                      </MotionNavigationMenuLink>
                      <MotionNavigationMenuLink href="/impact-analysis">
                        <Workflow className="mb-1 h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Impact Analysis</span>
                        <span className="text-xs text-muted-foreground">
                          Model change scenarios & blast radius
                        </span>
                      </MotionNavigationMenuLink>
                      <MotionNavigationMenuLink href="/assurance">
                        <BarChart3 className="mb-1 h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Assurance Orchestration</span>
                        <span className="text-xs text-muted-foreground">
                          Automate testing & compliance checks
                        </span>
                      </MotionNavigationMenuLink>
                      <MotionNavigationMenuLink href="/digital-twin">
                        <Network className="mb-1 h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Enterprise Digital Twin</span>
                        <span className="text-xs text-muted-foreground">
                          Living model of your architecture
                        </span>
                      </MotionNavigationMenuLink>
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="solutions">
                  <MotionNavigationMenuTrigger>Solutions</MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName="bg-primary/10 rounded-lg ring-1 ring-primary/15">
                    <div className="grid w-[300px] grid-cols-1 gap-1">
                      <MotionNavigationMenuLink href="/regulated-industries">
                        <span className="text-sm font-medium">Regulated Industries</span>
                        <span className="text-xs text-muted-foreground">
                          Compliance-first change management
                        </span>
                      </MotionNavigationMenuLink>
                      <MotionNavigationMenuLink href="/enterprise">
                        <span className="text-sm font-medium">Enterprise</span>
                        <span className="text-xs text-muted-foreground">
                          Large-scale change intelligence
                        </span>
                      </MotionNavigationMenuLink>
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuItem value="resources">
                  <MotionNavigationMenuTrigger>Resources</MotionNavigationMenuTrigger>
                  <MotionNavigationMenuContent highlightClassName="bg-primary/10 rounded-lg ring-1 ring-primary/15">
                    <div className="grid w-[300px] grid-cols-1 gap-1">
                      <MotionNavigationMenuLink href="/docs">
                        <BookOpen className="mb-1 h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Documentation</span>
                        <span className="text-xs text-muted-foreground">
                          Guides & API reference
                        </span>
                      </MotionNavigationMenuLink>
                      <MotionNavigationMenuLink href="/blog">
                        <span className="text-sm font-medium">Blog</span>
                        <span className="text-xs text-muted-foreground">
                          Insights on change intelligence
                        </span>
                      </MotionNavigationMenuLink>
                    </div>
                  </MotionNavigationMenuContent>
                </MotionNavigationMenuItem>

                <MotionNavigationMenuIndicator />

                <MotionNavigationMenuItem>
                  <MotionNavigationMenuLink
                    href="/company"
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    Company
                  </MotionNavigationMenuLink>
                </MotionNavigationMenuItem>
              </MotionNavigationMenuList>
            </MotionNavigationMenu>
            <Button variant="outline" size="sm" className="ml-8">Contact</Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.2818_0.0831_284.5465/0.08),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:pb-32 md:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <BarChart3 className="h-3.5 w-3.5" />
              Enterprise Change Intelligence
            </div>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Understand Change.
              <br />
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">Predict Impact. Assure Outcomes.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Enterprise Change Intelligence for Regulated Industries
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Software changes don't fail because of poor execution—they fail because organizations don't fully understand their impact before implementation.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Insyrium continuously builds an Enterprise Digital Twin that connects business processes, applications, dependencies, risks, and assurance requirements, enabling enterprises to make confident software change decisions before they reach production.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <InteractiveHoverButton className="px-8 text-base">
                Explore Platform
              </InteractiveHoverButton>
              <Button variant="outline" size="lg" className="gap-2 px-8 text-base">
                Book a Discovery Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>

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

      <section className="border-t border-border/40 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              The Insyrium Platform
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Your Enterprise Digital Twin for Change Intelligence
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Insyrium continuously maps your entire enterprise architecture—business processes, applications, data flows, dependencies, risks, and compliance requirements—into a living digital twin that powers confident change decisions.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-8 text-left">
              <Network className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Continuous Discovery</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Automatically discover and map applications, APIs, data flows, and dependencies across your entire landscape.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8 text-left">
              <BarChart3 className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Impact Analysis</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Model change scenarios across your digital twin to understand blast radius, risk exposure, and assurance gaps.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8 text-left">
              <AlertTriangle className="mb-4 h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Assurance Orchestration</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Automate testing, compliance checks, and approvals based on actual risk profiles and regulatory requirements.
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button size="lg" className="gap-2 px-8 text-base">
              Explore the Platform
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <FlickeringFooterDemo />
    </div>
  )
}

export default App
