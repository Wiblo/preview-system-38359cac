import type { Metadata } from "next"
import { LocationSection } from "@/components/sections/location/LocationSection"
import { CTAContactSection } from "@/components/sections/cta/CTAContactSection"
import { businessInfo } from "@/lib/data/business-info"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Visit ${businessInfo.name} in ${businessInfo.address.area}, ${businessInfo.address.city}. Find our location, hours, and contact information. Fresh South African baked goods daily.`,
}

export default function ContactPage() {
  return (
    <>
      <LocationSection title="Visit Our Bakery" />
      <CTAContactSection />
    </>
  )
}
