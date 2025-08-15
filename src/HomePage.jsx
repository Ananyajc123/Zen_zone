import React from 'react';
import './HomePage.css'; // Add styles for the homepage

// Import images
import mentalWellnessImage from './assets/mental-wellness.jpg';
import newsImage1 from './assets/news1.jpg';
import newsImage2 from './assets/news2.jpg';
import galleryImage1 from './assets/gallery1.jpg';
import galleryImage2 from './assets/gallery2.jpg';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Zen Zone</h1>
          <p className="hero-subtitle">
            Your ultimate companion in mental wellness and support.
          </p>
          <button className="hero-button">Get Started</button>
        </div>
      </section>

      {/* Why Zen Zone Section */}
      <section id="why-zen-zone" className="section why-zen-zone">
        <h2 className="section-title">Why Choose Zen Zone?</h2>
        <p className="section-description">
          Zen Zone provides tailored resources and support to enhance your mental health journey.
        </p>
        <ul className="features-list">
          <li>Personalized mental health quizzes and assessments</li>
          <li>Latest news and expert advice</li>
          <li>Comprehensive resources and tools</li>
        </ul>
      </section>

      {/* Latest News Section */}
      <section id="news" className="section news-section">
        <h2 className="section-title">Latest News on Mental Health</h2>
        <div className="news-grid">
          <div className="news-card">
            <img src={newsImage1} alt="News 1" className="news-image" />
            <h3>Understanding Anxiety in Today's World</h3>
            <p>
              A deep dive into how modern stressors contribute to anxiety.
              <a href="/news/anxiety"> Read more</a>
            </p>
          </div>
          <div className="news-card">
            <img src={newsImage2} alt="News 2" className="news-image" />
            <h3>Boost Your Mental Health with These Tips</h3>
            <p>
              Discover effective ways to improve your mental well-being.
              <a href="/news/tips"> Read more</a>
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="section about-us">
        <h2 className="section-title">About Us</h2>
        <p className="section-description">
          At Zen Zone, our mission is to make mental health resources accessible to everyone. Join
          us in promoting mental wellness for all.
        </p>
      </section>

      {/* Useful Contacts Section */}
      <section id="contacts" className="section contacts-section">
        <h2 className="section-title">Useful Contacts</h2>
        <ul className="contacts-list">
          <li>Mental Health Helpline: 1-800-123-4567</li>
          <li>Suicide Prevention Hotline: 1-800-789-1123</li>
          <li>Therapy Support Group: 1-800-345-6789</li>
        </ul>
      </section>

      {/* Image Gallery Section */}
      <section className="section gallery-section">
        <h2 className="section-title">Image Gallery</h2>
        <div className="gallery-grid">
          <img src={galleryImage1} alt="Gallery 1" className="gallery-image" />
          <img src={galleryImage2} alt="Gallery 2" className="gallery-image" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
