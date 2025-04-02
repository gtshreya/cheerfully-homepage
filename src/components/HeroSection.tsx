
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 hero-gradient">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white">
              Power Solutions <br />
              <span className="text-energy-blue">For The Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-md">
              Sustainable, reliable, and efficient power stations to meet your energy needs. Powering communities with clean energy solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-energy-blue hover:bg-energy-blue/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="group">
                Learn More{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-energy-blue/20 to-energy-green/20 rounded-xl">
              <div className="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-xl"></div>
            </div>
            <div className="relative p-8 text-center">
              <h3 className="text-xl font-semibold mb-6">Find Power Stations Near You</h3>
              <SearchBar />
            </div>
          </div>
        </div>
        <div className="mt-8 md:hidden">
          <h3 className="text-xl font-semibold mb-4 text-center">Find Power Stations Near You</h3>
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
