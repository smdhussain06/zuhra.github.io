
import React from 'react';
import { Leaf, Heart, Clock, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">The Art & Science of Unani Medicine</h2>
          <p className="text-muted-foreground text-lg">
            With roots dating back thousands of years, Unani medicine embraces a holistic approach to health, focusing on the harmony between mind, body, and environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6 text-foreground/90">
              Unani medicine, also known as Greco-Arabian medicine, traces its origins to Ancient Greece and was further developed by Arab and Persian physicians. This healing tradition views health as a balance of four vital elements within the body.
            </p>
            <p className="mb-6 text-foreground/90">
              At Unani Nature Haven, we combine centuries-old wisdom with contemporary wellness practices to create personalized healing journeys for our patients. Our treatments work with your body's natural processes, not against them.
            </p>
            <p className="text-foreground/90">
              Our practitioners are trained in the authentic traditions of Unani medicine while staying current with modern research and safety standards. We believe in empowering you with knowledge about your health while providing gentle, effective care.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background rounded-lg p-6 shadow-sm hover-lift">
              <Leaf className="h-10 w-10 text-unani-leaf mb-4" />
              <h3 className="text-xl font-serif mb-2">Natural Remedies</h3>
              <p className="text-foreground/80">Plant-based treatments using traditional formulations.</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm hover-lift">
              <Heart className="h-10 w-10 text-unani-terra mb-4" />
              <h3 className="text-xl font-serif mb-2">Holistic Care</h3>
              <p className="text-foreground/80">Treating the whole person, not just symptoms.</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm hover-lift">
              <Clock className="h-10 w-10 text-unani-blue mb-4" />
              <h3 className="text-xl font-serif mb-2">Time-Tested</h3>
              <p className="text-foreground/80">Practices refined over centuries of healing tradition.</p>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-sm hover-lift">
              <Sparkles className="h-10 w-10 text-unani-gold mb-4" />
              <h3 className="text-xl font-serif mb-2">Personalized</h3>
              <p className="text-foreground/80">Treatments tailored to your unique constitution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
