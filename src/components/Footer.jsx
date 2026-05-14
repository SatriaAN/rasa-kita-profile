import React from 'react';
import { Coffee, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <Coffee size={32} className="logo-icon" />
              <span>Rasa Kita</span>
            </a>
            <p className="footer-slogan">"Dari kita, Buat kita"</p>
            <p className="footer-desc">
              Menyajikan kopi terbaik dengan semangat komunitas. Temukan ruang kreasimu bersama kami.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Jelajahi</h4>
            <ul>
              <li><a href="#home">Beranda</a></li>
              <li><a href="#about">Cerita Kita</a></li>
              <li><a href="#products">Menu</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Hubungi Kami</h4>
            <ul>
              <li>
                <MapPin size={18} />
                <span>Jl. Kopi Nusantara No. 123, Jakarta Selatan</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+62 812-9500-8318</span>
              </li>
              <li>
                <Mail size={18} />
                <span>halo@rasakita.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Rasa Kita. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
