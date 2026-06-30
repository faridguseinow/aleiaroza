import { useState } from 'react'
import { createContactWhatsAppMessage, createWhatsAppLink } from '../utils/whatsapp'
import styles from './Contact.module.css'

const INSTAGRAM_LINK = 'https://www.instagram.com/aleia__roza/'
const PHONE_LINK = 'tel:+994516848450'

function Contact({ t }) {
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
    <section className="section sectionCompact" id="contact">
      <div className="container">
        <div className={styles.layout}>
          <div className={`sectionShell reveal ${styles.infoCard}`} data-reveal>
            <div className="sectionInner">
              <span className="eyebrow">{t.contact.eyebrow}</span>
              <h2 className="sectionTitle">{t.contact.title}</h2>
              <p className="sectionDescription">{t.contact.description}</p>

              <div className={styles.metaGrid}>
                <a className={styles.metaItem} href={PHONE_LINK}>
                  <span>{t.contact.phoneLabel}</span>
                  <strong>{t.common.phone}</strong>
                </a>
                <a
                  className={styles.metaItem}
                  href={INSTAGRAM_LINK}
                  rel="noreferrer"
                  target="_blank"
                >
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
            </div>
          </div>

          <form className={`surfaceCard reveal ${styles.formCard}`} data-reveal onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
              <span className="eyebrow">{t.contact.formTitle}</span>
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
      </div>
    </section>
  )
}

export default Contact
