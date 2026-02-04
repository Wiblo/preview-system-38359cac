import Image from "next/image"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"

interface FeatureBlock {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: "left" | "right"
}

export interface FeaturesSectionProps {
  className?: string
}

/**
 * About page features section with alternating image/text layout.
 * Edit the blocks array below to customize for your business.
 */
export function AboutFeatures({ className }: FeaturesSectionProps) {
  const blocks: FeatureBlock[] = [
    {
      id: "value-1",
      title: "Traditional Recipes",
      description:
        "Every treat at Beck's Bakes follows authentic South African recipes passed down through generations. We never cut corners or take shortcuts — from our hand-twisted koeksisters to our perfectly spiced hertzoggies, each item is made exactly the way it should be. These aren't adaptations or modern interpretations; they're the real thing, baked with care and respect for tradition.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=800&fit=crop",
      imageAlt: "Traditional baking with authentic recipes",
      imagePosition: "right",
    },
    {
      id: "value-2",
      title: "Fresh Daily",
      description:
        "We bake fresh every single day, starting before sunrise to ensure you get the warmest, most delicious treats possible. Our rusks are dried to perfection, our vetkoek is made fresh throughout the day, and our melktert is always creamy and cool. Nothing sits around — if it's on our counter, it was baked that morning with love and attention to detail.",
      image: "https://images.unsplash.com/photo-1588195538326-c5b1e5b30d14?w=800&h=800&fit=crop",
      imageAlt: "Fresh baked goods daily",
      imagePosition: "left",
    },
    {
      id: "value-3",
      title: "Quality Ingredients",
      description:
        "We believe great baking starts with great ingredients. That's why we source the finest flour, butter, and spices, and never compromise on quality. Our peppermint crisp tarts use real chocolate, our koeksisters are made with pure syrup, and every batch of rusks is baked with premium ingredients that make all the difference in taste and texture.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=800&fit=crop",
      imageAlt: "Premium quality baking ingredients",
      imagePosition: "right",
    },
    {
      id: "value-4",
      title: "Authentically South African",
      description:
        "Beck's Bakes is proudly South African, through and through. We're not just a bakery that happens to make South African treats — we're keepers of a culinary tradition that connects people to their heritage and introduces others to the wonderful world of South African baking. From the first bite of our koeksister to the last crumb of our melktert, you'll taste the authenticity in everything we create.",
      image: "https://images.unsplash.com/photo-1486893732792-ab0085cb2d43?w=800&h=800&fit=crop",
      imageAlt: "Authentic South African bakery tradition",
      imagePosition: "left",
    },
  ]

  return (
    <SectionWrapper className={cn("bg-background", className)}>
      <Container>
        {blocks.map((block, index) => (
          <div key={block.id} className={cn(index > 0 && "mt-20 md:mt-32")}>
            <div
              className={cn(
                "flex flex-col items-center gap-10 md:gap-20 xl:gap-[140px]",
                block.imagePosition === "right"
                  ? "md:flex-row-reverse"
                  : "md:flex-row"
              )}
            >
              {/* Desktop Image */}
              <div className="relative hidden aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:flex md:max-h-[300px] md:max-w-[300px] xl:max-h-[520px] xl:max-w-[520px]">
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 300px, 520px"
                />
              </div>

              {/* Content */}
              <div className="flex w-full flex-col gap-8">
                {/* Heading */}
                <div className="flex w-full justify-center md:justify-start">
                  <h2 className="font-heading text-balance text-center text-3xl font-bold text-foreground md:text-left md:text-4xl lg:text-5xl">
                    {block.title}
                  </h2>
                </div>

                {/* Mobile Image */}
                <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:hidden">
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                {/* Description */}
                <div className="flex w-full flex-col gap-8">
                  <p className="text-base font-medium leading-relaxed text-muted-foreground">
                    {block.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </SectionWrapper>
  )
}
