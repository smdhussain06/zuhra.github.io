
import React from 'react';
import { Leaf, Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, AlertTriangle } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-unani-brown text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-unani-beige" />
              <span className="font-serif text-xl font-semibold text-white">Unani Nature Haven</span>
            </div>
            <p className="text-white/80 mb-6">
              Traditional healing wisdom for modern wellness, bringing balance to mind, body, and spirit.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-unani-beige transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-unani-beige transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-unani-beige transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-unani-beige transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/80 hover:text-unani-beige transition-colors">Our Services</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-unani-beige transition-colors">Testimonials</a></li>
              <li><a href="#blog" className="text-white/80 hover:text-unani-beige transition-colors">Blog</a></li>
              <li><a href="#appointment" className="text-white/80 hover:text-unani-beige transition-colors">Book Appointment</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-unani-beige mt-0.5" />
                <span className="text-white/80">42 Anna Salai, Teynampet, Chennai - 600018, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-unani-beige" />
                <span className="text-white/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-unani-beige" />
                <span className="text-white/80">info@hayathclinic.com</span>
              </li>
              <li className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-unani-beige" />
                <span className="text-white/80 font-medium">Emergency: +91 987-654-3210</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-unani-beige" />
                <div>
                  <p className="font-medium">Monday - Saturday</p>
                  <p className="text-white/80">9:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-unani-beige" />
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-white/80">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Unani Nature Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
