import { Link } from 'react-router-dom'

const footerLinks = [
  { path: '/', label: 'Ana Sayfa' },
  { path: '/hizmetler', label: 'Hizmetler' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/hakkimizda', label: 'Hakkımızda' },
  { path: '/iletisim', label: 'İletişim' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/images/logo-light.png" alt="Es Medya" />
            <p>Anları Ölümsüzleştiriyoruz</p>
          </div>

          <div className="footer-links">
            {footerLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="footer-social">
            <a href="https://instagram.com/esmedya" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/905510969754" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Es Medya. Tüm hakları saklıdır.</p>
            <p className="footer-credit">
            <a href="https://vavisoftware.com" target="_blank" rel="noreferrer">
              Vavi Software
            </a> tarafından yapılmıştır.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer