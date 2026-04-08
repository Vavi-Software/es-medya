import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ParallaxQuote() {
  useEffect(() => {
    gsap.fromTo('.parallax-quote blockquote',
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: '.parallax-quote',
          start: 'top 70%',
          once: true,
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        clearProps: 'all',
      }
    )

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section className="parallax-quote">
      <div className="container">
        <blockquote>
          <span className="quote-icon">"</span>
          <p>
            Her fotoğraf bir hikaye anlatır, biz o hikayeyi{' '}
            <em>ölümsüzleştiriyoruz.</em>
          </p>
          <cite>— Es Medya</cite>
        </blockquote>
      </div>
    </section>
  )
}

export default ParallaxQuote