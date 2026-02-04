/**
 * Testimonials data - customer reviews and ratings.
 * Used by: TestimonialsSection component (includes Review JSON-LD schema)
 *
 * The TestimonialsSection component automatically generates JSON-LD structured data
 * from this array, so search engines can display star ratings in results.
 */

export interface Testimonial {
  /** Unique identifier */
  id: string
  /** Customer's name */
  name: string
  /** The testimonial text/quote */
  text: string
  /** Rating out of 5 (e.g., 5, 4.5, 4) */
  rating: number
  /** Optional: customer's role, title, or location */
  role?: string
  /** Optional: customer's photo URL */
  avatar?: string
  /** Optional: date of the review */
  date?: string
  /** Optional: source of the review */
  source?: "google" | "facebook" | "yelp" | "website"
  /** Optional: whether this is a verified Google review */
  isGoogleVerified?: boolean
}

/** Google Business rating info */
export interface GoogleRating {
  /** Average rating (e.g., 4.8) */
  average: number
  /** Total number of reviews */
  count: number
  /** URL to Google Business page */
  url: string
}

/**
 * Customer testimonials.
 * Edit this array to add, remove, or modify testimonials.
 *
 * Tips:
 * - Use real customer feedback when possible
 * - Include specific details about their experience
 * - Vary the length of quotes for visual interest
 * - Higher ratings (4-5 stars) are more impactful
 */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Thandi M.",
    text: "The koeksisters here are just like my ouma used to make! I moved to Joburg from Cape Town and finding Beck's Bakes was like finding a piece of home. Fresh, authentic, and absolutely delicious every single time.",
    rating: 5,
    source: "google",
    isGoogleVerified: true,
    date: "2 weeks ago",
  },
  {
    id: "2",
    name: "James van der Merwe",
    text: "Best rusks in Johannesburg, hands down. I buy them every week for my morning coffee. The traditional buttermilk ones remind me of my childhood on the farm. Beck's Bakes is the real deal!",
    rating: 5,
    source: "google",
    isGoogleVerified: true,
    date: "1 month ago",
  },
  {
    id: "3",
    name: "Sarah K.",
    text: "I brought my Australian friends here to try authentic South African treats and they absolutely loved it! The melktert was a huge hit. The staff are so friendly and the bakery always smells amazing. Highly recommend!",
    rating: 5,
    source: "google",
    isGoogleVerified: true,
    date: "1 month ago",
  },
  {
    id: "4",
    name: "Pieter Nel",
    text: "Finally, a bakery that makes vetkoek properly! Light, fluffy, and fresh throughout the day. The peppermint crisp tart is also incredible. This place is a Melville treasure and I tell everyone about it.",
    rating: 5,
    source: "google",
    isGoogleVerified: true,
    date: "2 months ago",
  },
]

/**
 * Google Business rating info.
 * Update this with your actual Google Business data.
 */
export const googleRating: GoogleRating = {
  average: 4.8,
  count: 127,
  url: "https://g.page/r/your-google-business-url",
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get all testimonials.
 */
export function getAllTestimonials(): Testimonial[] {
  return testimonials
}

/**
 * Get a subset of testimonials (e.g., for homepage).
 */
export function getTestimonialsPreview(count: number = 3): Testimonial[] {
  return testimonials.slice(0, count)
}

/**
 * Get only Google-verified reviews.
 */
export function getGoogleReviews(): Testimonial[] {
  return testimonials.filter((t) => t.source === "google" || t.isGoogleVerified)
}

/**
 * Calculate average rating from all testimonials.
 * Used for AggregateRating JSON-LD schema.
 */
export function getAverageRating(): number {
  if (testimonials.length === 0) return 0
  const total = testimonials.reduce((sum, t) => sum + t.rating, 0)
  return Math.round((total / testimonials.length) * 10) / 10 // Round to 1 decimal
}

/**
 * Get total number of testimonials.
 * Used for AggregateRating JSON-LD schema.
 */
export function getTestimonialCount(): number {
  return testimonials.length
}
