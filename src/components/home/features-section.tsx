
import { Pencil2Icon, HamburgerMenuIcon, GlobeIcon } from "@radix-ui/react-icons";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          App Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <GlobeIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
            <p className="text-muted-foreground">
              Easily locate and choose restaurants in your area.
            </p>
          </div>
          <div className="text-center">
            <Pencil2Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Add Reviews</h3>
            <p className="text-muted-foreground">
              Share your dining experiences with the community.
            </p>
          </div>
          <div className="text-center">
            <HamburgerMenuIcon className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">
              Restaurant Details
            </h3>
            <p className="text-muted-foreground">
              View comprehensive information and user reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}