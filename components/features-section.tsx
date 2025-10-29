import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Zap, DollarSign, BarChart3 } from "lucide-react"

const features = [
  {
    icon: CheckCircle2,
    title: "Reliable",
    description: "Automatic route failover",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Fast",
    description: "Parallel sending optimization",
    color: "text-secondary",
  },
  {
    icon: DollarSign,
    title: "Cost-efficient",
    description: "Jito refund optimization",
    color: "text-accent",
  },
  {
    icon: BarChart3,
    title: "Real-time visibility",
    description: "Success rate, cost, latency dashboard",
    color: "text-primary",
  },
]

export function FeaturesSection() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Key Features
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Everything you need for reliable Solana transactions
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-6">
                <div className={`mb-4 inline-flex rounded-lg bg-primary/10 p-3 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
