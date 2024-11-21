import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Restaurant } from "../../model/restaurants";
import { Review } from "../../model/review";
import { getReviewsByRestaurantId, getRestaurantAverageRating, getReviewCount } from "@/actions/review";
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          {i < Math.floor(rating) ? (
            <StarFilledIcon className="w-5 h-5 text-yellow-400" />
          ) : (
            <StarIcon className="w-5 h-5 text-gray-300" />
          )}
        </span>
      ))}
    </div>
  );
};

export default async function RestaurantPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const restaurantId = parseInt((await params).id)
  
  // Fetch all data in parallel
  const [reviews, averageRating, reviewCount] = await Promise.all([
    getReviewsByRestaurantId(restaurantId),
    getRestaurantAverageRating(restaurantId),
    getReviewCount(restaurantId)
  ])

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">Restaurant Name</h1>
              <p className="text-gray-500">Restaurant Address</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">
                  {averageRating.toFixed(1)}
                </span>
                <StarRating rating={averageRating} />
              </div>
              <p className="text-sm text-gray-500">
                {reviewCount} reviews
              </p>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Reviews</h2>
        {reviews.map((review: Review) => (
          <Card key={review.id}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">
                      {format(new Date(review.createdAt), "MMM d, yyyy")}
                    </span>
                  </div>
                  <StarRating rating={review.rating} />
                  <p className="text-gray-600">{review.userReview}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {reviews.length === 0 && (
          <p className="text-center text-gray-500">
            No reviews yet. Be the first to review!
          </p>
        )}
      </div>
    </div>
  )
}
