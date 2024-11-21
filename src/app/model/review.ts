export interface Review {
  id: number;
  restaurantId: number;
  rating: number;
  userReview: string | null;
  createdAt: Date;
  updatedAt: Date | null;
}