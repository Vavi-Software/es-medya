import { useEffect, useRef } from 'react'

const marqueeItems = [
  'Düğün Fotoğrafçılığı',
  'Reklam Çekimi',
  'Sosyal Medya',
  'İçerik Üretimi',
  'Ürün Fotoğrafçılığı',
  'Drone Çekimi',
]

function Marquee() {
  const contentRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const handleEnter = () => {
      content.style.animationPlayState = 'paused'
    }
    const handleLeave = () => {
      content.style.animationPlayState = 'running'
    }

    section.addEventListener('mouseenter', handleEnter)
    section.addEventListener('mouseleave', handleLeave)

    return () => {
      section.removeEventListener('mouseenter', handleEnter)
      section.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  // İçeriği 2 kere render et (sonsuz marquee efekti için)
  const renderItems = () => {
    return [...marqueeItems, ...marqueeItems].map((item, index) => (
      <span key={index}>
        {index > 0 && <span className="dot">✦</span>}
        <span>{item}</span>
      </span>
    ))
  }

  return (
    <section className="marquee-section" ref={sectionRef}>
      <div className="marquee-track">
        <div className="marquee-content" ref={contentRef}>
          {marqueeItems.map((item, i) => (
            <span key={`a-${i}`}>
              <span>{item}</span>
              <span className="dot">✦</span>
            </span>
          ))}
          {marqueeItems.map((item, i) => (
            <span key={`b-${i}`}>
              <span>{item}</span>
              <span className="dot">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Marquee