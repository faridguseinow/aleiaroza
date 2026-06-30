export const supportedLanguages = ['az', 'ru', 'en']
export const defaultLanguage = 'az'

export const translations = {
  az: {
    meta: {
      title: 'Aleia Roza — Bakıda gül mağazası',
      description:
        'Bakıda buketlər, gül kompozisiyaları, dibçək gülləri və hədiyyəlik çiçəklər. Aleia Roza, Heydər Əliyev prospekti 87/89, Nərimanov.',
      keywords:
        'Aleia Roza, Bakı gül mağazası, gül sifarişi Bakı, buket Bakı, Nərimanov gül mağazası, Heydər Əliyev prospekti gül mağazası, çiçək mağazası Bakı',
      ogTitle: 'Aleia Roza — Bakıda gül mağazası',
      ogDescription:
        'Bakıda buketlər, kompozisiyalar və dibçək gülləri üçün zərif seçim. Aleia Roza ilə WhatsApp və Instagram üzərindən rahat əlaqə.',
      ogLocale: 'az_AZ',
      ogImage: '/images/storefront.jpg',
    },
    common: {
      skipToContent: 'Məzmuna keç',
      phone: '+994 51 684 8450',
      instagramHandle: '@aleia__roza',
      address: 'Heydər Əliyev prospekti 87/89, 1-ci mərtəbə, Nərimanov, Bakı',
      hours: 'Hər gün 09:00–21:00',
      whatsappShort: 'WhatsApp',
      instagram: 'Instagram',
      phoneLabel: 'Telefon',
      openInstagram: 'Instagram-da bax',
      backToTop: 'Yuxarı',
    },
    header: {
      navAria: 'Əsas naviqasiya',
      language: 'Dil',
      menuOpen: 'Menyunu aç',
      menuClose: 'Menyunu bağla',
      nav: [
        { href: '#gallery', label: 'Kolleksiya' },
        { href: '#services', label: 'Xidmətlər' },
        { href: '#contact', label: 'Əlaqə' },
      ],
    },
    hero: {
      eyebrow: 'Aleia Roza',
      title: 'Bakıda zərif gül mağazası',
      subtitle:
        'Buketlər, kompozisiyalar və dibçək gülləri ilə gündəlik sifarişlər və özəl anlar üçün zərif seçim.',
      supporting:
        'Aleia Roza Nərimanovda rahat sifariş, səliqəli təqdimat və təravətli floristika seçimi təqdim edir.',
      primaryAction: 'Sifariş et',
      secondaryAction: 'Instagram-da bax',
      whatsappMessage: 'Salam, Aleia Roza. Sifariş barədə məlumat almaq istəyirəm.',
      visualAlt: 'Aleia Roza üçün hero gül kompozisiyası',
      visualFallback: 'Hero flowers',
      visualHint: 'Buraya sonra /public/images/hero-flowers.jpg əlavə edə bilərsiniz.',
      sideTitle: 'Format',
      sideText: 'Minimal, rahat və estetik atmosferdə buketlər, kompozisiyalar və dibçək gülləri.',
      metaLeft: 'Buketlər, kompozisiyalar, dibçək gülləri',
      metaRightLabel: 'Ünvan',
      metaRight: 'Heydər Əliyev pr. 87/89, Bakı',
    },
    gallery: {
      eyebrow: 'Kolleksiya',
      title: 'Kolleksiyamız',
      description:
        'Mağazamızın ümumi zalı, bitki bölməsi, floristika sahəsi və digər görüntülərlə tanış olun.',
      button: 'Daha ətraflı Instagram-da',
      items: [
        {
          title: 'Ümumi zal',
          description: 'Mağazanın ümumi atmosferi və vitrin təqdimatı.',
        },
        {
          title: 'Dibçək gülləri',
          description: 'Ev və ofis üçün yaşıl seçimlər.',
        },
        {
          title: 'Floristika bölməsi',
          description: 'Buket və kompozisiya hazırlanma sahəsi.',
        },
        {
          title: 'Soyuducu bölməsi',
          description: 'Təravətli güllərin saxlandığı hissə.',
        },
        {
          title: 'Buketlər',
          description: 'Hədiyyə və xüsusi günlər üçün yığılmış buketlər.',
        },
        {
          title: 'Kompozisiyalar',
          description: 'Zövqlü təqdimat üçün floristika həlləri.',
        },
      ],
    },
    services: {
      eyebrow: 'Xidmətlər',
      title: 'Xidmətlər',
      description:
        'Gündəlik seçimlərdən xüsusi hadisələrə qədər mağazada əsas floristika istiqamətləri.',
      items: [
        {
          title: 'Buket hazırlanması',
          description: 'Məqsədə və təqdimat tərzinə uyğun buket yığımı.',
        },
        {
          title: 'Gül kompozisiyaları',
          description: 'Hədiyyə və interyer üçün zərif floristika həlləri.',
        },
        {
          title: 'Dibçək güllərinin satışı',
          description: 'Daha uzunömürlü yaşıl seçimlər və dekorativ bitkilər.',
        },
        {
          title: 'Hədiyyə üçün gül seçimləri',
          description: 'Ad günü, təşəkkür və diqqət jestləri üçün uyğun təkliflər.',
        },
        {
          title: 'Tədbirlər üçün güllər',
          description: 'Kiçik tədbirlər və xüsusi günlər üçün gül həlləri.',
        },
        {
          title: 'Fərdi sifarişlər',
          description: 'İstəyə uyğun kompozisiya və buket hazırlanması.',
        },
      ],
    },
    contact: {
      eyebrow: 'Əlaqə',
      title: 'Əlaqə və ünvan',
      description:
        'Əsas əlaqə məlumatları, sürətli sorğu forması və xəritə burada birləşdirilib.',
      phoneLabel: 'Telefon / WhatsApp',
      instagramLabel: 'Instagram',
      addressLabel: 'Ünvan',
      hoursLabel: 'İş saatları',
      formTitle: 'Qısa sorğu göndərin',
      formDescription:
        'Mesajınızı yazın, düyməyə klik etdikdə WhatsApp pəncərəsi hazır mətn ilə açılacaq.',
      nameLabel: 'Adınız',
      phoneFieldLabel: 'Telefon nömrəniz',
      messageLabel: 'Mesajınız',
      namePlaceholder: 'Adınızı daxil edin',
      phonePlaceholder: '+994 ...',
      messagePlaceholder: 'Nə ilə maraqlandığınızı qısa yazın',
      submit: 'WhatsApp ilə göndər',
      formIntro: 'Salam, Aleia Roza.',
    },
    map: {
      eyebrow: 'Xəritə',
      title: 'Mağazanın yerləşməsi',
      description:
        'Xəritəni böyüdün və ya marşrut üçün uyğun servisi seçin.',
      placeholderTitle: 'Google Maps iframe üçün hazır sahə',
      placeholderText:
        'Google Maps embed URL əlavə etdikdən sonra bu blok avtomatik interaktiv xəritə ilə əvəzlənəcək.',
      openGoogle: 'Google Maps aç',
      openTwoGis: '2GIS aç',
      helper: 'Ünvan: Heydər Əliyev prospekti 87/89, 1-ci mərtəbə, Nərimanov, Bakı',
    },
    footer: {
      label: 'Aleia Roza',
      copyright: 'Bütün hüquqlar qorunur.',
      policyLinks: ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'User Agreement'],
    },
  },
  ru: {
    meta: {
      title: 'Aleia Roza — цветочный магазин в Баку',
      description:
        'Букеты, композиции, комнатные растения и подарочные цветы в Баку. Aleia Roza, проспект Гейдара Алиева 87/89, Нариманов.',
      keywords:
        'Aleia Roza, цветочный магазин Баку, букет Баку, цветы Баку, Нариманов цветочный магазин',
      ogTitle: 'Aleia Roza — цветочный магазин в Баку',
      ogDescription:
        'Элегантный цветочный магазин в Баку с букетами, композициями и комнатными растениями.',
      ogLocale: 'ru_RU',
      ogImage: '/images/storefront.jpg',
    },
    common: {
      skipToContent: 'Перейти к содержанию',
      phone: '+994 51 684 8450',
      instagramHandle: '@aleia__roza',
      address: 'проспект Гейдара Алиева 87/89, 1 этаж, Нариманов, Баку',
      hours: 'Ежедневно 09:00–21:00',
      whatsappShort: 'WhatsApp',
      instagram: 'Instagram',
      phoneLabel: 'Телефон',
      openInstagram: 'Смотреть Instagram',
      backToTop: 'Наверх',
    },
    header: {
      navAria: 'Основная навигация',
      language: 'Язык',
      menuOpen: 'Открыть меню',
      menuClose: 'Закрыть меню',
      nav: [
        { href: '#gallery', label: 'Коллекция' },
        { href: '#services', label: 'Услуги' },
        { href: '#contact', label: 'Контакты' },
      ],
    },
    hero: {
      eyebrow: 'Aleia Roza',
      title: 'Элегантный цветочный магазин в Баку',
      subtitle:
        'Букеты, композиции и комнатные растения для повседневных заказов и особых моментов.',
      supporting:
        'Aleia Roza в Нариманове сочетает свежую флористику, аккуратную подачу и быстрый заказ через WhatsApp.',
      primaryAction: 'Заказать',
      secondaryAction: 'Смотреть Instagram',
      whatsappMessage: 'Здравствуйте, Aleia Roza. Хочу уточнить заказ.',
      visualAlt: 'Главный визуал цветочной композиции Aleia Roza',
      visualFallback: 'Hero flowers',
      visualHint: 'Позже можно добавить /public/images/hero-flowers.jpg.',
      sideTitle: 'Формат',
      sideText: 'Аккуратная атмосфера, букетные решения и растения для подарка, интерьера и важных событий.',
      metaLeft: 'Букеты, композиции, комнатные растения',
      metaRightLabel: 'Адрес',
      metaRight: 'пр. Гейдара Алиева 87/89, Баку',
    },
    gallery: {
      eyebrow: 'Коллекция',
      title: 'Наша коллекция',
      description:
        'Познакомьтесь с общим залом магазина, зоной растений, флористическим пространством и другими видами.',
      button: 'Подробнее в Instagram',
      items: [
        { title: 'Общий зал', description: 'Общая атмосфера магазина и витринная подача.' },
        { title: 'Комнатные растения', description: 'Зелёные решения для дома и офиса.' },
        { title: 'Флористическая зона', description: 'Пространство для сборки букетов и композиций.' },
        { title: 'Холодильная зона', description: 'Место, где хранятся свежие цветы.' },
        { title: 'Букеты', description: 'Собранные варианты для подарков и особых моментов.' },
        { title: 'Композиции', description: 'Элегантные флористические решения и оформление.' },
      ],
    },
    services: {
      eyebrow: 'Услуги',
      title: 'Услуги',
      description:
        'Коротко о том, что можно заказать или подобрать в магазине без лишней перегрузки.',
      items: [
        { title: 'Сборка букетов', description: 'Букеты под повод, стиль и формат подарка.' },
        { title: 'Цветочные композиции', description: 'Готовые и индивидуальные флористические решения.' },
        { title: 'Комнатные растения', description: 'Практичные зелёные варианты для интерьера.' },
        { title: 'Цветы для подарка', description: 'Подбор под день рождения, благодарность или жест внимания.' },
        { title: 'Цветы для мероприятий', description: 'Аккуратные решения для небольших событий.' },
        { title: 'Индивидуальные заказы', description: 'Сборка по вашему запросу и настроению.' },
      ],
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Контакты и адрес',
      description:
        'Контакты, короткая форма запроса и карта собраны в одном компактном блоке.',
      phoneLabel: 'Телефон / WhatsApp',
      instagramLabel: 'Instagram',
      addressLabel: 'Адрес',
      hoursLabel: 'График',
      formTitle: 'Отправить короткий запрос',
      formDescription:
        'После нажатия откроется WhatsApp с уже подготовленным сообщением.',
      nameLabel: 'Ваше имя',
      phoneFieldLabel: 'Ваш телефон',
      messageLabel: 'Ваше сообщение',
      namePlaceholder: 'Введите имя',
      phonePlaceholder: '+994 ...',
      messagePlaceholder: 'Кратко опишите запрос',
      submit: 'Отправить через WhatsApp',
      formIntro: 'Здравствуйте, Aleia Roza.',
    },
    map: {
      eyebrow: 'Карта',
      title: 'Расположение магазина',
      description:
        'Откройте маршрут в удобном сервисе или посмотрите точку прямо на карте.',
      placeholderTitle: 'Область для Google Maps iframe',
      placeholderText:
        'После добавления embed URL этот блок можно сразу заменить интерактивной картой.',
      openGoogle: 'Открыть Google Maps',
      openTwoGis: 'Открыть 2GIS',
      helper: 'Адрес: проспект Гейдара Алиева 87/89, 1 этаж, Нариманов, Баку',
    },
    footer: {
      label: 'Aleia Roza',
      copyright: 'Все права защищены.',
      policyLinks: ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'User Agreement'],
    },
  },
  en: {
    meta: {
      title: 'Aleia Roza — flower shop in Baku',
      description:
        'Bouquets, arrangements, indoor plants, and gift flowers in Baku. Aleia Roza, Heydar Aliyev Avenue 87/89, Narimanov.',
      keywords:
        'Aleia Roza, flower shop Baku, bouquet Baku, flowers Baku, Narimanov flower shop',
      ogTitle: 'Aleia Roza — flower shop in Baku',
      ogDescription:
        'An elegant flower shop in Baku with bouquets, arrangements, and indoor plants.',
      ogLocale: 'en_US',
      ogImage: '/images/storefront.jpg',
    },
    common: {
      skipToContent: 'Skip to content',
      phone: '+994 51 684 8450',
      instagramHandle: '@aleia__roza',
      address: 'Heydar Aliyev Avenue 87/89, 1st floor, Narimanov, Baku',
      hours: 'Daily 09:00–21:00',
      whatsappShort: 'WhatsApp',
      instagram: 'Instagram',
      phoneLabel: 'Phone',
      openInstagram: 'View Instagram',
      backToTop: 'Top',
    },
    header: {
      navAria: 'Main navigation',
      language: 'Language',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      nav: [
        { href: '#gallery', label: 'Collection' },
        { href: '#services', label: 'Services' },
        { href: '#contact', label: 'Contact' },
      ],
    },
    hero: {
      eyebrow: 'Aleia Roza',
      title: 'An elegant flower shop in Baku',
      subtitle:
        'Bouquets, arrangements, and indoor plants for everyday orders and special occasions.',
      supporting:
        'Aleia Roza in Narimanov brings together fresh floristry, clean presentation, and a fast WhatsApp ordering flow.',
      primaryAction: 'Order',
      secondaryAction: 'View Instagram',
      whatsappMessage: 'Hello, Aleia Roza. I would like to ask about an order.',
      visualAlt: 'Hero floral composition for Aleia Roza',
      visualFallback: 'Hero flowers',
      visualHint: 'You can later add /public/images/hero-flowers.jpg here.',
      sideTitle: 'Format',
      sideText: 'A calm aesthetic atmosphere with bouquets, arrangements, and plants for gifting and important occasions.',
      metaLeft: 'Bouquets, arrangements, indoor plants',
      metaRightLabel: 'Address',
      metaRight: '87/89 Heydar Aliyev Ave, Baku',
    },
    gallery: {
      eyebrow: 'Collection',
      title: 'Our collection',
      description:
        'Explore the main hall, plant area, floristry space, and other scenes from the shop.',
      button: 'See more on Instagram',
      items: [
        { title: 'Main hall', description: 'The overall store mood and visual presentation.' },
        { title: 'Indoor plants', description: 'Green options for homes and offices.' },
        { title: 'Floristry area', description: 'Where bouquets and arrangements come together.' },
        { title: 'Flower cooler', description: 'A dedicated area for fresh flower storage.' },
        { title: 'Bouquets', description: 'Gift-ready bouquets for special moments.' },
        { title: 'Arrangements', description: 'Elegant floral styling and compositions.' },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'Services',
      description:
        'A concise overview of the main floral directions available in the shop.',
      items: [
        { title: 'Bouquet making', description: 'Bouquets tailored to the occasion and presentation style.' },
        { title: 'Floral arrangements', description: 'Ready-made and custom floristry solutions.' },
        { title: 'Indoor plants', description: 'Green options for interiors and thoughtful gifts.' },
        { title: 'Gift flower selection', description: 'Suitable choices for birthdays, gratitude, and gestures.' },
        { title: 'Event flowers', description: 'Clean floral solutions for intimate events.' },
        { title: 'Custom requests', description: 'Personalized bouquet and arrangement preparation.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Contact and address',
      description:
        'Key contact details, a quick request form, and the map are combined in one section.',
      phoneLabel: 'Phone / WhatsApp',
      instagramLabel: 'Instagram',
      addressLabel: 'Address',
      hoursLabel: 'Working hours',
      formTitle: 'Send a quick request',
      formDescription:
        'Clicking the button opens WhatsApp with a prepared message.',
      nameLabel: 'Your name',
      phoneFieldLabel: 'Your phone number',
      messageLabel: 'Your message',
      namePlaceholder: 'Enter your name',
      phonePlaceholder: '+994 ...',
      messagePlaceholder: 'Briefly describe your request',
      submit: 'Send via WhatsApp',
      formIntro: 'Hello, Aleia Roza.',
    },
    map: {
      eyebrow: 'Map',
      title: 'Store location',
      description:
        'Open directions in your preferred service or view the location directly on the map.',
      placeholderTitle: 'Ready area for Google Maps iframe',
      placeholderText:
        'Once an embed URL is added, this block can be replaced with a live interactive map.',
      openGoogle: 'Open Google Maps',
      openTwoGis: 'Open 2GIS',
      helper: 'Address: Heydar Aliyev Avenue 87/89, 1st floor, Narimanov, Baku',
    },
    footer: {
      label: 'Aleia Roza',
      copyright: 'All rights reserved.',
      policyLinks: ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'User Agreement'],
    },
  },
}
