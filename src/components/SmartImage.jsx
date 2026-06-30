import { useState } from 'react'
import styles from './SmartImage.module.css'

function SmartImage({ alt, className = '', description, fallbackLabel, src }) {
  const [hasError, setHasError] = useState(false)
  const hasImage = src && !hasError

  return (
    <div className={`${styles.frame} ${className}`.trim()}>
      {hasImage ? (
        <img
          alt={alt}
          className={styles.image}
          loading="lazy"
          onError={() => setHasError(true)}
          src={src}
        />
      ) : (
        <div className={styles.fallback} role="img" aria-label={fallbackLabel}>
          <span className={styles.fallbackLabel}>{fallbackLabel}</span>
          {description ? <span className={styles.fallbackDescription}>{description}</span> : null}
        </div>
      )}
    </div>
  )
}

export default SmartImage
