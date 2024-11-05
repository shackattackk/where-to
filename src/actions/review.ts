"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { reviews } from "@/lib/db/schema/review";

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
