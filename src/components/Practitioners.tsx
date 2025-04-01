
import React from 'react';

const practitioners = [
  {
    id: 1,
    name: "Dr. Aisha Khan",
    role: "Chief Physician",
    expertise: "Specialized in traditional pulse diagnosis and herbal formulations with 15+ years of practice.",
    image: "https://source.unsplash.com/photo-1559839734-2b71ea197ec2"
  },
  {
    id: 2,
    name: "Dr. Rahul Sharma",
    role: "Hijama Specialist",
    expertise: "Expert in cupping therapy and circulatory treatments, focusing on pain management and recovery.",
    image: "https://source.unsplash.com/photo-1537368910025-700350fe46c7"
  },
  {
    id: 3,
    name: "Dr. Priya Patel",
    role: "Nutritionist",
    expertise: "Certified in Unani dietary principles and nutritional therapy for chronic and acute conditions.",
    image: "https://source.unsplash.com/photo-1582750433449-648ed127bb54"
  }
];

const Practitioners = () => {
  return (
    <section id="practitioners" className="section-padding bg-unani-beige/20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Our Expert Practitioners</h2>
          <p className="text-muted-foreground text-lg">
            Meet our team of experienced Unani medicine specialists dedicated to your wellbeing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {practitioners.map((doctor) => (
            <div key={doctor.id} className="bg-background rounded-lg overflow-hidden shadow-md hover-lift">
              <div className="h-72 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif mb-1">{doctor.name}</h3>
                <p className="text-unani-sage font-medium mb-3">{doctor.role}</p>
                <p className="text-foreground/80">{doctor.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Practitioners;
