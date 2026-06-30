import { useEffect, useState } from 'react'
import BackToTop from './components/BackToTop'
import ContactMap from './components/ContactMap'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import { defaultLanguage, supportedLanguages, translations } from './i18n/translations'

const LANGUAGE_STORAGE_KEY = 'aleia-roza-language'

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return defaultLanguage
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
  return supportedLanguages.includes(savedLanguage) ? savedLanguage : defaultLanguage
}

function updateMetaTag(selector, content) {
  const element = document.querySelector(selector)
  if (element) {
    element.setAttribute('content', content)
  }
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage)
  const t = translations[language] ?? translations[defaultLanguage]

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    document.documentElement.lang = language
    document.title = t.meta.title
    updateMetaTag('meta[name="description"]', t.meta.description)
    updateMetaTag('meta[name="keywords"]', t.meta.keywords)
    updateMetaTag('meta[property="og:title"]', t.meta.ogTitle)
    updateMetaTag('meta[property="og:description"]', t.meta.ogDescription)
    updateMetaTag('meta[property="og:locale"]', t.meta.ogLocale)
    updateMetaTag('meta[property="og:image"]', t.meta.ogImage)
  }, [language, t])

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('isVisible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pageShell">
      <a className="skipLink" href="#main-content">
        {t.common.skipToContent}
      </a>

      <Header language={language} onLanguageChange={setLanguage} t={t} />

      <main id="main-content">
        <Hero t={t} />
        <Gallery t={t} />
        <Services t={t} />
        <ContactMap t={t} />
      </main>

      <Footer t={t} />
      <BackToTop label={t.common.backToTop} />
    </div>
  )
}

export default App
