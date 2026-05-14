import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'glass scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <Coffee size={28} className="logo-icon" />
          <span>Rasa Kita</span>
        </a>

        <div className="nav-links desktop-only">
          <a href="#home">Beranda</a>
          <a href="#about">Cerita Kita</a>
          <a href="#products">Menu</a>
          <a href="#contact" className="btn-primary">Hubungi Kami</a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu glass ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setMobileMenuOpen(false)}>Beranda</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>Cerita Kita</a>
        <a href="#products" onClick={() => setMobileMenuOpen(false)}>Menu</a>
        <a href="#contact" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>Hubungi Kami</a>
      </div>
    </nav>
  );
};

export default Navbar;
