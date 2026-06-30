import { createWhatsAppLink } from '../utils/whatsapp'
import SmartImage from './SmartImage'
import styles from './Hero.module.css'

const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1647404188414-3a25874a254d?auto=format&fit=crop&w=2200&q=80'
const HERO_FEATURED_IMAGE =
  'https://images.unsplash.com/photo-1736347615447-454733d8163d?auto=format&fit=crop&w=1400&q=80'
const HERO_DETAIL_IMAGE =
  'https://images.unsplash.com/photo-1683861761877-93fd0ca01709?auto=format&fit=crop&w=1400&q=80'

function Hero({ t }) {
  return (
    <section
      className={`section ${styles.heroSection}`}
      id="hero"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(42, 24, 22, 0.72) 0%, rgba(42, 24, 22, 0.52) 42%, rgba(42, 24, 22, 0.18) 100%), url(${HERO_IMAGE_URL})`,
      }}
    >
      <div className="container">
        <div className={`reveal ${styles.heroLayout}`} data-reveal>
          <div className={styles.copyPanel}>
            <span className={styles.eyebrow}>{t.hero.eyebrow}</span>
            <h1 className={styles.title}>{t.hero.title}</h1>
            <p className={styles.subtitle}>{t.hero.subtitle}</p>
            <p className={styles.supporting}>{t.hero.supporting}</p>

            <div className={styles.actions}>
              <a
                className="ctaPrimary"
                href={createWhatsAppLink(t.hero.whatsappMessage)}
                rel="noreferrer"
                target="_blank"
              >
                {t.hero.primaryAction}
              </a>
              <a
                className={styles.secondaryLink}
                href="https://www.instagram.com/aleia__roza/"
                rel="noreferrer"
                target="_blank"
              >
                {t.hero.secondaryAction}
              </a>
            </div>
          </div>

          <div className={styles.visualStack}>
            <div className={styles.featureCard}>
              <SmartImage
                alt={t.hero.visualAlt}
                className={styles.featureImage}
                fallbackLabel={t.hero.visualFallback}
                src={HERO_FEATURED_IMAGE}
              />
              <div className={styles.featureOverlay}>
                <span>{t.hero.sideTitle}</span>
                <strong>{t.hero.metaLeft}</strong>
              </div>
            </div>

            <div className={styles.detailGrid}>
              <div className={styles.detailCard}>
                <SmartImage
                  alt={t.hero.visualAlt}
                  className={styles.detailImage}
                  fallbackLabel={t.hero.visualFallback}
                  src={HERO_DETAIL_IMAGE}
                />
              </div>

              <div className={styles.noteCard}>
                <span>{t.hero.metaRightLabel}</span>
                <strong>{t.hero.metaRight}</strong>
                <p>{t.hero.sideText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
