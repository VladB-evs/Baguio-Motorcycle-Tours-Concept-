import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Clock, MapPin, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function BaguioCathedral() {
  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2574')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end pb-12">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Baguio Cathedral
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                A historic pink-colored church with twin spires overlooking Session Road
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="bg-muted/30">
        <div className="container py-6">
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mass Times: 6 AM - 6 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Cathedral Loop, Session Road</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4" />
              <span>Best at Sunset</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-12">
        <div className="max-w-[1200px] mx-auto">
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
                Our Lady of Atonement Cathedral, commonly known as Baguio Cathedral, stands as one of the city's most recognizable landmarks. Its distinctive pink exterior and twin spires have been a spiritual beacon for both locals and visitors since its construction in 1936.
              </p>

              <div className="my-12">
                <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-6 not-prose">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Architecture</h3>
                      <p className="text-muted-foreground">Rose-colored exterior with distinctive twin spires and Gothic-inspired design elements.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Location</h3>
                      <p className="text-muted-foreground">Situated on a hill overlooking Session Road, offering panoramic views of the city.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Prayer Garden</h3>
                      <p className="text-muted-foreground">Peaceful garden space for reflection with statues and benches.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-2">Historic Steps</h3>
                      <p className="text-muted-foreground">The famous 100-step staircase leading to the cathedral entrance.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="my-12">
                <h2 className="text-3xl font-bold mb-6">Historical Significance</h2>
                <p>
                  Built in 1936, the cathedral survived World War II and served as an evacuation center during the Japanese occupation. The church has been renovated several times but maintains its original architectural charm, making it not just a religious center but also a significant historical landmark.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Visitor Information</h3>
                  <ul className="space-y-3">
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

                  <div className="mt-6 pt-6 border-t">
                    <Link href="/#tours">
                      <Button size="lg" className="w-full">
                        Book a Tour Including Baguio Cathedral
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