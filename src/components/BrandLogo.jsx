import { useState } from 'react'
import styles from './BrandLogo.module.css'

function BrandLogo({ inverse = false }) {
  const [logoUnavailable, setLogoUnavailable] = useState(false)

  return (
    <a className={`${styles.logo} ${inverse ? styles.logoInverse : ''}`} href="#hero" aria-label="Aleia Roza">
      <span className={styles.mark} aria-hidden="true">
        {!logoUnavailable ? (
          <img
            alt=""
            className={styles.image}
            onError={() => setLogoUnavailable(true)}
            src="/logo.png"
          />
        ) : null}
        <span className={`${styles.initials} ${logoUnavailable ? styles.initialsVisible : ''}`}>
          AR
        </span>
      </span>

      <span className={styles.copy}>
        <span className={styles.name}>Aleia Roza</span>
        <span className={styles.tagline}>Flower Boutique</span>
      </span>
    </a>
  )
}

export default BrandLogo
