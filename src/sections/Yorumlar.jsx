import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const yorumlar = [
  {
    name: 'Ayşe & Mehmet',
    type: 'Düğün Çekimi',
    initial: 'A',
    text: 'Düğünümüzün her anını muhteşem bir şekilde yakaladılar. Fotoğrafları gördüğümüzde o günü tekrar yaşadık. Kesinlikle tavsiye ediyoruz!',
  },
  {
    name: 'Burak Yılmaz',
    type: 'Sosyal Medya İçerik',
    initial: 'B',
    text: 'Sosyal medya hesaplarımız için hazırladıkları içerikler işimizi bir üst seviyeye taşıdı. Profesyonel ve yaratıcı bir ekip.',
  },
  {
    name: 'Zeynep Kara',
    type: 'Reklam Çekimi',
    initial: 'Z',
    text: 'Markamızın reklam çekimlerini Es Medya ile yaptık. Sonuçlar beklentimizin çok üzerindeydi. Harika bir iş çıkardılar!',
  },
]

function Yorumlar() {
  useEffect(() => {
    gsap.fromTo('.yorum-card',
      { y: 40, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.yorum-grid',
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
    <section className="yorumlar">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Müşteri Yorumları</span>
          <h2 className="section-title">Müşterilerimiz Ne Diyor?</h2>
          <p className="section-subtitle">
            Birlikte çalıştığımız müşterilerimizin deneyimleri
          </p>
        </div>

        <div className="yorum-grid">
          {yorumlar.map((yorum, index) => (
            <div className="yorum-card" key={index}>
              <div className="yorum-stars">
                {[...Array(5)].map((_, i) => (
                  <i className="fas fa-star" key={i}></i>
                ))}
              </div>
              <blockquote>{yorum.text}</blockquote>
              <div className="yorum-author">
                <div className="yorum-avatar">{yorum.initial}</div>
                <div className="yorum-author-info">
                  <h5>{yorum.name}</h5>
                  <span>{yorum.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Yorumlar