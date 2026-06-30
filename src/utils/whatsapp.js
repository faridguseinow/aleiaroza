const WHATSAPP_PHONE = '994516848450'

export function createWhatsAppLink(message = '') {
  const query = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${WHATSAPP_PHONE}${query}`
}

export function createContactWhatsAppMessage({
  intro,
  message,
  messageLabel,
  name,
  nameLabel,
  phone,
  phoneLabel,
}) {
  const safeName = name.trim() || '-'
  const safePhone = phone.trim() || '-'
  const safeMessage = message.trim() || '-'

  return `${intro} ${nameLabel}: ${safeName}. ${phoneLabel}: ${safePhone}. ${messageLabel}: ${safeMessage}.`
}
