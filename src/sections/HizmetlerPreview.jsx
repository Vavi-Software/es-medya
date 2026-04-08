import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const hizmetler = [
  {
    number: '01',
    icon: 'fas fa-heart',
    title: 'Düğün Fotoğrafçılığı',
    desc: 'En özel gününüzü unutulmaz kareler ile ölümsüzleştiriyoruz.',
  },
  {
    number: '02',
    icon: 'fas fa-bullhorn',
    title: 'Reklam & Tanıtım',
    desc: 'Markanızı en iyi şekilde yansıtan profesyonel çekimler.',
  },
  {
    number: '03',
    icon: 'fas fa-mobile-alt',
    title: 'Sosyal Medya Çekimleri',
    desc: 'Sosyal medya hesaplarınız için etkileyici içerikler üretiyoruz.',
  },
  {
    number: '04',
    icon: 'fas fa-video',
    title: 'İçerik Üreticiliği',
    desc: 'Markanız için özgün ve dikkat çekici içerikler tasarlıyoruz.',
  },
]

function HizmetlerPreview() {
  useEffect(() => {
    gsap.fromTo('.hizmetler-preview .hizmet-card',
      { y: 60, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.hizmetler-preview .hizmet-grid',
          start: 'top 85%',
          once: true,
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        clearProps: 'all',
      }
    )

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section className="hizmetler-preview">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Hizmetlerimiz</span>
          <h2 className="section-title">Neler Yapıyoruz?</h2>
          <p className="section-subtitle">
            Profesyonel ekibimizle her anınızı en iyi şekilde ölümsüzleştiriyoruz
          </p>
        </div>

        <div className="hizmet-grid">
          {hizmetler.map((hizmet) => (
            <div className="hizmet-card" key={hizmet.number}>
              <div className="hizmet-number">{hizmet.number}</div>
              <div className="hizmet-icon">
                <i className={hizmet.icon}></i>
              </div>
              <h3>{hizmet.title}</h3>
              <p>{hizmet.desc}</p>
              <div className="hizmet-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="hizmetler-preview-footer">
          <Link to="/hizmetler" className="btn-primary">
            <span>Tüm Hizmetler</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HizmetlerPreview