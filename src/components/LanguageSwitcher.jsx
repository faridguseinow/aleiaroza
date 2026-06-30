import styles from './LanguageSwitcher.module.css'

const languages = ['ru', 'az', 'en']

function LanguageSwitcher({ currentLanguage, label, onChange }) {
  return (
    <div className={styles.switcher} aria-label={label} role="group">
      {languages.map((language) => (
        <button
          key={language}
          aria-pressed={currentLanguage === language}
          className={`${styles.option} ${currentLanguage === language ? styles.active : ''}`}
          onClick={() => onChange(language)}
          type="button"
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
