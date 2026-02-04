import Image from "next/image"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionWrapper } from "@/components/layout/SectionWrapper"

export interface AboutFullSectionProps {
  className?: string
}

/**
 * Full about section for the dedicated about page.
 * Edit the content below to customize for your business.
 */
export function AboutFullSection({ className }: AboutFullSectionProps) {
  return (
    <SectionWrapper className={cn("bg-background", className)}>
      <Container>
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20 xl:gap-[140px]">
          {/* Desktop Image */}
          <div className="relative hidden aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:flex md:max-h-[300px] md:max-w-[300px] xl:max-h-[520px] xl:max-w-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=800&fit=crop"
              alt="Traditional South African bakery with fresh baked goods"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 300px, 520px"
              priority
            />
          </div>

          {/* Content */}
          <div className="flex w-full flex-col gap-8">
            {/* Heading */}
            <div className="flex w-full justify-center md:justify-start">
              <h1 className="font-heading text-balance text-center text-3xl font-bold text-foreground md:text-left md:text-4xl lg:text-5xl">
                Our Story
              </h1>
            </div>

            {/* Mobile Image */}
            <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-4xl md:hidden">
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=800&fit=crop"
                alt="Traditional South African bakery with fresh baked goods"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Paragraphs */}
            <div className="flex w-full flex-col gap-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Beck&apos;s Bakes began with a simple dream: to bring the authentic taste of South African baking to the heart of Melville. For generations, our family has been passionate about preserving the traditional recipes that define South African comfort food — from the sweet, syrupy koeksisters to the creamy perfection of melktert.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Every morning before dawn, our ovens come alive with the warmth of fresh baking. We believe in doing things the old-fashioned way, taking the time to let our rusks dry properly, to twist each koeksister by hand, and to ensure every peppermint crisp tart has just the right balance of sweetness and texture.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our bakery is more than just a business — it&apos;s a piece of home for South Africans living abroad, and a delicious discovery for those new to our country&apos;s rich culinary heritage. When you step into Beck&apos;s Bakes, you&apos;re not just buying baked goods; you&apos;re experiencing a tradition that has been lovingly passed down through generations.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
