/**
 * FAQ data - frequently asked questions and answers.
 * Used by: FAQSection component (includes FAQPage JSON-LD schema)
 *
 * The FAQSection component automatically generates JSON-LD structured data
 * from this array, so search engines can display rich FAQ results.
 */

export interface FAQ {
  /** Unique identifier for accordion state */
  id: string
  /** The question being asked */
  question: string
  /** The answer to the question */
  answer: string
}

/**
 * Frequently asked questions.
 * Edit this array to add, remove, or modify FAQs.
 *
 * Tips:
 * - Keep answers concise but complete
 * - Use natural language that matches how customers ask
 * - Order by most commonly asked first
 * - Include questions that address common objections
 */
export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "What time do you open? When is everything freshest?",
    answer:
      "We open at 6:00 AM Monday through Friday, 7:00 AM on Saturdays, and 8:00 AM on Sundays. Our first batches come out of the oven starting at 5:30 AM, so early morning is when everything is at its absolute freshest! Koeksisters and vetkoek are made throughout the day, so there's always something warm available.",
  },
  {
    id: "faq-2",
    question: "Can I place an order ahead of time for pickup?",
    answer:
      "Absolutely! We encourage calling ahead, especially for larger orders or if you want to ensure specific items are available. Call us at +27 11 123 4567 and we'll have your order ready when you arrive. We recommend ordering at least a day in advance for special occasions or bulk orders.",
  },
  {
    id: "faq-3",
    question: "Do you offer delivery in Johannesburg?",
    answer:
      "Currently, we focus on providing the best in-store experience and don't offer direct delivery. However, we're available on several delivery platforms for orders within Johannesburg. Visit us in Melville for the full experience and to pick up your treats while they're fresh!",
  },
  {
    id: "faq-4",
    question: "How long do your baked goods stay fresh?",
    answer:
      "Most items are best enjoyed within 2-3 days of purchase. Koeksisters are best eaten fresh on the day of purchase. Rusks will stay crunchy for weeks when stored in an airtight container. Melktert should be refrigerated and consumed within 3 days. We recommend storing vetkoek in a paper bag and warming them up before eating for the best texture.",
  },
  {
    id: "faq-5",
    question: "Do you cater for events or special occasions?",
    answer:
      "Yes! We love being part of your celebrations. Whether it's a birthday, wedding, corporate event, or family gathering, we can prepare platters of koeksisters, hertzoggies, and other favorites. Contact us at least 3-5 days in advance for event orders so we can ensure we have everything ready for your special day.",
  },
]

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get all FAQs.
 */
export function getAllFAQs(): FAQ[] {
  return faqs
}

/**
 * Get a subset of FAQs (e.g., for homepage preview).
 */
export function getFAQsPreview(count: number = 3): FAQ[] {
  return faqs.slice(0, count)
}
