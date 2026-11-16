// Tout le contenu du site est ici : textes de l'interface et planning,
// en ukrainien (uk) et en anglais (en). Pour changer un horaire ou une
// activité, il suffit de modifier ce fichier.

import geneva from '../assets/photos/geneva.jpg'
import leman from '../assets/photos/leman.jpg'
import lausanne from '../assets/photos/lausanne.jpg'
import lavaux from '../assets/photos/lavaux.jpg'
import italy from '../assets/photos/italy.jpg'
import montreuxNoel from '../assets/photos/montreux-noel.jpg'
import montreux from '../assets/photos/montreux.jpg'

export const ui = {
  uk: {
    pageTitle: 'Ласкаво просимо, Ольго!',
    place: 'Морж · Швейцарія · 17–23 листопада',
    welcome1: 'Ласкаво просимо,',
    welcome2: 'Ольго!',
    intro:
      'Нарешті разом! Ми підготували для вас цілий тиждень у Швейцарії. Гортайте вниз — день за днем.',
    photoAlt: 'Спільне фото на терасі',
    month: 'лист.',
    arrivalLabel: 'Приїзд · вівторок',
    arrivalPlace: 'Зустрічаємо вас в аеропорту Женеви',
    scroll: 'Гортайте вниз',
    outro: 'Чекаємо на вас!',
    sign: 'З любов’ю — Катерина, Рубен і Льолік',
    langLabel: 'Мова',
  },
  en: {
    pageTitle: 'Welcome, Olga!',
    place: 'Morges · Switzerland · 17–23 November',
    welcome1: 'Welcome,',
    welcome2: 'Olga!',
    intro:
      'Together at last! We have planned a whole week in Switzerland for you. Scroll down — day by day.',
    photoAlt: 'Photo together on the terrace',
    month: 'Nov',
    arrivalLabel: 'Arrival · Tuesday',
    arrivalPlace: 'We meet you at Geneva Airport',
    scroll: 'Scroll down',
    outro: 'We can’t wait to see you!',
    sign: 'With love — Kateryna, Ruben & Liolik',
    langLabel: 'Language',
  },
}

// Un événement = { time, title, note? }
export const days = [
  {
    num: '17',
    color: '#FF2E93',
    photo: geneva,
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
    color: '#FF8A1F',
    photo: leman,
    uk: {
      dow: 'Ср',
      date: 'Середа, 18 листопада',
      title: 'Морж і околиці',
      events: [
        { time: '10:00', title: 'У Катерини зустріч', note: 'Спокійний ранок' },
        { time: '12:00–14:00', title: 'Прогулянка з Льоліком', note: 'Гуляємо Моржем' },
        { time: 'Після обіду', title: 'Вільний час', note: 'Аутлет в Обонні або замок Грюєр' },
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
      ],
    },
  },
  {
    num: '19',
    color: '#FFD23F',
    photo: lausanne,
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
    color: '#3DDC84',
    photo: lavaux,
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
    color: '#19C2D1',
    photo: italy,
    uk: {
      dow: 'Сб',
      date: 'Субота, 21 листопада',
      title: 'Італія',
      events: [
        {
          time: 'Увесь день',
          title: 'Їдемо на шопінг до Італії',
          note: 'Разом із Катериною та Рубеном',
        },
      ],
    },
    en: {
      dow: 'Sat',
      date: 'Saturday, 21 November',
      title: 'Italy',
      events: [
        {
          time: 'All day',
          title: 'Shopping trip to Italy',
          note: 'Together with Kateryna and Ruben',
        },
      ],
    },
  },
  {
    num: '22',
    color: '#6FB6FF',
    photo: montreuxNoel,
    photoPosition: '50% 60%',
    uk: {
      dow: 'Нд',
      date: 'Неділя, 22 листопада',
      title: 'Неділя разом',
      events: [
        { time: '1', title: 'Церква' },
        { time: '2', title: 'Термальні купальні Лаве-ле-Бен', note: 'Les Bains de Lavey' },
        { time: '3', title: 'Різдвяний ярмарок у Монтре' },
      ],
    },
    en: {
      dow: 'Sun',
      date: 'Sunday, 22 November',
      title: 'Sunday together',
      events: [
        { time: '1', title: 'Church' },
        { time: '2', title: 'Les Bains de Lavey', note: 'Thermal baths' },
        { time: '3', title: 'Montreux Christmas market' },
      ],
    },
  },
  {
    num: '23',
    color: '#C9B3FF',
    photo: montreux,
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

export const photoCredits =
  'Photos: Wikimedia Commons, CC BY-SA 4.0 — Sdnegel, KaiBorgeest, Gzzz, Pauledge1978, Steffen Schmitz, Kerstin Sonnekalb (WMCH), Maude Rion, Giles Laurent.'
