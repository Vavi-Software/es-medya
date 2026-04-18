import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import CalismaSureci from '../sections/CalismaSureci'
import PortfolioPreview from '../sections/PortfolioPreview'
import Rakamlar from '../sections/Rakamlar'
import Yorumlar from '../sections/Yorumlar'
import ParallaxQuote from '../sections/ParallaxQuote'
import SEO from '../components/SEO'



function Home() {
  return (
    <>
      <SEO
        title="Ana Sayfa"
        description="Ankara merkezli Es Medya ile düğün, organizasyon, reklam ve sosyal medya için profesyonel fotoğraf ve video. Anıları ölümsüzleştiriyoruz."
        keywords="Ankara fotoğrafçı, Ankara düğün fotoğrafçısı, Ankara organizasyon çekimi, Ankara reklam fotoğrafçısı, Es Medya, profesyonel fotoğrafçı Ankara"
      />
      <Hero />
      <Marquee />
      <CalismaSureci />
      <PortfolioPreview />
      <Rakamlar />
      <Yorumlar />
      <ParallaxQuote />
    </>
  )
}

export default Home

