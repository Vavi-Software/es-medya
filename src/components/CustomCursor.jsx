import { useEffect, useRef } from 'react'

function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    // Sadece desktop'ta çalışsın
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'
    }

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.08
      followerY += (mouseY - followerY) * 0.08
      follower.style.left = (followerX - 20) + 'px'
      follower.style.top = (followerY - 20) + 'px'
      requestAnimationFrame(animateFollower)
    }

    const addHover = () => {
      cursor.classList.add('hover')
      follower.classList.add('hover')
    }

    const removeHover = () => {
      cursor.classList.remove('hover')
      follower.classList.remove('hover')
    }

    const hideCursor = () => {
      cursor.style.opacity = '0'
      follower.style.opacity = '0'
    }

    const showCursor = () => {
      cursor.style.opacity = '1'
      follower.style.opacity = '0.5'
    }

    // Hover elementlerini dinle
    const attachHoverListeners = () => {
      const hoverElements = document.querySelectorAll(
        'a, button, .hizmet-card, .portfolio-item, .filter-btn, .info-item, .stat, .surec-item, .yorum-card'
      )
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })
      return hoverElements
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', hideCursor)
    document.addEventListener('mouseenter', showCursor)

    animateFollower()

    // İlk yükleme + DOM değişikliklerinde hover listener ekle
    let hoverElements = attachHoverListeners()

    const observer = new MutationObserver(() => {
      // Eski listener'ları temizle
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
      // Yeni listener'ları ekle
      hoverElements = attachHoverListeners()
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', hideCursor)
      document.removeEventListener('mouseenter', showCursor)
      observer.disconnect()
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  // Mobilde render etme
  if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    return null
  }

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  )
}

export default CustomCursor