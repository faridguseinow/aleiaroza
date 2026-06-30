import { useEffect, useState } from 'react'
import BrandLogo from './BrandLogo'
import LanguageSwitcher from './LanguageSwitcher'
import styles from './Header.module.css'

function Header({ language, onLanguageChange, t }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [language])

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.shell}>
          <BrandLogo />

          <nav aria-label={t.header.navAria} className={styles.desktopNav}>
            {t.header.nav.map((item) => (
              <a key={item.href} className={styles.navLink} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <div className={styles.desktopLanguage}>
              <LanguageSwitcher
                currentLanguage={language}
                label={t.header.language}
                onChange={onLanguageChange}
              />
            </div>

            <button
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t.header.menuClose : t.header.menuOpen}
              className={styles.burger}
              onClick={() => setMenuOpen((open) => !open)}
              type="button"
            >
              <span className={menuOpen ? styles.lineOneActive : ''} />
              <span className={menuOpen ? styles.lineTwoActive : ''} />
              <span className={menuOpen ? styles.lineThreeActive : ''} />
            </button>
          </div>
        </div>
      </div>

      <div
        aria-hidden={!menuOpen}
        className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ''}`}
      >
        <div className={styles.mobilePanel}>
          <LanguageSwitcher
            currentLanguage={language}
            label={t.header.language}
            onChange={onLanguageChange}
          />

          <nav aria-label={t.header.navAria} className={styles.mobileNav}>
            {t.header.nav.map((item) => (
              <a
                key={item.href}
                className={styles.mobileLink}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
