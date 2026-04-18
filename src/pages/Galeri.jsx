import { useState, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import PageHeader from '../components/PageHeader'
import SEO from '../components/SEO'

function fotoUrl(name) {
  return `${import.meta.env.BASE_URL}fotolar/${encodeURIComponent(name)}`
}

function Galeri() {
  const [photos, setPhotos] = useState([])
  const [videos, setVideos] = useState([])
  const [loadState, setLoadState] = useState('loading')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const goNext = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null || !photos.length) return null
      return (i + 1) % photos.length
    })
  }, [photos.length])

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null || !photos.length) return null
      return (i - 1 + photos.length) % photos.length
    })
  }, [photos.length])

  useEffect(() => {
    const url = `${import.meta.env.BASE_URL}galeri-manifest.json`
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('manifest')
        return res.json()
      })
      .then((data) => {
        setPhotos(Array.isArray(data.photos) ? data.photos : [])
        setVideos(Array.isArray(data.videos) ? data.videos : [])
        setLoadState('ok')
      })
      .catch(() => setLoadState('error'))
  }, [])

  useEffect(() => {
    if (!photos.length) return
    gsap.fromTo(
      '.galeri .portfolio-item',
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.04,
        delay: 0.15,
        ease: 'power3.out',
        clearProps: 'all',
      }
    )
  }, [photos])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, photos.length, goNext, goPrev])

  const lightboxSrc =
    lightboxIndex !== null && photos[lightboxIndex]
      ? fotoUrl(photos[lightboxIndex])
      : null

  return (
    <>
      <SEO
        title="Galeri"
        description="Es Medya fotoğraf ve video galerisi — etkinlik ve çekimlerden seçkiler."
        keywords="galeri, fotoğraf galerisi, video, Es Medya"
      />
      <PageHeader
        title="Galeri"
        subtitle="Fotoğraf ve video içeriklerimizi keşfedin"
      />

      <section className="galeri galeri-fotolar" id="fotograflar">
        <div className="container">
          <div className="galeri-block-head">
            <span className="section-tag">Fotoğraflar</span>
            <h2 className="section-title">Anlar</h2>
            <p className="section-subtitle">
              Çekimlerimizden kareler — bir görsele tıklayarak büyütebilirsiniz.
            </p>
          </div>

          {loadState === 'loading' && (
            <p className="galeri-status">Galeri yükleniyor…</p>
          )}
          {loadState === 'error' && (
            <p className="galeri-status galeri-status--error">
              Galeri listesi yüklenemedi. Lütfen sayfayı yenileyin.
            </p>
          )}
          {loadState === 'ok' && photos.length === 0 && (
            <p className="galeri-status">Henüz fotoğraf eklenmedi.</p>
          )}

          {loadState === 'ok' && photos.length > 0 && (
            <div className="portfolio-grid galeri-grid">
              {photos.map((name, index) => (
                <button
                  type="button"
                  key={name}
                  className="portfolio-item galeri-foto-btn"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Fotoğrafı büyüt: ${name}`}
                >
                  <img src={fotoUrl(name)} alt="" loading="lazy" decoding="async" />
                  <span className="galeri-foto-btn__shine" aria-hidden />
                  <span className="galeri-foto-btn__icon" aria-hidden>
                    <i className="fas fa-expand" />
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="galeri galeri-videolar" id="videolar">
        <div className="container">
          <div className="galeri-block-head">
            <span className="section-tag">Videolar</span>
            <h2 className="section-title">Hareket halinde</h2>
            <p className="section-subtitle">
              Tanıtım ve etkinlik videolarımız aşağıda listelenir.
            </p>
          </div>

          {videos.length === 0 ? (
            <div className="galeri-empty">
              <i className="fas fa-film" aria-hidden />
              <p>Yakında video içeriklerimizi burada paylaşacağız.</p>
              <p className="galeri-empty__hint">
                Video eklemek için dosyaları <code>public/videolar</code> klasörüne alıp{' '}
                <code>galeri-manifest.json</code> içindeki <code>videos</code> listesine
                kayıt ekleyin.
              </p>
            </div>
          ) : (
            <div className="galeri-video-grid">
              {videos.map((v, i) => (
                <article className="galeri-video-card" key={v.src || i}>
                  <div className="galeri-video-frame">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={v.poster || undefined}
                      src={v.src}
                    >
                      Tarayıcınız video oynatmayı desteklemiyor.
                    </video>
                  </div>
                  {v.title && <h3 className="galeri-video-title">{v.title}</h3>}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightboxSrc && (
        <div
          className="galeri-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Fotoğraf önizleme"
        >
          <button
            type="button"
            className="galeri-lightbox__backdrop"
            onClick={() => setLightboxIndex(null)}
            aria-label="Kapat"
          />
          <div className="galeri-lightbox__inner">
            <button
              type="button"
              className="galeri-lightbox__close"
              onClick={() => setLightboxIndex(null)}
              aria-label="Kapat"
            >
              <i className="fas fa-times" aria-hidden />
            </button>
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  className="galeri-lightbox__nav galeri-lightbox__nav--prev"
                  onClick={goPrev}
                  aria-label="Önceki fotoğraf"
                >
                  <i className="fas fa-chevron-left" aria-hidden />
                </button>
                <button
                  type="button"
                  className="galeri-lightbox__nav galeri-lightbox__nav--next"
                  onClick={goNext}
                  aria-label="Sonraki fotoğraf"
                >
                  <i className="fas fa-chevron-right" aria-hidden />
                </button>
              </>
            )}
            <img src={lightboxSrc} alt="" className="galeri-lightbox__img" />
            <p className="galeri-lightbox__counter">
              {lightboxIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Galeri
