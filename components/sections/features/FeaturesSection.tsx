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
 * Homepage features section with alternating image/text layout.
 * Edit the blocks array below to customize for your business.
 */
export function FeaturesSection({ className }: FeaturesSectionProps) {
  const blocks: FeatureBlock[] = [
    {
      id: "feature-1",
      title: "Fresh Daily, No Exceptions",
      description:
        "We start baking before sunrise so you get the freshest koeksisters, vetkoek, and melktert every single day. Nothing sits overnight - if it's on our shelf, it was baked this morning with care and attention to traditional methods that bring out authentic South African flavors.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=800&fit=crop",
      imageAlt: "Fresh baked goods prepared daily",
      imagePosition: "right",
    },
    {
      id: "feature-2",
      title: "Traditional Family Recipes",
      description:
        "Our recipes come from generations of South African bakers who knew that the best koeksisters need ice-cold syrup and the perfect melktert requires patience. We honor these time-tested methods, using quality ingredients and proper techniques to create treats that taste like home.",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=800&fit=crop",
      imageAlt: "Traditional baking methods",
      imagePosition: "left",
    },
    {
      id: "feature-3",
      title: "A Taste of Home",
      description:
        "Whether you grew up with these treats or you're discovering them for the first time, Beck's Bakes offers authentic South African flavors in the heart of Melville. From morning rusks with your coffee to special occasion hertzoggies, we bring the warmth of traditional baking to your table.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=800&fit=crop",
      imageAlt: "Traditional South African baked treats",
      imagePosition: "right",
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
