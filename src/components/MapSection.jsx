import styles from './MapSection.module.css'

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/place/Aleia+Roza/data=!4m2!3m1!1s0x0:0x57780d32770ecc18?sa=X&ved=1t:2428&ictx=111'
const TWO_GIS_LINK = 'https://2gis.az/ru/baku/firm/70000001038433045'
const PHONE_LINK = 'tel:+994516848450'
const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13757.35024959128!2d49.87939571632946!3d40.39855219108725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d0e2b617f3b%3A0x57780d32770ecc18!2sAleia%20Roza!5e0!3m2!1sru!2saz!4v1782817284070!5m2!1sru!2saz'

function MapSection({ t }) {
  return (
    <section className="section" id="map">
      <div className="container">
        <div className={`sectionHeader reveal ${styles.header}`} data-reveal>
          <span className="eyebrow">{t.map.eyebrow}</span>
          <h2 className="sectionTitle">{t.map.title}</h2>
          <p className="sectionDescription">{t.map.description}</p>
        </div>

        <div className={styles.layout}>
          <div className={`reveal ${styles.infoCard}`} data-reveal>
            <div className={styles.infoBlock}>
              <span>{t.contact.addressLabel}</span>
              <strong>{t.common.address}</strong>
            </div>

            <div className={styles.infoBlock}>
              <span>{t.contact.hoursLabel}</span>
              <strong>{t.common.hours}</strong>
            </div>

            <div className={styles.infoBlock}>
              <span>{t.contact.phoneLabel}</span>
              <a href={PHONE_LINK}>{t.common.phone}</a>
            </div>

            <div className={styles.actions}>
              <a className="ctaSecondary" href={GOOGLE_MAPS_LINK} rel="noreferrer" target="_blank">
                {t.map.openGoogle}
              </a>
              <a className="ctaGhost" href={TWO_GIS_LINK} rel="noreferrer" target="_blank">
                {t.map.openTwoGis}
              </a>
            </div>
          </div>

          <div className={`reveal ${styles.embedCard}`} data-reveal>
            {GOOGLE_MAPS_EMBED_URL ? (
              <div className={styles.embedWrap}>
                {/* Insert Google Maps iframe here */}
                <iframe
                  allowFullScreen=""
                  className={styles.iframe}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
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
        </div>
      </div>
    </section>
  )
}

export default MapSection
