import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function CampJohnHay() {
  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605850868349-06b77c50903a?q=80&w=2574')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="container h-full flex flex-col justify-end pb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Camp John Hay
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              A historic retreat transformed into a premier mountain resort
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-12">
        <Link href="/#tours">
          <Button variant="ghost" className="mb-8 hover:bg-primary/5">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tours
          </Button>
        </Link>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="max-w-3xl">
            <p className="lead">
              Camp John Hay, originally established as a rest and recreation facility for American soldiers, has been transformed into one of Baguio's premier tourist destinations. This former US military base now serves as a luxurious mountain resort and recreation center.
            </p>

            <div className="my-12">
              <h2 className="text-3xl font-bold mb-6">Historical Significance</h2>
              <p>
                Established in 1903, Camp John Hay played a significant role during World War II and served as a recuperation center for American soldiers. Today, it stands as a testament to Baguio's American colonial heritage while offering modern amenities and activities.
              </p>
            </div>

            <div className="my-12">
              <h2 className="text-3xl font-bold mb-6">Key Attractions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Historical Core</h3>
                  <p>Features the Bell House, History Trail, and the unique Cemetery of Negativism, each telling a part of the camp's rich history.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Pine Trees</h3>
                  <p>Hundreds of towering Benguet pine trees create a serene atmosphere perfect for nature walks and meditation.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Eco-Trail</h3>
                  <p>A well-maintained trail system perfect for nature walks, bird watching, and photography enthusiasts.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Golf Course</h3>
                  <p>A world-class 18-hole golf course designed to challenge players while offering stunning mountain views.</p>
                </div>
              </div>
            </div>

            <div className="my-12">
              <h2 className="text-3xl font-bold mb-6">Available Activities</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Historical tours of the military base
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Hiking and nature photography
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Dining at various restaurants
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Shopping at the Commissary
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Adventure activities at the Treetop Adventure
                </li>
              </ul>
            </div>
          </div>

          <div className="not-prose">
            <Link href="/#tours">
              <Button size="lg" className="mt-8">
                Book a Tour Including Camp John Hay
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}