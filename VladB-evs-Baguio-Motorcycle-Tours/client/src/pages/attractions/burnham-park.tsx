import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Clock, MapPin, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function BurnhamPark() {
  return (
    <article className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Burnham Park
          </h1>
          <p className="text-xl text-muted-foreground">
            A historic urban park at the heart of Baguio City, offering recreational activities and natural beauty
          </p>
        </div>

      {/* Quick Info */}
      <div className="bg-muted/30 mb-12">
        <div className="container py-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Best Time: 6 AM - 8 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Located in City Center</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4" />
              <span>Perfect for Morning Visits</span>
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
                Burnham Park, located at the heart of Baguio City, is a historic urban park designed by American architect and urban planner Daniel Hudson Burnham in 1904. The park serves as the city's primary public space and recreational area, spanning several hectares of well-maintained gardens, pathways, and attractions.
              </p>

              <div className="my-12">
                <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-6 not-prose">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Burnham Lake</h3>
                      <p className="text-muted-foreground">The centerpiece of the park where visitors can rent boats for a relaxing ride on the water. Perfect for couples and families alike.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Bike Rental</h3>
                      <p className="text-muted-foreground">A dedicated area for cycling around the park with various bicycle options available for all ages.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Rose Garden</h3>
                      <p className="text-muted-foreground">A beautiful collection of roses and ornamental plants, creating a perfect backdrop for photos.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Children's Park</h3>
                      <p className="text-muted-foreground">Playground equipment and recreational facilities designed specifically for kids' entertainment.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="my-12">
                <h2 className="text-3xl font-bold mb-6">Best Time to Visit</h2>
                <p>
                  Early morning (6-8 AM) is the ideal time to visit when the air is crisp and the park is less crowded. The park is particularly beautiful during the flower festival in February when special exhibitions and events are held.
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
                      Boat riding on Burnham Lake
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Cycling around the park
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Photography in the Rose Garden
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Picnicking on the lawns
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Watching street performances
                    </li>
                  </ul>

                  <div className="mt-6 pt-6 border-t">
                    <Link href="/#tours">
                      <Button size="lg" className="w-full">
                        Book a Tour Including Burnham Park
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}