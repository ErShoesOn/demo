export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  date: string;
  source?: string;
};

/**
 * VERIFIED REVIEWS ONLY.
 *
 * Do not add invented names, quotes, ratings or dates. Add a testimonial only
 * after the customer has supplied it and given permission to publish it.
 * Until then the website shows an honest empty state on /reviews.
 */
export const testimonials: Testimonial[] = [];

export const reviewsNote =
  "We publish only feedback we can verify and have permission to share. We do not display invented reviews, star ratings or customer names. As verified feedback is collected, it will appear here.";
