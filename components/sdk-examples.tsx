"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

const jsCode = `import { FailSafeSender } from "@failsafe/sdk";

const sender = new FailSafeSender("API_KEY");

const result = await sender.send({
  from: "walletA",
  to: "walletB",
  amount: 0.5,
});

console.log(result.successRate);
console.log(result.txHash);`

const pythonCode = `from failsafe import Sender

sender = Sender(api_key="YOUR_API_KEY")

result = sender.send("walletA", "walletB", 0.5)

print(result["txHash"])
print(result["route"])
print(result["latency"])`

function CodeBlock({ code, language }: { code: string; language: string }) {
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

export function SdkExamples() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/30 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Use FailSafe Sender with SDK
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">Available for JavaScript and Python</p>
        </div>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>SDK Integration</CardTitle>
            <CardDescription>Choose your preferred language</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="javascript" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
              </TabsList>

              <TabsContent value="javascript" className="mt-6">
                <CodeBlock code={jsCode} language="javascript" />
              </TabsContent>

              <TabsContent value="python" className="mt-6">
                <CodeBlock code={pythonCode} language="python" />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
