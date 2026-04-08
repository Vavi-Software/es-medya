import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import PageHeader from '../components/PageHeader'

const stats = [
  { target: 500, suffix: '+', prefix: '', label: 'Mutlu Müşteri' },
  { target: 1200, suffix: '+', prefix: '', label: 'Tamamlanan Proje' },
  { target: 98, suffix: '', prefix: '%', label: 'Memnuniyet Oranı' },
  { target: 8, suffix: '+', prefix: '', label: 'Yıllık Deneyim' },
]

function startCounters() {
  const counters = document.querySelectorAll('.counter')
  if (counters.length === 0) return

  counters.forEach((el) => {
    const target = parseInt(el.dataset.target)
    if (!target) return

    const duration = 2500
    const startTime = performance.now()

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4)
    }

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      el.textContent = Math.floor(easeOutQuart(progress) * target)
      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        el.textContent = target
      }
    }

    requestAnimationFrame(updateCounter)
  })
}

function Hakkimizda() {
  useEffect(() => {
    gsap.fromTo('.hakkimizda-text',
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        clearProps: 'all',
      }
    )

    gsap.fromTo('.stat',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.12,
        delay: 0.4,
        ease: 'power3.out',
        clearProps: 'all',
        onComplete: () => startCounters(),
      }
    )
  }, [])

  return (
    <>
      <PageHeader
        title="Hakkımızda"
        subtitle="Biz kimiz, ne yapıyoruz?"
      />

      <section className="hakkimizda" id="hakkimizda">
        <div className="container">
          <div className="hakkimizda-content">
            <div className="hakkimizda-text">
              <h2 className="section-title">Biz Kimiz?</h2>
              <p>
                Es Medya olarak, her anın kendine özgü bir hikaye taşıdığına inanıyoruz.
                Profesyonel ekibimizle düğünlerden reklam çekimlerine, sosyal medya
                içeriklerinden kurumsal tanıtımlara kadar geniş bir yelpazede hizmet sunuyoruz.
              </p>
              <p>
                Müşterilerimizin vizyonunu anlamak ve bunu en iyi görsel içeriklere
                dönüştürmek en büyük önceliğimizdir.
              </p>
              <Link to="/iletisim" className="btn-primary light">
                <span>İletişime Geç</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            <div className="hakkimizda-stats">
              {stats.map((stat, index) => (
                <div className="stat" key={index}>
                  <h3>
                    {stat.prefix}
                    <span className="counter" data-target={stat.target}>0</span>
                    {stat.suffix}
                  </h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hakkimizda