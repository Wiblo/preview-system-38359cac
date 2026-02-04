"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"
import { services } from "@/lib/data/services"
import { cn } from "@/lib/utils"

/**
 * MenuDisplay - A warm, inviting bakery menu layout
 *
 * Displays all bakery items with prominent imagery, descriptions, and pricing
 * in a traditional South African bakery style.
 */
export function MenuDisplay() {
  return (
    <SectionWrapper className="bg-gradient-to-b from-background via-secondary/20 to-background">
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-6 py-2">
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
              Fresh Daily
            </span>
          </div>
          <h2 className="mb-4 font-heading text-4xl font-bold text-balance text-foreground md:text-5xl">
            Our Menu
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Traditional South African baked goods made fresh daily with authentic recipes
            passed down through generations.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((item, index) => (
            <MenuItem key={item.slug} item={item} index={index} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 rounded-3xl bg-accent/10 p-8 text-center md:p-12">
          <p className="mb-4 font-heading text-xl font-semibold text-balance text-foreground">
            Can&apos;t decide? Visit us in Melville!
          </p>
          <p className="mb-6 text-pretty text-muted-foreground">
            Come taste the difference that fresh, traditional baking makes.
            We&apos;re open daily and always have something warm coming out of the oven.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Visit Us Today
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  )
}

interface MenuItemProps {
  item: typeof services[0]
  index: number
}

/**
 * Individual menu item card with image, description, and price
 */
function MenuItem({ item, index }: MenuItemProps) {
  const isEven = index % 2 === 0

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-card shadow-md transition-all duration-300 hover:shadow-2xl",
        "border border-border hover:border-primary/30"
      )}
    >
      <Link
        href={`/services/${item.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {/* Image Section */}
        <div className="relative h-64 w-full overflow-hidden bg-muted md:h-80">
          {item.image && (
            <Image
              src={item.image}
              alt={item.imageAlt || item.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}

          {/* Warm gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Price badge */}
          {item.price && (
            <div className="absolute right-4 top-4">
              <div className="animate-fade-in-down rounded-full bg-primary px-4 py-2 shadow-lg backdrop-blur-sm">
                <span className="font-heading text-lg font-bold tabular-nums text-primary-foreground">
                  {item.price}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8">
          {/* Title */}
          <h3 className="mb-3 font-heading text-2xl font-bold text-balance text-foreground transition-colors group-hover:text-primary md:text-3xl">
            {item.name}
          </h3>

          {/* Description */}
          <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
            {item.shortDescription}
          </p>

          {/* Benefits/Features */}
          {item.benefits && item.benefits.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {item.benefits.slice(0, 3).map((benefit, idx) => (
                <span
                  key={idx}
                  className="animate-fade-in rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {benefit}
                </span>
              ))}
            </div>
          )}

          {/* Learn More Link */}
          <div className="flex items-center gap-2 pt-2 font-heading text-sm font-semibold text-accent transition-colors group-hover:text-primary">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Decorative corner accent */}
        <div
          className={cn(
            "absolute h-24 w-24 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
            isEven ? "bottom-0 left-0 -translate-x-12 translate-y-12" : "right-0 top-0 -translate-y-12 translate-x-12"
          )}
        />
      </Link>
    </div>
  )
}
