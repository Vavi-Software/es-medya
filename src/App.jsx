import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsapp'
import BackToTop from './components/BackToTop'
import CustomCursor from './components/CustomCursor'

import Home from './pages/Home'
import Hizmetler from './pages/Hizmetler'
import Galeri from './pages/Galeri'
import Hakkimizda from './pages/Hakkimizda'
import Iletisim from './pages/Iletisim'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hizmetler" element={<Hizmetler />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/iletisim" element={<Iletisim />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  )
}

export default App