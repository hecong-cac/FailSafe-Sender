"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface DataPoint {
  time: string
  value: number
}

const MAX_DATA_POINTS = 15

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
}

const generateInitialData = (valueGenerator: () => number): DataPoint[] => {
  const now = new Date()
  return Array.from({ length: MAX_DATA_POINTS }, (_, i) => {
    const timestamp = new Date(now.getTime() - (MAX_DATA_POINTS - 1 - i) * 3000)
    return {
      time: formatTime(timestamp),
      value: valueGenerator(),
    }
  })
}

const generateSuccessRateValue = () => 95 + Math.random() * 5 // 95-100%
const generateLatencyValue = () => 100 + Math.random() * 400 // 100-500 ms
const generateCostSavedValue = () => Math.random() * 100 // 0-100 USD

export function DashboardPreview() {
  const [successData, setSuccessData] = useState<DataPoint[]>(() => generateInitialData(generateSuccessRateValue))
  const [latencyData, setLatencyData] = useState<DataPoint[]>(() => generateInitialData(generateLatencyValue))
  const [costData, setCostData] = useState<DataPoint[]>(() => generateInitialData(generateCostSavedValue))
  const [activeTab, setActiveTab] = useState("success")

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = formatTime(new Date())

      setSuccessData((prev) => {
        const newData = [...prev.slice(1), { time: currentTime, value: generateSuccessRateValue() }]
        return newData
      })

      setLatencyData((prev) => {
        const newData = [...prev.slice(1), { time: currentTime, value: generateLatencyValue() }]
        return newData
      })

      setCostData((prev) => {
        const newData = [...prev.slice(1), { time: currentTime, value: generateCostSavedValue() }]
        return newData
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gradient-to-b from-background to-muted/30 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Live Dashboard Preview
          </h2>
        </div>

        <Card className="border-border/50 bg-slate-950/90 shadow-[0_0_50px_rgba(139,92,246,0.15)] backdrop-blur-sm">
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-6 grid w-full grid-cols-3 bg-slate-900">
                <TabsTrigger
                  value="success"
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                >
                  Success Rate
                </TabsTrigger>
                <TabsTrigger
                  value="latency"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                >
                  Avg Latency
                </TabsTrigger>
                <TabsTrigger
                  value="cost"
                  className="data-[state=active]:bg-orange-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                >
                  Cost Saved
                </TabsTrigger>
              </TabsList>

              <TabsContent value="success" className="mt-0">
                <ChartContainer
                  config={{
                    value: {
                      label: "Success Rate",
                      color: "hsl(142, 76%, 36%)",
                    },
                  }}
                  className="h-[350px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={successData}>
                      <defs>
                        <linearGradient id="successGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 20%, 25%)" opacity={0.3} />
                      <XAxis
                        dataKey="time"
                        stroke="hsl(215, 16%, 47%)"
                        tick={{ fill: "hsl(215, 16%, 47%)", fontSize: 11 }}
                        interval="preserveStartEnd"
                      />
                      <YAxis
                        domain={[90, 100]}
                        stroke="hsl(215, 16%, 47%)"
                        tick={{ fill: "hsl(215, 16%, 47%)", fontSize: 12 }}
                        tickFormatter={(value) => `${value}%`}
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent formatter={(value) => `${Number(value).toFixed(2)}%`} />}
                        contentStyle={{
                          backgroundColor: "hsl(222, 47%, 11%)",
                          border: "1px solid hsl(142, 76%, 36%)",
                          borderRadius: "8px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="hsl(142, 76%, 36%)"
                        strokeWidth={3}
                        dot={false}
                        fill="url(#successGradient)"
                        animationDuration={500}
                        animationEasing="ease-in-out"
                        isAnimationActive={true}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </TabsContent>

              <TabsContent value="latency" className="mt-0">
                <ChartContainer
                  config={{
                    value: {
                      label: "Latency",
                      color: "hsl(221, 83%, 53%)",
                    },
                  }}
                  className="h-[350px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={latencyData}>
                      <defs>
                        <linearGradient id="latencyGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 20%, 25%)" opacity={0.3} />
                      <XAxis
                        dataKey="time"
                        stroke="hsl(215, 16%, 47%)"
                        tick={{ fill: "hsl(215, 16%, 47%)", fontSize: 11 }}
                        interval="preserveStartEnd"
                      />
                      <YAxis
                        domain={[0, 600]}
                        stroke="hsl(215, 16%, 47%)"
                        tick={{ fill: "hsl(215, 16%, 47%)", fontSize: 12 }}
                        tickFormatter={(value) => `${value}ms`}
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent formatter={(value) => `${Number(value).toFixed(0)}ms`} />}
                        contentStyle={{
                          backgroundColor: "hsl(222, 47%, 11%)",
                          border: "1px solid hsl(221, 83%, 53%)",
                          borderRadius: "8px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="hsl(221, 83%, 53%)"
                        strokeWidth={3}
                        dot={false}
                        fill="url(#latencyGradient)"
                        animationDuration={500}
                        animationEasing="ease-in-out"
                        isAnimationActive={true}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </TabsContent>

              <TabsContent value="cost" className="mt-0">
                <ChartContainer
                  config={{
                    value: {
                      label: "Cost Saved",
                      color: "hsl(25, 95%, 53%)",
                    },
                  }}
                  className="h-[350px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={costData}>
                      <defs>
                        <linearGradient id="costGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(25, 95%, 53%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 20%, 25%)" opacity={0.3} />
                      <XAxis
                        dataKey="time"
                        stroke="hsl(215, 16%, 47%)"
                        tick={{ fill: "hsl(215, 16%, 47%)", fontSize: 11 }}
                        interval="preserveStartEnd"
                      />
                      <YAxis
                        domain={[0, 120]}
                        stroke="hsl(215, 16%, 47%)"
                        tick={{ fill: "hsl(215, 16%, 47%)", fontSize: 12 }}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent formatter={(value) => `$${Number(value).toFixed(2)}`} />}
                        contentStyle={{
                          backgroundColor: "hsl(222, 47%, 11%)",
                          border: "1px solid hsl(25, 95%, 53%)",
                          borderRadius: "8px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="hsl(25, 95%, 53%)"
                        strokeWidth={3}
                        dot={false}
                        fill="url(#costGradient)"
                        animationDuration={500}
                        animationEasing="ease-in-out"
                        isAnimationActive={true}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </TabsContent>
            </Tabs>

            <p className="mt-6 text-center text-sm text-slate-400">
              Monitor performance, latency, and cost efficiency in real time with FailSafe Sender.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
