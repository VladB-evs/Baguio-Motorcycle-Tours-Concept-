import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const images = [
  {
    url: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=2574",
    caption: "Burnham Park",
    description: "Iconic city center park with boating lagoon",
    link: "/attractions/burnham-park"
  },
  {
    url: "https://images.unsplash.com/photo-1605850868349-06b77c50903a?q=80&w=2574",
    caption: "Camp John Hay",
    description: "Former US military base turned leisure destination",
    link: "/attractions/camp-john-hay"
  },
  {
    url: "https://images.unsplash.com/photo-1584544775678-0e08e597f368?q=80&w=2574",
    caption: "Session Road",
    description: "The city's main thoroughfare and shopping district",
    link: "/attractions/session-road"
  },
  {
    url: "https://images.unsplash.com/photo-1587547131116-a0655a526190?q=80&w=2574",
    caption: "Mines View Park",
    description: "Panoramic views of the Benguet mountains",
    link: "/attractions/mines-view"
  },
  {
    url: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2574",
    caption: "Baguio Cathedral",
    description: "Pink-colored church with twin spires",
    link: "/attractions/baguio-cathedral"
  },
  {
    url: "https://images.unsplash.com/photo-1578524598679-67645a696a99?q=80&w=2574",
    caption: "Wright Park",
    description: "Famous horse-riding destination",
    link: "/attractions/wright-park"
  }
];

export default function Gallery() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Discover Baguio's Beauty
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Take a glimpse at the breathtaking locations you'll visit during our motorcycle tours
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, i) => (
            <Card key={i} className="overflow-hidden group">
              <CardContent className="p-0">
                <Link href={image.link}>
                  <a className="block">
                    <AspectRatio ratio={4/3}>
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </AspectRatio>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {image.caption}
                        <ArrowRight className="w-4 h-4 inline ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h3>
                      <p className="text-sm text-muted-foreground">{image.description}</p>
                    </div>
                  </a>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}