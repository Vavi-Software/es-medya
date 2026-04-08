import { useState, useEffect } from 'react'
import gsap from 'gsap'
import PageHeader from '../components/PageHeader'

const portfolioData = [
  { image: '/images/p1.jpg', category: 'dugun', label: 'Düğün' },
  { image: '/images/p2.jpg', category: 'reklam', label: 'Reklam' },
  { image: '/images/p3.jpg', category: 'sosyal', label: 'Sosyal Medya' },
  { image: '/images/p4.jpg', category: 'dugun', label: 'Düğün' },
  { image: '/images/p5.jpg', category: 'reklam', label: 'Reklam' },
  { image: '/images/p6.jpg', category: 'sosyal', label: 'Sosyal Medya' },
]

const filters = [
  { key: 'all', label: 'Tümü' },
  { key: 'dugun', label: 'Düğün' },
  { key: 'reklam', label: 'Reklam' },
  { key: 'sosyal', label: 'Sosyal Medya' },
]

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    gsap.fromTo('.portfolio-item',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.4,
        ease: 'power3.out',
        clearProps: 'all',
      }
    )
  }, [])

  const handleFilter = (key) => {
    setActiveFilter(key)

    const items = document.querySelectorAll('.portfolio-item')
    items.forEach((item) => {
      const category = item.dataset.category
      const shouldShow = key === 'all' || category === key

      if (shouldShow) {
        gsap.to(item, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
          onStart: () => { item.style.display = 'block' },
        })
      } else {
        gsap.to(item, {
          opacity: 0,
          scale: 0.95,
          duration: 0.4,
          ease: 'power2.in',
          onComplete: () => { item.style.display = 'none' },
        })
      }
    })
  }

  return (
    <>
      <PageHeader
        title="Portfolyo"
        subtitle="Çalışmalarımızdan bir seçki"
      />

      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="portfolio-filter">
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => handleFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {portfolioData.map((item, index) => (
              <div
                className="portfolio-item"
                key={index}
                data-category={item.category}
              >
                <img src={item.image} alt={item.label} loading="lazy" />
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <span className="portfolio-category">{item.label}</span>
                    <i className="fas fa-expand"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio