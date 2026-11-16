// Tout le contenu du site est ici : textes de l'interface et planning,
// en ukrainien (uk) et en anglais (en). Pour changer un horaire ou une
// activité, il suffit de modifier ce fichier.

import geneva from '../assets/photos/geneva.jpg'
import morges from '../assets/photos/morges.jpg'
import lausanne from '../assets/photos/lausanne.jpg'
import lavaux from '../assets/photos/lavaux.jpg'
import milan from '../assets/photos/milan.jpg'
import gruyeres from '../assets/photos/gruyeres.jpg'
import church from '../assets/photos/church.jpg'

export const ui = {
  uk: {
    pageTitle: 'Ласкаво просимо, Ольго!',
    place: 'Морж · Швейцарія · 17–23 листопада',
    welcome1: 'Ласкаво просимо,',
    welcome2: 'Ольго!',
    introRoute: 'Київ → Женева',
    countdownLabel: 'До приземлення',
    countdownUnits: ['дн', 'год', 'хв', 'с'],
    countdownDone: 'Ви вже у Швейцарії!',
    today: 'Сьогодні',
    introBtn: 'Приземлитися',
    introHint: 'Натисніть, щоб увійти',
    photoAlt: 'Ольга',
    moments: 'Наші моменти',
    momentsAlt: 'Спільне фото',
    month: 'лист.',
    arrivalLabel: 'Приїзд · вівторок',
    arrivalPlace: 'Зустрічаємо вас в аеропорту Женеви',
    scroll: 'Гортайте вниз',
    outro: 'Чекаємо на вас!',
    sign: 'З любов’ю — Катерина і Рубен',
    langLabel: 'Мова',
  },
  en: {
    pageTitle: 'Welcome, Olga!',
    place: 'Morges · Switzerland · 17–23 November',
    welcome1: 'Welcome,',
    welcome2: 'Olga!',
    introRoute: 'Kyiv → Geneva',
    countdownLabel: 'Landing in',
    countdownUnits: ['d', 'h', 'min', 's'],
    countdownDone: 'You are in Switzerland!',
    today: 'Today',
    introBtn: 'Land',
    introHint: 'Tap to enter',
    photoAlt: 'Olga',
    moments: 'Our moments',
    momentsAlt: 'Photo together',
    month: 'Nov',
    arrivalLabel: 'Arrival · Tuesday',
    arrivalPlace: 'We meet you at Geneva Airport',
    scroll: 'Scroll down',
    outro: 'We can’t wait to see you!',
    sign: 'With love — Kateryna & Ruben',
    langLabel: 'Language',
  },
}

// Atterrissage d'Olga à Genève (heure suisse) : cible du compte à rebours.
export const arrival = '2026-11-17T19:00:00+01:00'

// Un événement = { time, title, note? }
export const days = [
  {
    num: '17',
    color: '#FF5A4E',
    photo: geneva,
    photoPosition: '50% 54%',
    uk: {
      dow: 'Вт',
      date: 'Вівторок, 17 листопада',
      title: 'Приїзд',
      events: [
        { time: '19:00', title: 'Зустрічаємо вас в аеропорту Женеви' },
        { time: '20:00–22:00', title: 'Перша вечеря разом', note: 'У нас вдома' },
      ],
    },
    en: {
      dow: 'Tue',
      date: 'Tuesday, 17 November',
      title: 'Arrival',
      events: [
        { time: '19:00', title: 'We meet you at Geneva Airport' },
        { time: '20:00–22:00', title: 'First dinner together', note: 'At our place' },
      ],
    },
  },
  {
    num: '18',
    color: '#FF9A1F',
    photo: morges,
    photoPosition: '50% 40%',
    uk: {
      dow: 'Ср',
      date: 'Середа, 18 листопада',
      title: 'Морж і околиці',
      events: [
        { time: '10:00', title: 'У Катерини зустріч', note: 'Спокійний ранок' },
        { time: '12:00–14:00', title: 'Прогулянка з Льоліком', note: 'Гуляємо Моржем' },
        { time: 'Після обіду', title: 'Вільний час', note: 'Аутлет в Обонні або замок Грюєр' },
        { time: 'Вечір', title: 'Аперитив із Коралін' },
      ],
    },
    en: {
      dow: 'Wed',
      date: 'Wednesday, 18 November',
      title: 'Morges & around',
      events: [
        { time: '10:00', title: 'Kateryna has an appointment', note: 'A slow morning' },
        { time: '12:00–14:00', title: 'Walk with Liolik', note: 'Around Morges' },
        { time: 'Afternoon', title: 'Free time', note: 'Aubonne outlet or Gruyères castle' },
        { time: 'Evening', title: 'Apéro with Coraline' },
      ],
    },
  },
  {
    num: '19',
    color: '#FFD93F',
    photo: lausanne,
    photoPosition: '50% 58%',
    uk: {
      dow: 'Чт',
      date: 'Четвер, 19 листопада',
      title: 'Лозанна і родина',
      events: [
        { time: '12:00–14:00', title: 'Прогулянка з Льоліком', note: 'Усі разом' },
        { time: '14:45–16:45', title: 'Екскурсія Лозанною' },
        { time: '18:00–21:00', title: 'Сімейна вечеря', note: 'У батьків Рубена в Сен-Лежьє' },
      ],
    },
    en: {
      dow: 'Thu',
      date: 'Thursday, 19 November',
      title: 'Lausanne & family',
      events: [
        { time: '12:00–14:00', title: 'Walk with Liolik', note: 'All together' },
        { time: '14:45–16:45', title: 'Lausanne tour' },
        { time: '18:00–21:00', title: 'Family dinner', note: 'At Ruben’s parents’ in St-Légier' },
      ],
    },
  },
  {
    num: '20',
    color: '#A8E63D',
    photo: lavaux,
    photoPosition: '50% 65%',
    uk: {
      dow: 'Пт',
      date: 'П’ятниця, 20 листопада',
      title: 'Лаво і вино',
      events: [
        { time: '12:00–14:00', title: 'Прогулянка з Льоліком' },
        { time: '15:00–17:00', title: 'Лаво: винна екскурсія', note: 'У гостях у Тані' },
        { time: '18:00+', title: 'Вечір і ночівля у подруги', note: 'У мами Саші в Сен-Лежьє' },
      ],
    },
    en: {
      dow: 'Fri',
      date: 'Friday, 20 November',
      title: 'Lavaux & wine',
      events: [
        { time: '12:00–14:00', title: 'Walk with Liolik' },
        { time: '15:00–17:00', title: 'Lavaux: wine tour', note: 'Visiting Tanja' },
        {
          time: '18:00+',
          title: 'Evening and overnight at your friend’s',
          note: 'Sasha’s mom, in St-Légier',
        },
      ],
    },
  },
  {
    num: '21',
    color: '#2ED9C3',
    photo: milan,
    photoPosition: '50% 42%',
    uk: {
      dow: 'Сб',
      date: 'Субота, 21 листопада',
      title: 'Італія і Монтре',
      events: [
        {
          time: 'Удень',
          title: 'Їдемо на шопінг до Італії',
          note: 'Разом із Катериною та Рубеном',
        },
        {
          time: 'Дорогою назад',
          title: 'Різдвяний ярмарок у Монтре',
          note: 'Зупинка дорогою до Сен-Лежьє',
        },
        { time: 'Ніч', title: 'Ночуємо в Сен-Лежьє', note: 'У домі Рубена' },
      ],
    },
    en: {
      dow: 'Sat',
      date: 'Saturday, 21 November',
      title: 'Italy & Montreux',
      events: [
        {
          time: 'Daytime',
          title: 'Shopping trip to Italy',
          note: 'Together with Kateryna and Ruben',
        },
        {
          time: 'On the way back',
          title: 'Montreux Christmas market',
          note: 'A stop on the way to St-Légier',
        },
        { time: 'Night', title: 'Sleepover in St-Légier', note: 'At Ruben’s house' },
      ],
    },
  },
  {
    num: '22',
    color: '#5BB8FF',
    photo: church,
    uk: {
      dow: 'Нд',
      date: 'Неділя, 22 листопада',
      title: 'Неділя разом',
      events: [
        { time: '09:45', title: 'Церква' },
        { time: '12:00', title: 'Обід із друзями', note: 'У Блоне' },
        {
          time: '15:00–20:00',
          title: 'Термальні купальні Лаве-ле-Бен',
          note: 'Les Bains de Lavey',
        },
      ],
    },
    en: {
      dow: 'Sun',
      date: 'Sunday, 22 November',
      title: 'Sunday together',
      events: [
        { time: '09:45', title: 'Church' },
        { time: '12:00', title: 'Lunch with friends', note: 'In Blonay' },
        { time: '15:00–20:00', title: 'Les Bains de Lavey', note: 'Thermal baths' },
      ],
    },
  },
  {
    num: '23',
    color: '#C9A0FF',
    photo: gruyeres,
    photoPosition: '47% 50%',
    uk: {
      dow: 'Пн',
      date: 'Понеділок, 23 листопада',
      title: 'Останній день',
      events: [
        { time: '12:00–14:00', title: 'Прогулянка з Льоліком' },
        { time: 'Після обіду', title: 'Замок Грюєр або аутлет в Обонні' },
        { time: 'Вечір', title: 'Прощальна вечеря', note: 'З Рубеном і сусідами по квартирі' },
      ],
    },
    en: {
      dow: 'Mon',
      date: 'Monday, 23 November',
      title: 'Last day',
      events: [
        { time: '12:00–14:00', title: 'Walk with Liolik' },
        { time: 'Afternoon', title: 'Gruyères castle or Aubonne outlet' },
        { time: 'Evening', title: 'Farewell dinner', note: 'With Ruben and the flatmates' },
      ],
    },
  },
]
