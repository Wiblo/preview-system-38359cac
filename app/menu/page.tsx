import type { Metadata } from "next"
import { businessInfo } from "@/lib/data/business-info"
import { ServicesHero } from "@/components/sections/hero/ServicesHero"
import { MenuDisplay } from "@/components/sections/menu/MenuDisplay"

export const metadata: Metadata = {
  title: "Our Menu",
  description: `Browse our menu of traditional South African baked goods at ${businessInfo.name}. Fresh koeksisters, melktert, rusks, vetkoek, and more baked daily in Melville, Johannesburg.`,
}

/**
 * MENU PAGE
 *
 * Displays Beck's Bakes full menu of traditional South African baked goods
 * with the custom MenuDisplay component for a beautiful presentation.
 */
export default function MenuPage() {
  return (
    <>
      <ServicesHero />
      <MenuDisplay />
    </>
  )
}
