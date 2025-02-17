import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Clock, MapPin, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function WrightPark() {
  return (
    <article className="min-h-screen bg-background">
      <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Wright Park
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Baguio's famous horse-riding destination with scenic mountain views and colonial heritage
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
                <span>Near The Mansion</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4" />
                <span>Best in Early Morning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <Link href="/#tours">
              <Button variant="ghost" className="mb-8 hover:bg-primary/5">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Tours
              </Button>
            </Link>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 prose prose-lg prose-headings:text-foreground prose-p:text-muted-foreground dark:prose-invert">
                <p className="lead text-foreground">
                  Wright Park, named after Governor-General Luke E. Wright, is one of Baguio's most popular recreational areas. Known locally as "The Pool," this elongated pool-like park is famous for its horse-riding activities and serves as a gateway to The Mansion, the official summer residence of the Philippine President.
                </p>

                <div className="my-12">
                  <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                  <div className="grid sm:grid-cols-2 gap-6 not-prose">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">The Pool</h3>
                        <p className="text-muted-foreground">Long rectangular pool lined with pine trees and flowering plants, perfect for walking and photography.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">Riding Circle</h3>
                        <p className="text-muted-foreground">Popular horse-riding area with trained horses and guides for both beginners and experienced riders.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">Pine Walk</h3>
                        <p className="text-muted-foreground">Tree-lined pathways offering scenic walks and cool mountain air.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">View Point</h3>
                        <p className="text-muted-foreground">Elevated areas providing panoramic views of the surrounding mountains.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="my-12">
                  <h2 className="text-3xl font-bold mb-6">Activities and Experiences</h2>
                  <p>
                    The park offers a unique blend of recreational activities centered around horseback riding. Visitors can choose from various riding packages, from short rides around the circle to guided trail rides. The park's location near The Mansion makes it a perfect stop for combining activities with historical sightseeing.
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
                        Horseback riding lessons
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Guided trail rides
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Photography sessions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Nature walks
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Mountain viewing
                      </li>
                    </ul>

                    <div className="mt-6 pt-6 border-t">
                      <Link href="/#tours">
                        <Button size="lg" className="w-full">
                          Book a Tour Including Wright Park
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