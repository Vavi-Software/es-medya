import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const adimlar = [
  {
    number: '01',
    title: 'İletişim',
    desc: 'Bize ulaşın, ihtiyaçlarınızı ve hayallerinizi dinleyelim.',
  },
  {
    number: '02',
    title: 'Planlama',
    desc: 'Çekim konseptini, lokasyonu ve detayları birlikte planlayalım.',
  },
  {
    number: '03',
    title: 'Çekim',
    desc: 'Profesyonel ekibimizle en özel anlarınızı kadraja alalım.',
  },
  {
    number: '04',
    title: 'Teslim',
    desc: 'Özenle düzenlenmiş fotoğraf ve videoları size teslim edelim.',
  },
]

function CalismaSureci() {
  useEffect(() => {
    gsap.fromTo('.surec-item',
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.surec-grid',
          start: 'top 85%',
          once: true,
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        clearProps: 'all',
      }
    )

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section className="calisma-sureci">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nasıl Çalışıyoruz</span>
          <h2 className="section-title">Çalışma Sürecimiz</h2>
          <p className="section-subtitle">
            Sizinle birlikte 4 kolay adımda hayalinizdeki çekimi gerçekleştiriyoruz
          </p>
        </div>

        <div className="surec-grid">
          {adimlar.map((adim) => (
            <div className="surec-item" key={adim.number}>
              <div className="surec-number">{adim.number}</div>
              <h4>{adim.title}</h4>
              <p>{adim.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CalismaSureci