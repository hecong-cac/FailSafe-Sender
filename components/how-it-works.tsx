import { Card, CardContent } from "@/components/ui/card"
import { Activity, Zap, BarChart } from "lucide-react"

const steps = [
  {
    icon: Activity,
    title: "Monitor routes in real time",
    description: "Continuously track RPC, Jito, and Sanctum performance metrics",
  },
  {
    icon: Zap,
    title: "Auto-select best route",
    description: "Intelligent routing based on latency, cost, and success rate",
  },
  {
    icon: BarChart,
    title: "Log and visualize",
    description: "Comprehensive dashboard with real-time analytics and insights",
  },
]

export function HowItWorks() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">Three simple steps to reliable transactions</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 hidden h-px w-full bg-gradient-to-r from-primary/50 to-secondary/50 md:block" />
              )}
              <Card className="relative border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="mb-2 text-sm font-semibold text-primary">Step {index + 1}</div>
                  <h3 className="mb-3 text-xl font-semibold text-card-foreground">{step.title}</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
