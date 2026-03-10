import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { News } from "@/components/sections/News";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-background overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow w-full">
        <Hero />
        <About />
        <Services />
        <News />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
