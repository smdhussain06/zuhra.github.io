
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://source.unsplash.com/photo-1482938289607-e9573fc25ebb" 
          alt="Serene natural landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-unani-brown/60"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight animate-fade-in">
            Traditional Healing, Modern Wellness
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 animate-slide-up">
            Experience the ancient wisdom of Unani medicine, personalized for your modern life. Natural remedies and holistic treatments for lasting health and harmony.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-slide-up">
            <a href="#appointment" className="btn-primary flex items-center gap-2 justify-center">
              Book an Appointment <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-secondary">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
