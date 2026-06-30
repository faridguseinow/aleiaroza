import { useEffect, useState } from 'react'
import styles from './BackToTop.module.css'

function BackToTop({ label }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 480)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      aria-label={label}
      className={`${styles.button} ${visible ? styles.visible : ''}`}
      onClick={handleClick}
      type="button"
    >
      <svg aria-hidden="true" className={styles.icon} viewBox="0 0 24 24">
        <path
          d="M12 5.5 6.5 11h3.75v7.5h3.5V11h3.75L12 5.5Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}

export default BackToTop
