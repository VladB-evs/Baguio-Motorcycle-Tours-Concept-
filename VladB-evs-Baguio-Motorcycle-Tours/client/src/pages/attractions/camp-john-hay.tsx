import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Clock, MapPin, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CampJohnHay() {
  return (
    <article className="min-h-screen bg-background">
      <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Camp John Hay
          </h1>
          <p className="text-xl text-muted-foreground">
            A historic retreat transformed into a premier mountain resort and recreation center
          </p>
        </div>

        {/* Quick Info */}
        <div className="bg-muted/30 mb-12">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground max-w-3xl mx-auto">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Open: 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Located in Loakan Road</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4" />
                <span>Perfect for Day Tours</span>
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
                  Camp John Hay, originally established as a rest and recreation facility for American soldiers, has been transformed into one of Baguio's premier tourist destinations. This former US military base now serves as a luxurious mountain resort and recreation center.
                </p>

                <div className="my-12">
                  <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                  <div className="grid sm:grid-cols-2 gap-6 not-prose">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">Historical Core</h3>
                        <p className="text-muted-foreground">Features the Bell House, History Trail, and the unique Cemetery of Negativism, each telling a part of the camp's rich history.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">Pine Trees</h3>
                        <p className="text-muted-foreground">Hundreds of towering Benguet pine trees create a serene atmosphere perfect for nature walks and meditation.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">Eco-Trail</h3>
                        <p className="text-muted-foreground">A well-maintained trail system perfect for nature walks, bird watching, and photography enthusiasts.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">Golf Course</h3>
                        <p className="text-muted-foreground">A world-class 18-hole golf course designed to challenge players while offering stunning mountain views.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="my-12">
                  <h2 className="text-3xl font-bold mb-6">Best Time to Visit</h2>
                  <p>
                    Camp John Hay is accessible 24/7, but the best time to visit is during early morning or late afternoon when the weather is most pleasant. The pine-scented air is particularly refreshing during these hours, making it perfect for outdoor activities.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Available Activities</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Historical tours of the base
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Hiking and nature photography
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Golfing at the world-class course
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Shopping at the Commissary
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Treetop Adventure activities
                      </li>
                    </ul>

                    <div className="mt-6 pt-6 border-t">
                      <Link href="/#tours">
                        <Button size="lg" className="w-full">
                          Book a Tour Including Camp John Hay
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