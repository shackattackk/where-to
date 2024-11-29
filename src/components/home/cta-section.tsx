
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section id="cta" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
        <p className="text-xl mb-8">
          Download the app now and start discovering amazing restaurants
          near you!
        </p>
        <div className="space-x-4">
          <Button variant="secondary" size="lg" asChild>
          </Button>
          <Button variant="secondary" size="lg" asChild>
          </Button>
        </div>
      </div>
    </section>
  );
}