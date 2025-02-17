import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

export default function Hero() {
  const scrollToTours = () => {
    document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 py-20">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/40"
        style={{
          backgroundImage: "url('/images/baguio.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1
        }}
      />

      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
          Discover Baguio City by Motorcycle
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white/90">
          Experience the city of pines like never before. Beat the traffic and explore hidden gems on our guided motorcycle tours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={scrollToTours}
            className="bg-white text-primary hover:bg-white/90"
          >
            View Tours
          </Button>
        </div>
        <ArrowDownCircle 
          className="w-10 h-10 mx-auto mt-20 animate-bounce cursor-pointer"
          onClick={scrollToTours}
        />
      </div>
    </section>
  );
}