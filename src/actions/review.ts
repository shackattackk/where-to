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

function generateRestaurantId() {
  return Math.floor(Math.random() * 1000000);
}

export async function addReview(data: z.infer<typeof reviewSchema>) {
  const parsedData = reviewSchema.parse(data);
  const restaurantId = generateRestaurantId();
  await db.insert(reviews).values({
    rating: parsedData.rating,
    restaurantId: restaurantId,
    userReview: parsedData.comments,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}