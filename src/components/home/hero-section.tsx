
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Discover, Review, and Enjoy Local Restaurants
        </h1>
        <p className="text-xl mb-8">
          Your ultimate companion for finding the perfect dining experience.
        </p>
        <Button asChild size="lg">
        </Button>
      </div>
    </section>
  );
}