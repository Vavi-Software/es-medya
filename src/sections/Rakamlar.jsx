import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const rakamlar = [
  { target: 500, suffix: '+', label: 'Mutlu Müşteri' },
  { target: 1200, suffix: '+', label: 'Tamamlanan Proje' },
  { target: 98, prefix: '%', suffix: '', label: 'Memnuniyet Oranı' },
  { target: 8, suffix: '+', label: 'Yıllık Deneyim' },
]

function Rakamlar() {
  const sectionRef = useRef(null)
  const countedRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo('.rakam-item',
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            if (!countedRef.current) {
              countedRef.current = true
              startCounters()
            }
          },
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'all',
      }
    )

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const startCounters = () => {
    const counters = document.querySelectorAll('.rakam-counter')
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

  return (
    <section className="rakamlar" ref={sectionRef}>
      <div className="container">
        <div className="rakamlar-grid">
          {rakamlar.map((item, index) => (
            <div className="rakam-item" key={index}>
              <h3>
                {item.prefix && item.prefix}
                <span className="rakam-counter" data-target={item.target}>0</span>
                {item.suffix}
              </h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rakamlar