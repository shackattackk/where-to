import { integer, text, pgTable, timestamp, bigint } from "drizzle-orm/pg-core";

export const reviews = pgTable("reviews", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  restaurantId: bigint("restaurant_id", { mode: "number" }).notNull(),
  rating: integer("rating").notNull(),
  userReview: text("user_review"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
