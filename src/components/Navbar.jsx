import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Ana Sayfa' },
  { path: '/hizmetler', label: 'Hizmetler' },
  { path: '/galeri', label: 'Galeri' },
  { path: '/hakkimizda', label: 'Hakkımızda' },
  { path: '/iletisim', label: 'İletişim' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Ana sayfa dışındaki sayfalarda navbar her zaman scrolled
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) {
        setScrolled(window.scrollY > 60)
      }
    }

    if (!isHome) {
      setScrolled(true)
    } else {
      setScrolled(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  // Navbar hide/show on scroll
  useEffect(() => {
    let lastScroll = 0
    const navbar = document.getElementById('navbar')

    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (currentScroll > 500) {
        navbar.style.transform = currentScroll > lastScroll ? 'translateY(-100%)' : 'translateY(0)'
      } else {
        navbar.style.transform = 'translateY(0)'
      }
      lastScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Sayfa değişince menüyü kapat
  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
    window.scrollTo(0, 0)
  }, [location])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    document.body.style.overflow = !menuOpen ? 'hidden' : ''
  }

  // ESC ile menü kapat
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        document.body.style.overflow = ''
      }
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [menuOpen])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo-light.png" alt="Es Medya" className="logo-light" />
              <img src="/images/logo-dark.png" alt="Es Medya" className="logo-dark" />
            </Link>
          </div>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menü"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.label}
            </Link>
          ))}
          <div className="mobile-menu-social">
            <a href="https://instagram.com/esmedya" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/905510969754" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar