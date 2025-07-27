/**
 * 🌟 Testimonial Types - Star Rating & Review Interfaces
 * 
 * TypeScript interfaces for testimonial and review data structures.
 * Supports star ratings, MYPE transformations, and social proof elements.
 * 
 * @features
 * - Strict TypeScript interfaces for type safety
 * - Star rating configuration (1-5 scale)
 * - MYPE transformation metrics
 * - Social proof validation
 */

/**
 * Star rating configuration interface
 * @interface StarRating
 */
export interface StarRating {
  /** Rating value from 1 to 5 */
  readonly rating: 1 | 2 | 3 | 4 | 5;
  /** Total number of reviews */
  readonly totalReviews: number;
  /** Show animated star effect */
  readonly animated?: boolean;
}

/**
 * MYPE transformation showcase interface
 * @interface MyPeTransformation
 */
export interface MyPeTransformation {
  /** Unique identifier */
  readonly id: string;
  /** Business name */
  readonly businessName: string;
  /** Industry sector */
  readonly industry: string;
  /** Transformation period in months */
  readonly transformationMonths: number;
  /** Before/after metrics */
  readonly metrics: {
    readonly before: string;
    readonly after: string;
    readonly improvement: string;
  };
  /** Business owner testimonial */
  readonly testimonial?: TestimonialData;
}

/**
 * Testimonial data interface
 * @interface TestimonialData
 */
export interface TestimonialData {
  /** Unique testimonial ID */
  readonly id: string;
  /** Customer name */
  readonly customerName: string;
  /** Business name */
  readonly businessName: string;
  /** Review content */
  readonly review: string;
  /** Star rating (1-5) */
  readonly rating: StarRating['rating'];
  /** Review date */
  readonly date: string;
  /** Customer location */
  readonly location: string;
  /** Business industry */
  readonly industry: string;
  /** Verification status */
  readonly verified: boolean;
}

/**
 * Social proof statistics interface
 * @interface SocialProofStats
 */
export interface SocialProofStats {
  /** Total MYPEs transformed */
  readonly mypesTransformed: number;
  /** Average rating */
  readonly averageRating: number;
  /** Total reviews collected */
  readonly totalReviews: number;
  /** Success rate percentage */
  readonly successRate: number;
}
