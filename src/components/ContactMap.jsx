import { useState } from 'react'
import { createContactWhatsAppMessage, createWhatsAppLink } from '../utils/whatsapp'
import styles from './ContactMap.module.css'

const INSTAGRAM_LINK = 'https://www.instagram.com/aleia__roza/'
const PHONE_LINK = 'tel:+994516848450'
const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/place/Aleia+Roza/data=!4m2!3m1!1s0x0:0x57780d32770ecc18?sa=X&ved=1t:2428&ictx=111'
const TWO_GIS_LINK = 'https://2gis.az/ru/baku/firm/70000001038433045'
const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13757.35024959128!2d49.87939571632946!3d40.39855219108725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d0e2b617f3b%3A0x57780d32770ecc18!2sAleia%20Roza!5e0!3m2!1sru!2saz!4v1782817284070!5m2!1sru!2saz'

function ContactMap({ t }) {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    message: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormState((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const message = createContactWhatsAppMessage({
      intro: t.contact.formIntro,
      message: formState.message,
      messageLabel: t.contact.messageLabel,
      name: formState.name,
      nameLabel: t.contact.nameLabel,
      phone: formState.phone,
      phoneLabel: t.contact.phoneFieldLabel,
    })

    window.open(createWhatsAppLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={`sectionHeader reveal ${styles.header}`} data-reveal>
          <h2 className="sectionTitle">{t.contact.title}</h2>
          <p className="sectionDescription">{t.contact.description}</p>
        </div>

        <div className={styles.topGrid}>
          <div className={`reveal ${styles.infoCard}`} data-reveal>
            <a className={styles.metaItem} href={PHONE_LINK}>
              <span>{t.contact.phoneLabel}</span>
              <strong>{t.common.phone}</strong>
            </a>

            <a className={styles.metaItem} href={INSTAGRAM_LINK} rel="noreferrer" target="_blank">
              <span>{t.contact.instagramLabel}</span>
              <strong>{t.common.instagramHandle}</strong>
            </a>

            <div className={styles.metaItem}>
              <span>{t.contact.addressLabel}</span>
              <strong>{t.common.address}</strong>
            </div>

            <div className={styles.metaItem}>
              <span>{t.contact.hoursLabel}</span>
              <strong>{t.common.hours}</strong>
            </div>
          </div>

          <form className={`surfaceCard reveal ${styles.formCard}`} data-reveal onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>{t.contact.formTitle}</h3>
              <p>{t.contact.formDescription}</p>
            </div>

            <label className={styles.field}>
              <span>{t.contact.nameLabel}</span>
              <input
                name="name"
                onChange={handleChange}
                placeholder={t.contact.namePlaceholder}
                type="text"
                value={formState.name}
              />
            </label>

            <label className={styles.field}>
              <span>{t.contact.phoneFieldLabel}</span>
              <input
                name="phone"
                onChange={handleChange}
                placeholder={t.contact.phonePlaceholder}
                type="tel"
                value={formState.phone}
              />
            </label>

            <label className={styles.field}>
              <span>{t.contact.messageLabel}</span>
              <textarea
                name="message"
                onChange={handleChange}
                placeholder={t.contact.messagePlaceholder}
                rows="5"
                value={formState.message}
              />
            </label>

            <button className="ctaPrimary" type="submit">
              {t.contact.submit}
            </button>
          </form>
        </div>

        <div className={`reveal ${styles.mapCard}`} data-reveal>
          <div className={styles.mapHeader}>
            <div>
              <span className={styles.mapLabel}>{t.map.title}</span>
              <p className={styles.mapDescription}>{t.map.description}</p>
            </div>

            <div className={styles.mapActions}>
              <a className="ctaSecondary" href={GOOGLE_MAPS_LINK} rel="noreferrer" target="_blank">
                {t.map.openGoogle}
              </a>
              <a className="ctaGhost" href={TWO_GIS_LINK} rel="noreferrer" target="_blank">
                {t.map.openTwoGis}
              </a>
            </div>
          </div>

          {GOOGLE_MAPS_EMBED_URL ? (
            <div className={styles.embedWrap}>
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
    </section>
  )
}

export default ContactMap
