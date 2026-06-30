import { galleryItems } from '../data/gallery'
import SmartImage from './SmartImage'
import styles from './Gallery.module.css'

function Gallery({ t }) {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="sectionHeader reveal" data-reveal>
          <h2 className="sectionTitle">{t.gallery.title}</h2>
          <p className="sectionDescription">{t.gallery.description}</p>
        </div>

        <div className={styles.grid}>
          {galleryItems.map((item, index) => {
            const content = t.gallery.items[index]

            return (
              <a
                className={`reveal ${styles.card}`}
                data-reveal
                href={item.link}
                key={item.id}
                rel="noreferrer"
                target="_blank"
              >
                <div className={styles.media}>
                  <SmartImage
                    alt={content.title}
                    className={styles.image}
                    description={content.description}
                    fallbackLabel={content.title}
                    src={item.image}
                  />
                </div>
                <div className={styles.overlay}>
                  <strong>{content.title}</strong>
                  <span>{content.description}</span>
                </div>
              </a>
            )
          })}
        </div>

        <div className={`reveal ${styles.footer}`} data-reveal>
          <a
            className="ctaSecondary"
            href="https://www.instagram.com/aleia__roza/"
            rel="noreferrer"
            target="_blank"
          >
            {t.gallery.button}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
