
import { Zap, Shield, TrendingUp, BarChart3, Clock, Settings } from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      title: "Power Distribution",
      description: "Efficient distribution of electricity to homes and businesses",
      icon: Zap,
    },
    {
      title: "Energy Security",
      description: "Ensuring consistent power supply without interruptions",
      icon: Shield,
    },
    {
      title: "Renewable Integration",
      description: "Seamless integration of renewable energy sources",
      icon: TrendingUp,
    },
    {
      title: "Energy Analytics",
      description: "Advanced analytics for energy usage optimization",
      icon: BarChart3,
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer service and technical support",
      icon: Clock,
    },
    {
      title: "Maintenance",
      description: "Regular maintenance to ensure optimal station performance",
      icon: Settings,
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive power solutions to meet diverse energy needs for residential and commercial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <div className="inline-flex items-center justify-center p-3 bg-energy-blue/10 dark:bg-energy-blue/20 rounded-lg mb-4">
                <service.icon className="h-6 w-6 text-energy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
