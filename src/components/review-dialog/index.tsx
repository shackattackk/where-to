"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import StarRating from "../ui/star-rating";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { addReview } from "@/actions/review"; // Import the server action

const reviewSchema = z.object({
  rating: z
    .number()
    .min(1, "Rating is required")
    .max(5, "Rating must be between 1 and 5"),
  comments: z.string().min(1, "Comments are required"),
});

export default function ReviewDialog({
  restaurantId,
}: {
  restaurantId: number;
}) {
  const { handleSubmit, control, reset } = useForm<
    z.infer<typeof reviewSchema>
  >({
    resolver: zodResolver(reviewSchema),
  });

  const onSubmit = async (data: z.infer<typeof reviewSchema>) => {
    await addReview(data, restaurantId);
    console.log("Review submitted successfully");
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Review</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a Review</DialogTitle>
          <DialogDescription>
            Please fill out the form below to add your review.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4"
        >
          <div className="flex flex-col space-y-4">
            <Label>Rate your experience</Label>
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <StarRating {...field} onRatingChange={field.onChange} />
              )}
            />
          </div>
          <Label>Comments</Label>
          <Controller
            name="comments"
            control={control}
            render={({ field }) => (
              <Textarea placeholder="Type your comments here." {...field} />
            )}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Submit Review</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
