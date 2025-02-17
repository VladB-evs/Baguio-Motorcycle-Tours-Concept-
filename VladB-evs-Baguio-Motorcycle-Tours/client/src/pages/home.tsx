import Hero from "@/components/sections/hero";
import Tours from "@/components/sections/tours";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Tours />
      <Gallery />
      <Contact />
    </main>
  );
}
