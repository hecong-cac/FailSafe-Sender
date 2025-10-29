"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

const apiExamples = [
  {
    title: "POST /api/send",
    description: "Send a transaction through the optimal route",
    request: `{
  "from": "wallet_A",
  "to": "wallet_B",
  "amount": 0.5,
  "route": "auto"
}`,
    response: `{
  "txHash": "8jd9s...abc",
  "route": "Jito",
  "latency": 1.3,
  "status": "confirmed"
}`,
  },
  {
    title: "GET /api/metrics",
    description: "Retrieve real-time performance metrics",
    request: null,
    response: `{
  "successRate": 99.8,
  "avgLatency": 1.2,
  "costSaved": 42,
  "totalTransactions": 15847
}`,
  },
]

function CodeBlock({ code, language = "json" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <Button size="sm" variant="ghost" className="absolute right-2 top-2 h-8 w-8 p-0" onClick={handleCopy}>
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
      <pre className="overflow-x-auto rounded-lg bg-muted/50 p-4 text-sm">
        <code className="font-mono text-foreground">{code}</code>
      </pre>
    </div>
  )
}

export function ApiExamples() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple API Integration
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">Get started with just a few lines of code</p>
        </div>

        <div className="space-y-8">
          {apiExamples.map((example) => (
            <Card key={example.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-mono text-xl">{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {example.request && (
                  <div>
                    <p className="mb-2 text-sm font-medium text-muted-foreground">Request</p>
                    <CodeBlock code={example.request} />
                  </div>
                )}
                <div>
                  <p className="mb-2 text-sm font-medium text-muted-foreground">Response</p>
                  <CodeBlock code={example.response} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
