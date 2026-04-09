import { useEffect } from 'react'
import gsap from 'gsap'
import PageHeader from '../components/PageHeader'
import SEO from '../components/SEO'

const contactInfo = [
  {
    icon: 'fas fa-phone',
    title: 'Telefon',
    value: '0551 096 97 54',
    href: 'tel:+905510969754',
  },
  {
    icon: 'fab fa-whatsapp',
    title: 'WhatsApp',
    value: '0551 096 97 54',
    href: 'https://wa.me/905510969754',
  },
  {
    icon: 'fab fa-instagram',
    title: 'Instagram',
    value: '@esmedya',
    href: 'https://instagram.com/esmedya',
    external: true,
  },
  {
    icon: 'fas fa-envelope',
    title: 'E-posta',
    value: 'info@esmedya.com',
    href: 'mailto:info@esmedya.com',
  },
]

function Iletisim() {
  useEffect(() => {
    gsap.fromTo('.info-item',
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.12,
        delay: 0.3,
        ease: 'power3.out',
        clearProps: 'all',
      }
    )

    gsap.fromTo('.cta-card',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out',
        clearProps: 'all',
      }
    )
  }, [])

  return (
    <>
    <SEO
  title="İletişim"
  description="Es Medya ile iletişime geçin. WhatsApp, telefon ve e-posta ile bize ulaşabilirsiniz."
  keywords="iletişim, es medya telefon, es medya whatsapp, fotoğrafçı iletişim"
/>
      <PageHeader
        title="İletişim"
        subtitle="Hizmetlerimiz için hemen iletişime geçin"
      />

      <section className="iletisim" id="iletisim">
        <div className="container">
          <div className="iletisim-cards">
            {contactInfo.map((info, index) => (
              <div className="info-item" key={index}>
                <div className="info-icon">
                  <i className={info.icon}></i>
                </div>
                <div>
                  <h4>{info.title}</h4>
                  <p>
                    <a
                      href={info.href}
                      target={info.external ? '_blank' : undefined}
                      rel={info.external ? 'noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="iletisim-cta-center">
            <div className="cta-card">
              <div className="cta-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h3>Hemen Teklif Alın</h3>
              <p>
                WhatsApp üzerinden hızlıca iletişime geçin, size en uygun teklifi sunalım.
              </p>
              <a
                href="https://wa.me/905510969754?text=Merhaba,%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum."
                className="wp-button"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
                WhatsApp ile Yazın
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Iletisim