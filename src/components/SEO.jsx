import { Helmet } from 'react-helmet-async'

function SEO({ title, description, keywords }) {
  const siteName = 'Es Medya'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Profesyonel Fotoğrafçılık & İçerik Üretimi`

  const defaultDescription = 'Es Medya - Profesyonel organizasyon fotoğrafçılığı, düğün çekimi, reklam ve sosyal medya içerik üretimi.'
  const defaultKeywords = 'fotoğrafçılık, düğün fotoğrafçısı, reklam çekimi, sosyal medya içerik üretimi, organizasyon fotoğrafçısı, es medya'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content="/images/hero1.jpeg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content="/images/hero1.jpeg" />
    </Helmet>
  )
}

export default SEO