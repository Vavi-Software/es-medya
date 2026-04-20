function FloatingWhatsApp() {
  return (
    <>
      <a
        href="https://www.youtube.com/@EsMedyaproduksiyon"
        className="floating-yt"
        target="_blank"
        rel="noreferrer"
        aria-label="YouTube"
      >
        <i className="fab fa-youtube"></i>
      </a>

      <a
        href="https://wa.me/905510969754?text=Merhaba,%20bilgi%20almak%20istiyorum."
        className="floating-wp"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="floating-wp-pulse"></span>
      </a>
    </>
  )
}

export default FloatingWhatsApp