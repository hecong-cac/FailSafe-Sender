import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 px-6 py-24 sm:py-32 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-secondary/10 blur-3xl delay-1000" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/50 px-4 py-2 text-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          <span className="text-muted-foreground">Now in Beta</span>
        </div>

        <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
          FailSafe Sender
        </h1>

        <p className="mb-10 text-pretty text-xl leading-relaxed text-muted-foreground sm:text-2xl">
          AWS-level reliability for Solana transactions.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="group gap-2 text-base">
            Try Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2 text-base bg-transparent">
            <Github className="h-5 w-5" />
            View on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
