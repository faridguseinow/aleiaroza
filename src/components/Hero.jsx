import { createWhatsAppLink } from '../utils/whatsapp'
import styles from './Hero.module.css'

// Replace this URL later with a local hero image when real assets are available.
const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1754494183973-e736b79fb084?auto=format&fit=crop&w=2200&q=80'

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

            <div className={styles.meta}>
              <div>
                <span>{t.hero.sideTitle}</span>
                <strong>{t.hero.metaLeft}</strong>
              </div>
              <div>
                <span>{t.hero.metaRightLabel}</span>
                <strong>{t.hero.metaRight}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
