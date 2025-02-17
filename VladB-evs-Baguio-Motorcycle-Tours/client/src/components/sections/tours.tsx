import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bike, Timer, MapPin, Users, AlertCircle } from "lucide-react";

const tourHighlights = {
  preset: [
    "Camp John Hay - Former US military base turned leisure destination",
    "Tam-Awan Village - Experience traditional Cordillera culture",
    "Burnham Park - Iconic city center park with boating lagoon",
    "Good Shepherd Convent - Famous for ube jam and other local delicacies",
    "Session Road - The city's main thoroughfare and shopping district",
    "BenCab Museum - Home to national artist Ben Cabrera's works",
    "Baguio Cathedral - Pink-colored church with twin spires"
  ]
};

export default function Tours() {
  return (
    <section id="tours" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tour Packages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience Baguio's most iconic locations on our comfortable motorcycles. Perfect for solo travelers.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-yellow-600 bg-yellow-50 p-4 rounded-lg">
            <AlertCircle className="w-5 h-5" />
            <p className="text-sm font-medium">
              Safety Notice: One person per motorcycle only. No passengers allowed.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Classic Baguio Explorer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Timer className="w-5 h-5 text-primary" />
                  <span>8 Hours (9:00 AM - 5:00 PM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>7 Major Attractions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>₱8,000 per person</span>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Preset Attractions:</h4>
                  <ul className="space-y-2 text-sm">
                    {tourHighlights.preset.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Adventure Tour</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Timer className="w-5 h-5 text-primary" />
                  <span>8 Hours (9:00 AM - 5:00 PM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Your Choice of Destinations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>₱8,000 per person</span>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Custom Tour Features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      • Design your own route based on your interests
                    </li>
                    <li className="flex items-start gap-2">
                      • Explore hidden gems and local favorites
                    </li>
                    <li className="flex items-start gap-2">
                      • Flexible timing at each location
                    </li>
                    <li className="flex items-start gap-2">
                      • Perfect for photography enthusiasts
                    </li>
                    <li className="flex items-start gap-2">
                      • Local guide's expert recommendations
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 rounded-lg p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Bike className="w-6 h-6" />
            Why Choose Our Motorcycle Tours?
          </h3>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-2">
              • Beat the notorious Baguio traffic and see more in less time
            </li>
            <li className="flex items-start gap-2">
              • Expert local guides who know the city's history
            </li>
            <li className="flex items-start gap-2">
              • Safety gear provided (helmet, jacket, gloves)
            </li>
            <li className="flex items-start gap-2">
              • Flexible photo stops and customizable routes
            </li>
            <li className="flex items-start gap-2">
              • Free bottled water and local snacks
            </li>
            <li className="flex items-start gap-2">
              • Hotel pickup and drop-off included
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}