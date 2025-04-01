
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import AppointmentForm from '@/components/AppointmentForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <BlogPreview />
      <AppointmentForm />
      <Footer />
    </div>
  );
};

export default Index;
