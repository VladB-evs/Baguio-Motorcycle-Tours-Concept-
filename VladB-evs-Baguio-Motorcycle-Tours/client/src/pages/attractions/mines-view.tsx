import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Clock, MapPin, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function MinesView() {
  return (
    <article className="min-h-screen bg-background">
      <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mines View Park</h1>
          <p className="text-xl text-muted-foreground">
            A scenic overlook offering panoramic views of Benguet's mining town and mountain ranges
          </p>
        </div>

        {/* Quick Info */}
        <div className="bg-muted/30 mb-12">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground max-w-3xl mx-auto">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Open: 6 AM - 6 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Eastern Baguio</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4" />
                <span>Best at Sunrise</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <div className="text-center mb-8">
              <Link href="/#tours">
                <Button variant="ghost" className="hover:bg-primary/5">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Tours
                </Button>
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 prose prose-lg prose-headings:text-foreground prose-p:text-muted-foreground dark:prose-invert">
                <p className="lead text-foreground">
                  Mines View Park stands as one of Baguio's most famous tourist spots, offering breathtaking views of the Cordillera mountains and the historic mining town of Itogon. This observation point tells the story of Benguet's rich mining heritage while providing visitors with stunning photo opportunities.
                </p>

                <div className="my-12">
                  <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                  <div className="grid sm:grid-cols-2 gap-6 not-prose">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">Observation Deck</h3>
                        <p className="text-muted-foreground">A well-maintained viewing platform offering panoramic views of the mountains and valleys.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">Souvenir Market</h3>
                        <p className="text-muted-foreground">Local vendors selling traditional crafts, silver jewelry, and wooden carvings.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">Photo Opportunities</h3>
                        <p className="text-muted-foreground">Various spots for memorable photos, including traditional costume rentals.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">Garden Area</h3>
                        <p className="text-muted-foreground">Beautiful landscaping featuring native plants and flowers.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="my-12">
                  <h2 className="text-3xl font-bold mb-6">Historical Significance</h2>
                  <p>
                    The park gets its name from its original purpose as an observation point overlooking Benguet's mining operations. Today, while the mines are less active, the area serves as a reminder of the region's mining heritage and offers one of the best vantage points in Baguio City.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Visitor Activities</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Scenic photography
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Traditional costume photo sessions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Souvenir shopping
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Mountain viewing
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Local food tasting
                      </li>
                    </ul>

                    <div className="mt-6 pt-6 border-t">
                      <Link href="/#tours">
                        <Button size="lg" className="w-full">
                          Book a Tour Including Mines View
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}