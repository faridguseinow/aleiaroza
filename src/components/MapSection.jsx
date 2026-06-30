import styles from './MapSection.module.css'

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/place/Aleia+Roza/data=!4m2!3m1!1s0x0:0x57780d32770ecc18?sa=X&ved=1t:2428&ictx=111'
const TWO_GIS_LINK = 'https://2gis.az/ru/baku/firm/70000001038433045'
const GOOGLE_MAPS_EMBED_URL = ''

function MapSection({ t }) {
  return (
    <section className="section" id="map">
      <div className="container">
        <div className={`sectionHeader reveal ${styles.header}`} data-reveal>
          <span className="eyebrow">{t.map.eyebrow}</span>
          <h2 className="sectionTitle">{t.map.title}</h2>
          <p className="sectionDescription">{t.map.description}</p>
        </div>

        <div className={`reveal ${styles.embedCard}`} data-reveal>
          {GOOGLE_MAPS_EMBED_URL ? (
            <div className={styles.embedWrap}>
              {/* Insert Google Maps iframe here */}
              <iframe
                allowFullScreen=""
                className={styles.iframe}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={GOOGLE_MAPS_EMBED_URL}
                title="Aleia Roza map"
              />
            </div>
          ) : (
            <div className={styles.placeholder}>
              <div className={styles.placeholderInner}>
                <strong>{t.map.placeholderTitle}</strong>
                <p>{t.map.placeholderText}</p>
              </div>
            </div>
          )}
        </div>

        <div className={`reveal ${styles.actions}`} data-reveal>
          <a className="ctaSecondary" href={GOOGLE_MAPS_LINK} rel="noreferrer" target="_blank">
            {t.map.openGoogle}
          </a>
          <a className="ctaGhost" href={TWO_GIS_LINK} rel="noreferrer" target="_blank">
            {t.map.openTwoGis}
          </a>
        </div>

        <p className={`reveal ${styles.helper}`} data-reveal>
          {t.map.helper}
        </p>
      </div>
    </section>
  )
}

export default MapSection
