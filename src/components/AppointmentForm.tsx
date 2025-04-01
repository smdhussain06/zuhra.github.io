
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AppointmentForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Appointment Request Received",
        description: "We'll contact you shortly to confirm your appointment details.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="appointment" className="section-padding bg-unani-sage/10 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-10 pointer-events-none">
        <img 
          src="https://source.unsplash.com/photo-1509316975850-ff9c5deb0cd9" 
          alt="Decorative herbs" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-10 pointer-events-none">
        <img 
          src="https://source.unsplash.com/photo-1515012764825-4d37a89fdce0" 
          alt="Decorative herbs" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Begin Your Healing Journey</h2>
              <p className="text-foreground/80 mb-6">
                Schedule a consultation with our experienced Unani practitioners to discover personalized treatments for your health concerns.
              </p>
              
              <div className="bg-unani-beige rounded-lg p-6 mb-6 relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 opacity-20">
                  <img 
                    src="https://source.unsplash.com/photo-1472396961693-142e6e269027" 
                    alt="Herbs" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-serif mb-3">What to Expect</h3>
                <p className="text-foreground/80 mb-4">
                  Your first visit includes a comprehensive assessment of your health history, constitution, and current concerns. This detailed consultation allows us to create a personalized treatment plan.
                </p>
                <p className="text-foreground/80">
                  Please arrive 15 minutes before your scheduled appointment. Initial consultations typically last 60-90 minutes.
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-unani-brown">
                <Calendar className="h-5 w-5" />
                <span>Available Monday-Saturday, 9am-5pm</span>
              </div>
            </div>
            
            <div className="bg-background rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-serif mb-6 text-center">Book an Appointment</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    name="email"
                    type="email" 
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input 
                    name="phone"
                    type="tel" 
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select value={formData.service} onValueChange={handleServiceChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Initial Consultation</SelectItem>
                      <SelectItem value="pulse-diagnosis">Pulse Diagnosis</SelectItem>
                      <SelectItem value="herbal-medicine">Herbal Medicine</SelectItem>
                      <SelectItem value="hijama">Hijama Therapy</SelectItem>
                      <SelectItem value="diet">Dietary Counseling</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Input 
                    name="date"
                    type="date" 
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Textarea 
                  name="message"
                  placeholder="Tell us about your health concerns or questions" 
                  className="h-32"
                  value={formData.message}
                  onChange={handleChange}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-unani-sage hover:bg-unani-leaf text-white"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Request Appointment"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
