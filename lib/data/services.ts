/**
 * Services data - defines all services offered by the business.
 * Used by: FeaturedServices, ServicesGrid, ServiceCard, /services/[slug] pages
 *
 * This data drives:
 * - Service cards on homepage (FeaturedServices)
 * - Services listing page (ServicesGrid)
 * - Individual service detail pages (ServiceDetailSection)
 * - Service JSON-LD schema
 */

export interface Service {
  /** URL-friendly identifier (e.g., "deep-tissue-massage") */
  slug: string
  /** Display name */
  name: string
  /** Short description for cards (1-2 sentences) */
  shortDescription: string
  /** Full description for detail page (can be multiple paragraphs) */
  description: string
  /** Lucide icon name (e.g., "Heart", "Zap", "Clock") */
  icon?: string
  /** Image path or URL */
  image?: string
  /** Alt text for image */
  imageAlt?: string
  /** Show on homepage featured section */
  featured?: boolean
  /** Duration (e.g., "60 minutes") */
  duration?: string
  /** Price (e.g., "$80" or "From $50") */
  price?: string
  /** List of benefits/features */
  benefits?: string[]
  /** Who this service is ideal for */
  idealFor?: string[]
}

/**
 * All services offered by the business.
 * Edit this array to add, remove, or modify services.
 */
export const services: Service[] = [
  {
    slug: "koeksisters",
    name: "Koeksisters",
    shortDescription:
      "Traditional braided doughnuts soaked in ice-cold syrup. Crispy on the outside, syrupy sweet on the inside.",
    description:
      "Our koeksisters are made fresh daily using a traditional family recipe. Each one is carefully braided, deep-fried to golden perfection, and immediately plunged into ice-cold syrup for that signature crispy-sweet texture.\n\nA beloved South African treat perfect with tea or coffee. Available in traditional and Cape Malay varieties.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&h=600&fit=crop",
    imageAlt: "Golden braided koeksisters",
    featured: true,
    price: "R35 for 6",
    benefits: [
      "Made fresh daily",
      "Traditional family recipe",
      "Available in traditional and Cape Malay styles",
      "Perfect with tea or coffee",
    ],
    idealFor: [
      "Tea time treats",
      "Special occasions",
      "Gifts for loved ones",
    ],
  },
  {
    slug: "melktert",
    name: "Melktert (Milk Tart)",
    shortDescription:
      "Creamy custard filling in a buttery pastry crust, dusted with cinnamon. A South African classic.",
    description:
      "Our melktert features a silky smooth custard filling made with fresh milk, eggs, and a hint of vanilla, all nestled in a buttery shortcrust pastry and finished with a light dusting of cinnamon.\n\nThis iconic South African dessert is perfect for any occasion - from Sunday lunch to special celebrations.",
    icon: "Cookie",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&h=600&fit=crop",
    imageAlt: "Creamy melktert with cinnamon topping",
    featured: true,
    price: "R85 whole / R15 slice",
    benefits: [
      "Silky smooth custard",
      "Fresh ingredients daily",
      "Traditional cinnamon finish",
      "Available whole or by the slice",
    ],
    idealFor: [
      "Dessert lovers",
      "Family gatherings",
      "Traditional South African celebrations",
    ],
  },
  {
    slug: "rusks",
    name: "Buttermilk Rusks",
    shortDescription:
      "Twice-baked crunchy rusks perfect for dunking. Made with buttermilk for authentic flavor.",
    description:
      "Our buttermilk rusks are baked twice to achieve the perfect crunch. Made with real buttermilk, these traditional South African favorites are ideal for dunking in your morning coffee or tea.\n\nAvailable in original, whole wheat, muesli, and aniseed varieties. Packaged in 500g bags to keep them fresh.",
    icon: "Coffee",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop",
    imageAlt: "Crunchy buttermilk rusks",
    featured: true,
    price: "R45 per 500g",
    benefits: [
      "Perfect dunking consistency",
      "Multiple flavors available",
      "Made with real buttermilk",
      "Long-lasting freshness",
    ],
  },
  {
    slug: "vetkoek",
    name: "Vetkoek",
    shortDescription:
      "Fluffy deep-fried bread, golden and pillowy. Served plain or filled with savory or sweet fillings.",
    description:
      "Vetkoek (literally 'fat cake') is a traditional South African fried dough bread. Our vetkoek are made fresh throughout the day - crispy on the outside, soft and fluffy on the inside.\n\nEnjoy them plain, with butter and jam, or filled with savory mince, cheese, or polony. A true South African comfort food.",
    icon: "Cake",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop",
    imageAlt: "Golden fried vetkoek",
    featured: true,
    price: "R18 plain / R35 filled",
    benefits: [
      "Made fresh throughout the day",
      "Crispy outside, fluffy inside",
      "Sweet or savory filling options",
      "Traditional recipe",
    ],
  },
  {
    slug: "peppermint-crisp-tart",
    name: "Peppermint Crisp Tart",
    shortDescription:
      "Layers of Tennis biscuits, caramel, cream, and Peppermint Crisp chocolate. No-bake perfection.",
    description:
      "A South African fridge tart favorite! Layers of Tennis biscuits soaked in caramel, topped with whipped cream and crushed Peppermint Crisp chocolate bars.\n\nThis no-bake dessert is refreshingly minty and absolutely irresistible. Perfect for warm Johannesburg days.",
    icon: "IceCream",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=600&fit=crop",
    imageAlt: "Layered peppermint crisp tart",
    featured: false,
    price: "R95 whole / R18 slice",
  },
  {
    slug: "hertzoggies",
    name: "Hertzoggies",
    shortDescription:
      "Jam-filled tart topped with coconut meringue. A classic South African teatime treat.",
    description:
      "These traditional South African tarts feature a shortcrust pastry base filled with apricot jam and topped with fluffy coconut meringue.\n\nNamed after General J.B.M. Hertzog, these bite-sized treats are perfect for tea time or special occasions.",
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&h=600&fit=crop",
    imageAlt: "Coconut meringue hertzoggies",
    featured: false,
    price: "R40 for 6",
  },
]

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get a single service by its slug.
 * Returns undefined if not found.
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

/**
 * Get all services marked as featured.
 * Used for homepage featured services section.
 */
export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured)
}

/**
 * Get all services.
 * Used for services listing page.
 */
export function getAllServices(): Service[] {
  return services
}

/**
 * Get all service slugs.
 * Used for generateStaticParams in dynamic routes.
 */
export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}
