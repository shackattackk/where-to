import { integer, text, pgTable, timestamp, check } from 'drizzle-orm/pg-core';

export const reviews = pgTable('reviews', {
  id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
  restaurantId: integer('restaurant_id').notNull(),
  rating: integer('rating').notNull(),
  userReview: text('user_review'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow(),
});



