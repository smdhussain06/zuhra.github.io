
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    text: "After struggling with chronic digestive issues for years and trying countless medications, the herbal treatment from Unani Nature Haven finally brought me relief. I'm grateful for their holistic approach to my health.",
    rating: 5,
    image: "https://source.unsplash.com/random/100x100/?portrait,woman"
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "The practitioners here truly listen. My treatment plan was completely customized to my needs, and the results have been remarkable. My energy levels are better than they've been in a decade.",
    rating: 5,
    image: "https://source.unsplash.com/random/100x100/?portrait,man"
  },
  {
    id: 3,
    name: "Aisha Patel",
    text: "I was skeptical at first, but after three months of following my Unani treatment protocol, my skin condition has improved dramatically. The natural remedies worked without any of the side effects I experienced with conventional treatments.",
    rating: 4,
    image: "https://source.unsplash.com/random/100x100/?portrait,woman,indian"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-unani-beige/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Healing Stories</h2>
          <p className="text-muted-foreground text-lg">
            Read how traditional Unani medicine has transformed the lives of our patients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-background rounded-lg p-6 shadow-md hover-lift">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-unani-gold fill-unani-gold' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-foreground/80 italic mb-6">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-medium">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
