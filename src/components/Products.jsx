import React, { useState } from 'react';
import { X, Download } from 'lucide-react';
import './Products.css';

const productsData = [
  {
    id: 1,
    name: 'Es Kopi Susu Aren',
    description: 'Espresso blend khas Rasa Kita dengan susu segar dan gula aren asli. Manisnya pas, kopinya nendang.',
    price: 'Rp 18.000',
    image: '/img/kopi-susu-aren.jpeg'
  },
  {
    id: 2,
    name: 'Green Tea Thailand',
    description: 'Perpaduan bubuk Green Tea Thailand premium dengan susu segar. Lembut dan menenangkan.',
    price: 'Rp 15.000',
    image: '/img/kopi-greentea.jpeg'
  },
  {
    id: 3,
    name: 'Signature Thai Tea',
    description: 'Teh asli Thailand yang diracik dengan susu kental manis, memberikan rasa otentik yang kaya.',
    price: 'Rp 15.000',
    image: '/img/thai-tea.jpeg'
  }
];

const Products = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOrder = (productName) => {
    const phoneNumber = "6281295008318";
    const message = `Halo Rasa Kita! 👋\nSaya mau pesan *${productName}*. Bisa dibantu proses ordernya?`;
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="products-header">
          <h2 className="section-title">Menu Andalan</h2>
          <h3 className="section-subtitle">Pilihan Rasa Kita</h3>
        </div>

        <div className="products-grid">
          {productsData.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={product.image} alt={product.name} className="product-img" />
                <div className="product-price">{product.price}</div>
              </div>
              <div className="product-info">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <button className="btn-outline" onClick={() => handleOrder(product.name)}>Pesan Sekarang</button>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-banner">
          <img src="/img/kopi-price.jpeg" alt="Daftar Harga Lengkap" className="banner-img" />
          <div className="banner-overlay">
            <h3>Lihat Menu Lengkap Kami</h3>
            <p>Berbagai varian kopi dan non-kopi siap menemani harimu.</p>
            <button className="btn-primary" onClick={() => setIsMenuOpen(true)}>Lihat & Download Menu</button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="menu-modal" onClick={() => setIsMenuOpen(false)}>
          <div className="menu-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
            <img src="/img/kopi-price.jpeg" alt="Menu Lengkap Rasa Kita" className="modal-menu-img" />
            <a href="/img/kopi-price.jpeg" download="Menu-Rasa-Kita.jpeg" className="btn-primary download-btn">
              <Download size={20} /> Download Menu
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
