<script setup>
import familyPhoto from '../assets/photos/family.jpg'

defineProps({
  t: { type: Object, required: true },
  days: { type: Array, required: true },
  lang: { type: String, required: true },
})
</script>

<template>
  <section class="hero">
    <p class="hero__place">{{ t.place }}</p>

    <div class="hero__photo">
      <img class="zoom" :src="familyPhoto" :alt="t.photoAlt" />
    </div>

    <h1 class="hero__title">
      {{ t.welcome1 }}<br />
      <span class="hero__name">{{ t.welcome2 }}</span>
    </h1>
    <p class="hero__intro">{{ t.intro }}</p>

    <div class="arrival">
      <div class="arrival__date">
        <span class="arrival__day">17</span>
        <span class="arrival__month">{{ t.month }}</span>
      </div>
      <div class="arrival__text">
        <span class="arrival__label">{{ t.arrivalLabel }}</span>
        <span class="arrival__time">19:00</span>
        <span>{{ t.arrivalPlace }}</span>
      </div>
    </div>

    <nav class="chips" :aria-label="t.place">
      <a
        v-for="day in days"
        :key="day.num"
        class="chip"
        :href="`#day-${day.num}`"
        :style="{ background: day.color }"
        :aria-label="day[lang].date"
      >
        <span class="chip__dow">{{ day[lang].dow }}</span>
        <span class="chip__num">{{ day.num }}</span>
      </a>
    </nav>

    <div class="hero__scroll">
      <span>{{ t.scroll }}</span>
      <svg class="bob" aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" fill="none"
        stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 5 V22 M7 15 L14 22 L21 15" />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 24px 24px 36px;
  background: var(--purple);
  color: #fff;
}
.hero__place {
  margin: 0;
  padding-top: 14px;
  max-width: 60%;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #e6dbff;
}
.hero__photo {
  height: 300px;
  overflow: hidden;
  border: 4px solid #fff;
  border-radius: 28px;
}
.hero__photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 12%;
}
.hero__title {
  margin: 0;
  font-weight: 900;
  font-size: clamp(38px, 11.5vw, 54px);
  line-height: 1.02;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  text-shadow: var(--glow);
}
.hero__name {
  color: var(--yellow);
}
.hero__intro {
  margin: 0;
  font-size: 17px;
  line-height: 1.5;
  color: #f1eaff;
}

.arrival {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px;
  border-radius: 22px;
  background: #fff;
  color: var(--plum);
}
.arrival__date {
  flex-shrink: 0;
  width: 76px;
  height: 76px;
  border-radius: 16px;
  background: var(--pink);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.arrival__day {
  font-weight: 900;
  font-size: 30px;
  line-height: 1;
}
.arrival__month {
  margin-top: 4px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.arrival__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  font-size: 15px;
  line-height: 1.3;
}
.arrival__label {
  font-size: 13px;
  font-weight: 700;
  color: var(--purple);
}
.arrival__time {
  font-weight: 900;
  font-size: 22px;
}

.chips {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 6px;
}
.chip {
  height: 60px;
  border-radius: 16px;
  color: var(--plum);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
}
.chip__dow {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
}
.chip__num {
  font-size: 18px;
  font-weight: 900;
}

.hero__scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
  color: var(--yellow);
}
</style>
