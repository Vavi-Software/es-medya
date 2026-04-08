import { useEffect } from 'react'
import gsap from 'gsap'

function PageHeader({ title, subtitle }) {
  useEffect(() => {
    gsap.fromTo('.page-header h1',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power3.out', clearProps: 'all' }
    )
    gsap.fromTo('.page-header p',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.25, ease: 'power3.out', clearProps: 'all' }
    )
  }, [])

  return (
    <section className="page-header">
      <div className="page-header-overlay"></div>
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}

export default PageHeader