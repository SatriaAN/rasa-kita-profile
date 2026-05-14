import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-video-wrapper">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="hero-video"
        >
          <source src="/img/preview-rasa-kita.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <h1 className="animate-fade-in delay-1">
          Rasa Kita
        </h1>
        <p className="slogan animate-fade-in delay-2">
          "Dari kita, Buat kita"
        </p>
        <p className="description animate-fade-in delay-3">
          Lebih dari sekadar kopi. Ini adalah ruang berkumpul, bercerita, dan merayakan kebersamaan dalam setiap tegukan.
        </p>
        <div className="hero-actions animate-fade-in delay-3">
          <a href="#products" className="btn-primary hero-btn">
            Lihat Menu <ArrowRight size={20} />
          </a>
          <a href="#about" className="btn-secondary hero-btn">
            Cerita Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
