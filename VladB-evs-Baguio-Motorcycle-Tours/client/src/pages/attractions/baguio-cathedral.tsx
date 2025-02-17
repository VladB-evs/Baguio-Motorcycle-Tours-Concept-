import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Clock, MapPin, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function BaguioCathedral() {
  return (
    <article className="min-h-screen bg-background py-12">
      {/* Hero Section */}
      <div className="container max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Baguio Cathedral
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A historic pink-colored church with twin spires overlooking Session Road
        </p>

      {/* Quick Info */}
      <div className="max-w-2xl mx-auto mt-8 mb-12">
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Mass Times: 6 AM - 6 PM</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Cathedral Loop, Session Road</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sun className="w-4 h-4" />
            <span>Best at Sunset</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container max-w-4xl mx-auto px-4">
        <Link href="/#tours">
          <Button variant="ghost" className="mb-8 hover:bg-primary/5">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tours
          </Button>
        </Link>

        <div className="space-y-12">
          <div className="prose prose-lg mx-auto text-center">
            <p className="lead text-foreground">
              Our Lady of Atonement Cathedral, commonly known as Baguio Cathedral, stands as one of the city's most recognizable landmarks. Its distinctive pink exterior and twin spires have been a spiritual beacon for both locals and visitors since its construction in 1936.
            </p>
          </div>

          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Architecture</h3>
                  <p className="text-muted-foreground">Rose-colored exterior with distinctive twin spires and Gothic-inspired design elements.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Situated on a hill overlooking Session Road, offering panoramic views of the city.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Prayer Garden</h3>
                  <p className="text-muted-foreground">Peaceful garden space for reflection with statues and benches.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Historic Steps</h3>
                  <p className="text-muted-foreground">The famous 100-step staircase leading to the cathedral entrance.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="my-12 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Historical Significance</h2>
            <p className="text-muted-foreground">
              Built in 1936, the cathedral survived World War II and served as an evacuation center during the Japanese occupation. The church has been renovated several times but maintains its original architectural charm, making it not just a religious center but also a significant historical landmark.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Visitor Information</h3>
              <ul className="space-y-3 max-w-md mx-auto">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Daily masses in English and Filipino
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Architectural photography
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Prayer and meditation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Guided tours available
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Sunset viewing point
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t text-center">
                <Link href="/#tours">
                  <Button size="lg" className="w-full max-w-sm mx-auto">
                    Book a Tour Including Baguio Cathedral
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </article>
  );
}