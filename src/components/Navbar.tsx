
import React, { useState } from 'react';
import { Menu, X, Leaf, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-unani-leaf" />
            <span className="font-serif text-xl md:text-2xl font-semibold">Hayath Clinic</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground/80 hover:text-unani-leaf transition-colors">About</a>
            <a href="#services" className="text-foreground/80 hover:text-unani-leaf transition-colors">Services</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-unani-leaf transition-colors">Testimonials</a>
            <a href="#blog" className="text-foreground/80 hover:text-unani-leaf transition-colors">Blog</a>
            <a href="#contact" className="text-foreground/80 hover:text-unani-leaf transition-colors">Contact</a>
          </nav>

          <Button className="hidden md:flex bg-unani-sage hover:bg-unani-leaf text-white gap-2">
            <Phone className="h-4 w-4" />
            Call Now
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            <a href="#about" className="text-foreground/80 hover:text-unani-leaf transition-colors py-2" onClick={toggleMenu}>About</a>
            <a href="#services" className="text-foreground/80 hover:text-unani-leaf transition-colors py-2" onClick={toggleMenu}>Services</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-unani-leaf transition-colors py-2" onClick={toggleMenu}>Testimonials</a>
            <a href="#blog" className="text-foreground/80 hover:text-unani-leaf transition-colors py-2" onClick={toggleMenu}>Blog</a>
            <a href="#contact" className="text-foreground/80 hover:text-unani-leaf transition-colors py-2" onClick={toggleMenu}>Contact</a>
            <Button className="bg-unani-sage hover:bg-unani-leaf text-white w-full gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
