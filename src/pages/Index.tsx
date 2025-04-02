
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import PowerStationCard from "@/components/PowerStationCard";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

const Index = () => {
  // Sample data for power station cards
  const powerStations = [
    {
      name: "Solar Valley Station",
      location: "Arizona, USA",
      type: "Solar",
      capacity: "500 MW",
      imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Windridge Power",
      location: "Texas, USA",
      type: "Wind",
      capacity: "350 MW",
      imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Hydro Peak Complex",
      location: "Washington, USA",
      type: "Hydro",
      capacity: "800 MW",
      imageUrl: "https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Geothermal Springs",
      location: "California, USA",
      type: "Geothermal",
      capacity: "250 MW",
      imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        
        <ServiceSection />
        
        <section id="stations" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Power Stations</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover our network of power stations delivering clean, sustainable energy across the country.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {powerStations.map((station, index) => (
                <PowerStationCard
                  key={index}
                  name={station.name}
                  location={station.location}
                  type={station.type}
                  capacity={station.capacity}
                  imageUrl={station.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  At PowerStation, we are dedicated to revolutionizing the energy industry through sustainable practices and cutting-edge technology. With over 20 years of experience, we've established ourselves as leaders in power generation and distribution.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Our mission is to provide reliable, clean, and affordable energy solutions while minimizing environmental impact. We invest in renewable resources and continuously innovate to create a more sustainable future for generations to come.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <p className="text-4xl font-bold text-energy-blue">50+</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Power Stations</p>
                  </div>
                  <div className="text-center p-4">
                    <p className="text-4xl font-bold text-energy-green">1M+</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Customers Served</p>
                  </div>
                  <div className="text-center p-4">
                    <p className="text-4xl font-bold text-energy-blue">20+</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Years Experience</p>
                  </div>
                  <div className="text-center p-4">
                    <p className="text-4xl font-bold text-energy-green">60%</p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">Renewable Energy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="contact" className="py-20 bg-energy-blue/10 dark:bg-energy-blue/5">
          <div className="container mx-auto px-6 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Connected?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who have switched to our sustainable power solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-energy-blue hover:bg-energy-blue/90 md:text-lg">
                Contact Sales
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-energy-blue bg-white hover:bg-gray-50 md:text-lg">
                <Phone className="h-5 w-5 mr-2" />
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
