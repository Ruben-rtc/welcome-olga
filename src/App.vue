<script setup>
import { computed, ref, watchEffect } from 'vue'
import { ui, days } from './data/content.js'
import LangToggle from './components/LangToggle.vue'
import HeroSection from './components/HeroSection.vue'
import DaySection from './components/DaySection.vue'
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
  <main class="page">
    <LangToggle v-model="lang" :label="t.langLabel" />
    <HeroSection :t="t" :days="days" :lang="lang" />
    <DaySection v-for="day in days" :key="day.num" :day="day" :lang="lang" />
    <OutroSection :t="t" :days="days" />
  </main>
</template>
