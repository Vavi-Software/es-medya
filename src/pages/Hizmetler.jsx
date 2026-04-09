import { useEffect } from 'react'
import gsap from 'gsap'
import PageHeader from '../components/PageHeader'
import SEO from '../components/SEO'

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

function Hizmetler() {
  useEffect(() => {
    gsap.fromTo('.hizmet-card',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.4,
        ease: 'power3.out',
        clearProps: 'all',
      }
    )
  }, [])

  return (
    <>
     <SEO
        title="Hizmetler"
        description="Es Medya profesyonel düğün fotoğrafçılığı, reklam çekimi, sosyal medya içerik üretimi hizmetleri."
        keywords="düğün fotoğrafçısı, reklam çekimi, sosyal medya, içerik üretimi"
      />
      <PageHeader
        title="Hizmetlerimiz"
        subtitle="Profesyonel ekibimizle her anınızı en iyi şekilde ölümsüzleştiriyoruz"
      />

      <section className="hizmetler" id="hizmetler">
        <div className="container">
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
        </div>
      </section>
    </>
  )
}

export default Hizmetler