
import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Pulse Diagnosis",
    description: "The ancient art of Nabz assessment reveals your body's imbalances through detailed pulse examination.",
    image: "https://source.unsplash.com/photo-1472396961693-142e6e269027",
    category: "Diagnostics"
  },
  {
    id: 2,
    title: "Herbal Medicine",
    description: "Personalized herbal formulations made from pure, ethically sourced botanicals for gentle healing.",
    image: "https://source.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    category: "Treatment"
  },
  {
    id: 3,
    title: "Hijama Therapy",
    description: "Traditional cupping therapy that releases toxins and improves circulation for pain relief and wellness.",
    image: "https://source.unsplash.com/photo-1518495973542-4542c06a5843",
    category: "Treatment"
  },
  {
    id: 4,
    title: "Dietary Counseling",
    description: "Nutritional guidance based on your unique constitution to restore balance through food as medicine.",
    image: "https://source.unsplash.com/photo-1469474968028-56623f02e42e",
    category: "Wellness"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Our Healing Services</h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive range of traditional Unani treatments, each personalized to restore your natural balance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-lg shadow-md hover-lift">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-unani-brown/80 to-transparent"></div>
                <span className="absolute top-4 left-4 bg-unani-beige text-unani-brown text-sm px-3 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              
              <div className="p-6 bg-background">
                <h3 className="text-xl font-serif mb-2">{service.title}</h3>
                <p className="text-foreground/80 mb-4">{service.description}</p>
                <a 
                  href="#appointment" 
                  className="inline-flex items-center text-unani-leaf font-medium hover:text-unani-sage transition-colors"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#appointment" className="btn-primary">
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
