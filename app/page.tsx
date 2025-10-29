import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { ApiExamples } from "@/components/api-examples"
import { SdkExamples } from "@/components/sdk-examples"
import { HowItWorks } from "@/components/how-it-works"
import { VisionSection } from "@/components/vision-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <ApiExamples />
      <SdkExamples />
      <HowItWorks />
      <VisionSection />
      <Footer />
    </main>
  )
}
