import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'Es Medya'

const FALLBACK_ORIGIN = 'https://esmedya.com'

function getSiteOrigin() {
  const fromEnv = import.meta.env.VITE_SITE_URL
  if (fromEnv && typeof fromEnv === 'string') {
    try {
      return new URL(fromEnv).origin
    } catch {
      return FALLBACK_ORIGIN
    }
  }
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }
  return FALLBACK_ORIGIN
}

const DEFAULT_DESCRIPTION =
  'Es Medya — Ankara merkezli profesyonel fotoğrafçılık ve video prodüksiyonu. Düğün ve organizasyon çekimleri, reklam, tanıtım ve sosyal medya içerik üretimi.'

const DEFAULT_KEYWORDS =
  'Es Medya, Ankara fotoğrafçı, Ankara düğün fotoğrafçısı, Ankara organizasyon fotoğrafçılığı, Ankara reklam çekimi, Ankara tanıtım videosu, Ankara sosyal medya içerik, profesyonel fotoğrafçı Ankara, etkinlik fotoğrafçısı Ankara, kurumsal çekim Ankara'

function buildJsonLd(origin) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${origin}/#business`,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        url: origin,
        telephone: '+90-551-096-97-54',
        email: 'info@esmedya.com',
        image: `${origin}/images/logo-light.png`,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ankara',
          addressRegion: 'Ankara',
          addressCountry: 'TR',
        },
        areaServed: {
          '@type': 'City',
          name: 'Ankara',
          containedInPlace: { '@type': 'Country', name: 'Türkiye' },
        },
        sameAs: ['https://instagram.com/esmedya'],
        knowsAbout: [
          'Düğün fotoğrafçılığı',
          'Organizasyon çekimi',
          'Reklam fotoğrafçılığı',
          'Video prodüksiyon',
          'Sosyal medya içerik üretimi',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: origin,
        name: SITE_NAME,
        inLanguage: 'tr-TR',
        publisher: { '@id': `${origin}/#business` },
      },
    ],
  }
}

function SEO({ title, description, keywords, noIndex = false }) {
  const { pathname } = useLocation()
  const origin = getSiteOrigin()
  const canonical = `${origin}${pathname === '/' ? '' : pathname}`
  const desc = description || DEFAULT_DESCRIPTION
  const keys = keywords || DEFAULT_KEYWORDS
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Ankara Fotoğrafçılık & Video`
  const ogImage = `${origin}/images/hero1.jpeg`
  const jsonLd = buildJsonLd(origin)

  return (
    <Helmet prioritizeSeoTags htmlAttributes={{ lang: 'tr' }}>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keys} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="geo.region" content="TR-06" />
      <meta name="geo.placename" content="Ankara" />
      <meta name="language" content="Turkish" />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${SITE_NAME} — Ankara`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="theme-color" content="#0a0a0a" />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}

export default SEO
