import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Clock, MapPin, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SessionRoad() {
  return (
    <article className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Session Road
          </h1>
          <p className="text-xl text-muted-foreground">
            The bustling heart of Baguio's commercial and cultural district
          </p>
        </div>

        {/* Quick Info */}
        <div className="bg-muted/30 mb-12">
          <div className="container py-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground max-w-3xl mx-auto">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Active: 8 AM - 10 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Central Business District</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4" />
                <span>Best for Evening Visits</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container">
          <div className="max-w-[1200px] mx-auto">
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
                  Session Road, named after the old Session Building of the Supreme Court, is Baguio's main thoroughfare and the city's most famous street. This vibrant avenue serves as the primary commercial district, hosting a mix of modern establishments and historic buildings.
                </p>

                <div className="my-12">
                  <h2 className="text-3xl font-bold mb-6">Key Attractions</h2>
                  <div className="grid sm:grid-cols-2 gap-6 not-prose">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">Shopping Centers</h3>
                        <p className="text-muted-foreground">Modern malls and traditional shops offering local and international brands.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">Restaurants</h3>
                        <p className="text-muted-foreground">A diverse range of dining options from local eateries to international cuisine.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">Historic Buildings</h3>
                        <p className="text-muted-foreground">Well-preserved architecture showcasing Baguio's colonial heritage.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">Entertainment</h3>
                        <p className="text-muted-foreground">Movie theaters, cafes, and various entertainment venues.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="my-12">
                  <h2 className="text-3xl font-bold mb-6">Cultural Significance</h2>
                  <p>
                    Session Road has been the center of Baguio's development since the early 1900s. During the annual Panagbenga Festival, it transforms into a vibrant street party with parades, performances, and street art installations, making it a must-visit cultural destination.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Things to Do</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Shop at local boutiques
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Try local restaurants
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Visit historic buildings
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Evening street photography
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Cafe hopping
                      </li>
                    </ul>

                    <div className="mt-6 pt-6 border-t">
                      <Link href="/#tours">
                        <Button size="lg" className="w-full">
                          Book a Tour Including Session Road
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