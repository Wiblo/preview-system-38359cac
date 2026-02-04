import { HeroWithImage } from "@/components/sections/hero/HeroWithImage"
import { FeaturedServices } from "@/components/sections/services/FeaturedServices"
import { AboutPreview } from "@/components/sections/about/AboutPreview"
import { FeaturesSection } from "@/components/sections/features/FeaturesSection"
import { CTASection } from "@/components/sections/cta/CTASection"
import { LocationSection } from "@/components/sections/location/LocationSection"
import { FAQSection } from "@/components/sections/faq/FAQSection"

export default function HomePage() {
  return (
    <>
      <HeroWithImage />
      <FeaturedServices />
      <AboutPreview />
      <FeaturesSection />
      <CTASection />
      <LocationSection />
      <FAQSection />
    </>
  )
}
