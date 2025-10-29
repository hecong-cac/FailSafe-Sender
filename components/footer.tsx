import { Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 px-6 py-12 backdrop-blur-sm lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <h3 className="mb-2 text-xl font-bold text-foreground">FailSafe Sender</h3>
            <p className="text-sm text-muted-foreground">AWS-level reliability for Solana transactions</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                <Twitter className="h-4 w-4" />
                Twitter/X
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="/docs">Docs</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="/contact">Contact</a>
            </Button>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 FailSafe Sender. Built for the Solana ecosystem.</p>
        </div>
      </div>
    </footer>
  )
}
