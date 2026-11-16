<script setup>
import { computed, nextTick, onMounted, ref, watchEffect } from 'vue'
import { ui, days, arrival } from './data/content.js'
import IntroScreen from './components/IntroScreen.vue'
import ConfettiBurst from './components/ConfettiBurst.vue'
import LangToggle from './components/LangToggle.vue'
import HeroSection from './components/HeroSection.vue'
import DaySection from './components/DaySection.vue'
import MomentsSection from './components/MomentsSection.vue'
import OutroSection from './components/OutroSection.vue'

const STORAGE_KEY = 'welcome-olga-lang'

function readSavedLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'en' || saved === 'uk' ? saved : 'uk'
  } catch {
    return 'uk'
  }
}

const lang = ref(readSavedLang())
const t = computed(() => ui[lang.value])

// Écran d'entrée dans les nuages : la page ne défile pas tant qu'on n'est pas « entré ».
// Il s'affiche à chaque visite jusqu'à l'atterrissage, puis seulement si on ne l'a
// encore jamais vu ; ajouter ?intro à l'adresse pour le revoir.
const INTRO_KEY = 'welcome-olga-entered'
function introAlreadySeen() {
  try {
    if (new URLSearchParams(location.search).has('intro')) return false
    if (Date.now() < new Date(arrival).getTime()) return false
    return localStorage.getItem(INTRO_KEY) === '1'
  } catch {
    return false
  }
}
const returning = introAlreadySeen()
const entered = ref(returning)
watchEffect(() => {
  document.body.style.overflow = entered.value ? '' : 'hidden'
})

// Au clic sur « atterrir » : confettis, et on retient que l'entrée a été vue.
// `landed` lance l'apparition en cascade du haut de page.
const landed = ref(returning)
const confetti = ref(false)
function onLanding() {
  landed.value = true
  confetti.value = true
  setTimeout(() => (confetti.value = false), 5000)
  try {
    localStorage.setItem(INTRO_KEY, '1')
  } catch {
    // stockage indisponible : l'entrée reviendra simplement à la prochaine visite
  }
}

// Jour en cours (heure suisse), s'il fait partie de la semaine : '18', '19'… sinon null.
function findToday() {
  const iso = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Zurich',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())
  if (!iso.startsWith('2026-11-')) return null
  const num = iso.slice(8)
  return days.some((day) => day.num === num) ? num : null
}
const today = findToday()

// Visites suivantes pendant la semaine : on ouvre directement sur le jour en cours.
onMounted(() => {
  if (returning && today && today !== days[0].num && !location.hash) {
    nextTick(() => document.getElementById(`day-${today}`)?.scrollIntoView())
  }
})

// Garde <html lang>, le titre de l'onglet et le choix de langue à jour.
watchEffect(() => {
  document.documentElement.lang = lang.value
  document.title = t.value.pageTitle
  try {
    localStorage.setItem(STORAGE_KEY, lang.value)
  } catch {
    // stockage indisponible (navigation privée) : pas grave
  }
})
</script>

<template>
  <main
    class="page"
    :class="{ 'page--landed': landed }"
    :style="{ '--hero-delay': returning ? '0s' : '0.85s' }"
  >
    <IntroScreen
      v-if="!entered"
      :t="t"
      :arrival="arrival"
      @landing="onLanding"
      @done="entered = true"
    />
    <ConfettiBurst v-if="confetti" />
    <LangToggle v-model="lang" :label="t.langLabel" />
    <HeroSection :t="t" :days="days" :lang="lang" :today="today" :arrival="arrival" />
    <!-- Chaque jour fond vers la couleur du jour suivant : la page forme un seul long dégradé. -->
    <DaySection
      v-for="(day, i) in days"
      :key="day.num"
      :day="day"
      :next-color="days[i + 1]?.color ?? '#C9A0FF'"
      :is-today="day.num === today"
      :today-label="t.today"
      :lang="lang"
    />
    <MomentsSection :t="t" />
    <OutroSection :t="t" :days="days" />
  </main>
</template>
