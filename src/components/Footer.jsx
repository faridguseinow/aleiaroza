import BrandLogo from './BrandLogo'
import styles from './Footer.module.css'

function Footer({ t }) {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} id="mini-footer">
      <div className="container">
        <div className={styles.shell}>
          <div className={styles.brand}>
            <BrandLogo inverse />
          </div>

          <nav aria-label="Footer links" className={styles.links}>
            {t.footer.policyLinks.map((item) => (
              <a href="#mini-footer" key={item}>
                {item}
              </a>
            ))}
          </nav>

          <div className={styles.bottom}>
            <span>© {year} Aleia Roza</span>
            <span>{t.footer.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
