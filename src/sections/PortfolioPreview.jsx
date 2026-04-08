import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const portfolioItems = [
  { image: '/images/p1.jpg', category: 'Düğün' },
  { image: '/images/p2.jpg', category: 'Reklam' },
  { image: '/images/p3.jpg', category: 'Sosyal Medya' },
]

function PortfolioPreview() {
  useEffect(() => {
    gsap.fromTo('.portfolio-preview .portfolio-item',
      { y: 40, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.portfolio-preview .portfolio-grid',
          start: 'top 85%',
          once: true,
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'all',
      }
    )

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section className="portfolio-preview">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolyo</span>
          <h2 className="section-title">Son Çalışmalarımız</h2>
          <p className="section-subtitle">
            Her projede en iyisini ortaya koymak için çalışıyoruz
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <img src={item.image} alt={item.category} loading="lazy" />
              <div className="portfolio-overlay">
                <div className="portfolio-overlay-content">
                  <span className="portfolio-category">{item.category}</span>
                  <i className="fas fa-expand"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-preview-footer">
          <Link to="/portfolio" className="btn-primary">
            <span>Tüm Çalışmalar</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioPreview