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

