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

export default function ReviewDialog() {
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
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-4">
            <Label>Rate your experience</Label>
            <div className="flex items-center justify-center">
              <StarRating onRatingChange={(rating) => console.log(rating)} />
            </div>
          </div>
          <Label>Comments</Label>
          <Textarea placeholder="Type your comments here." />
        </div>
        <DialogFooter>
          <Button type="submit">Submit Review</Button>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
