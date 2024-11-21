"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { reviews } from "@/lib/db/schema/review";
import { eq, sql } from "drizzle-orm";
import { Review } from "@/app/model/review";

const reviewSchema = z.object({
  rating: z
    .number()
    .min(1, "Rating is required")
    .max(5, "Rating must be between 1 and 5"),
  comments: z.string().min(1, "Comments are required"),
});

export async function addReview(
  data: z.infer<typeof reviewSchema>,
  restaurantId: number
) {
  const parsedData = reviewSchema.parse(data);
  await db.insert(reviews).values({
    rating: parsedData.rating,
    restaurantId: restaurantId,
    userReview: parsedData.comments,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

export async function getReviewsByRestaurantId(
  restaurantId: number
): Promise<Review[]> {
  try {
    const restaurantReviews = await db
      .select()
      .from(reviews)
      .where(eq(reviews.restaurantId, restaurantId))
      .orderBy(reviews.createdAt);

    return restaurantReviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw new Error("Failed to fetch reviews");
  }
}

export async function getRestaurantAverageRating(
  restaurantId: number
): Promise<number> {
  try {
    const result = await db
      .select({
        averageRating: sql<number>`AVG(${reviews.rating})`,
      })
      .from(reviews)
      .where(eq(reviews.restaurantId, restaurantId));

    return Number(result[0].averageRating) || 0;
  } catch (error) {
    console.error("Error calculating average rating:", error);
    throw new Error("Failed to calculate average rating");
  }
}

export async function getReviewCount(restaurantId: number): Promise<number> {
  try {
    const result = await db
      .select({
        count: sql<number>`COUNT(*)`,
      })
      .from(reviews)
      .where(eq(reviews.restaurantId, restaurantId));

    return Number(result[0].count);
  } catch (error) {
    console.error("Error counting reviews:", error);
    throw new Error("Failed to count reviews");
  }
}
