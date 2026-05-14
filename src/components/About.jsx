import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-image-wrapper">
          <img 
            src="/img/kopis-1.jpeg" 
            alt="Suasana Rasa Kita" 
            className="about-image main-img"
          />
          <img 
            src="/img/slogan.jpeg" 
            alt="Dari kita, Buat kita" 
            className="about-image accent-img"
          />
        </div>
        
        <div className="about-content">
          <h2 className="section-title">Kisah Rasa Kita</h2>
          <h3 className="section-subtitle">Dari Kita, Buat Kita</h3>
          
          <div className="about-text">
            <p>
              Berawal dari kecintaan terhadap kopi dan obrolan hangat di sudut kota, <strong>Rasa Kita</strong> hadir bukan sekadar sebagai tempat singgah, melainkan sebuah rumah kedua.
            </p>
            <p>
              Kami percaya bahwa secangkir kopi terbaik lahir dari komunitas yang kuat. Slogan <em>"Dari kita, Buat kita"</em> adalah janji kami untuk selalu menyajikan kualitas terbaik, mendukung petani lokal, dan menciptakan ruang di mana setiap cerita berharga.
            </p>
          </div>
          
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Biji Kopi Lokal</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5K+</span>
              <span className="stat-label">Teman Rasa Kita</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
