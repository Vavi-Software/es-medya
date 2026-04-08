import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  '/images/hero1.jpeg',
  '/images/hero2.jpeg',
  '/images/hero3.jpeg',
  '/images/hero4.jpeg',
]

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-slideshow">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-badge">Profesyonel Fotoğrafçılık & İçerik Üretimi</div>
        <h1 className="hero-title">
          Anları <span>Ölümsüzleştiriyoruz</span>
        </h1>
        <p className="hero-subtitle">Düğün · Reklam · Sosyal Medya · İçerik Üretimi</p>
        <div className="hero-buttons">
          <Link to="/portfolio" className="btn-primary">
            <span>Portfolyoyu Gör</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
          <Link to="/iletisim" className="btn-secondary">
            <span>Bize Ulaşın</span>
          </Link>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Keşfet</span>
      </div>
    </section>
  )
}

export default Hero