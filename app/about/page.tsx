import type { Metadata } from "next"
import { businessInfo } from "@/lib/data/business-info"
import { AboutFullSection } from "@/components/sections/about/AboutFullSection"
import { AboutFeatures } from "@/components/sections/features/AboutFeatures"
import { TestimonialsSection } from "@/components/sections/testimonials/TestimonialsSection"
import { CTASection } from "@/components/sections/cta/CTASection"

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${businessInfo.name}, a traditional South African bakery in Melville preserving authentic recipes and baking fresh favorites daily.`,
  openGraph: {
    title: `About Us | ${businessInfo.name}`,
    description: `Learn about ${businessInfo.name}, a traditional South African bakery in Melville preserving authentic recipes and baking fresh favorites daily.`,
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutFullSection />
      <AboutFeatures />
      <TestimonialsSection
        title="What Our Customers Say"
        subtitle="Hear from locals who love our authentic South African baked goods."
      />
      <CTASection />
    </>
  )
}
