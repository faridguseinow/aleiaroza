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
            <span>{t.footer.label}</span>
          </div>

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
