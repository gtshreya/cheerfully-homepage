
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-6">PowerStation</h3>
            <p className="text-gray-300 mb-6">
              Sustainable power solutions for a brighter future. Committed to reliable energy distribution and renewable integration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-energy-blue transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-energy-blue transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-energy-blue transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-energy-blue transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-energy-blue transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-energy-blue transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-energy-blue transition-colors">Services</a>
              </li>
              <li>
                <a href="#stations" className="text-gray-300 hover:text-energy-blue transition-colors">Power Stations</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-energy-blue transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-energy-blue mt-0.5" />
                <span className="text-gray-300">
                  123 Energy Street<br />Power City, PC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-energy-blue" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-energy-blue transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-energy-blue" />
                <a href="mailto:info@powerstation.com" className="text-gray-300 hover:text-energy-blue transition-colors">
                  info@powerstation.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">FAQs</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-gray-300">
                  What areas do you service?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  We provide power services across 50+ cities nationwide with plans for further expansion.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-gray-300">
                  How can I report an outage?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  You can report outages through our 24/7 customer service line or via our online portal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-gray-300">
                  Are your power stations environmentally friendly?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes, we're committed to sustainability with over 60% of our stations using renewable energy sources.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} PowerStation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
