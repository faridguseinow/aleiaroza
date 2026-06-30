import { serviceItems } from '../data/services'
import styles from './Services.module.css'

function Services({ t }) {
  return (
    <section className={`${styles.section} section`} id="services">
      <div className="container">
        <div className="sectionHeader reveal" data-reveal>
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="sectionTitle">{t.services.title}</h2>
          <p className="sectionDescription">{t.services.description}</p>
        </div>

        <div className={styles.grid}>
          {serviceItems.map((item, index) => {
            const content = t.services.items[index]

            return (
              <article className={`reveal ${styles.card}`} data-reveal key={item.id}>
                <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
                <h3>{content.title}</h3>
                <p>{content.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
