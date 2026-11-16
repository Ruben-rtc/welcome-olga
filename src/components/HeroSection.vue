<script setup>
import olgaPhoto from '../assets/photos/olga.jpg'
import CountdownTimer from './CountdownTimer.vue'

defineProps({
  t: { type: Object, required: true },
  days: { type: Array, required: true },
  lang: { type: String, required: true },
  today: { type: String, default: null },
  arrival: { type: String, required: true },
})
</script>

<template>
  <section class="hero">
    <p class="hero__place">{{ t.place }}</p>

    <div v-inview class="hero__photo">
      <img class="zoom" :src="olgaPhoto" :alt="t.photoAlt" fetchpriority="high" />
    </div>

    <!-- Titre défilant sur toute la largeur.
         Le texte lu par les lecteurs d'écran est dans .sr-only ; la version
         fixe (.hero__static) remplace le défilement si les animations sont réduites. -->
    <h1 class="hero__title">
      <span class="sr-only">{{ t.welcome1 }} {{ t.welcome2 }}</span>

      <span class="hero__static" aria-hidden="true">
        {{ t.welcome1 }}<br />
        <span class="hero__name">{{ t.welcome2 }}</span>
      </span>

      <span class="marquee" aria-hidden="true">
        <span class="marquee__track">
          <span
            v-for="n in 4"
            :key="n"
            class="marquee__item"
            :class="{ 'marquee__item--outline': n % 2 === 0 }"
          >
            {{ t.welcome1 }} {{ t.welcome2 }}
            <span class="marquee__star">✦</span>
          </span>
        </span>
      </span>

    </h1>

    <CountdownTimer :target="arrival" :label="t.countdownLabel" :units="t.countdownUnits" />

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
        :class="{ 'chip--today': day.num === today }"
        :aria-current="day.num === today ? 'date' : undefined"
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
  /* Rose bonbon en haut, puis fondu vers le rouge-corail du premier jour. */
  background: linear-gradient(180deg, var(--pink) 0%, #ff4470 60%, #ff5a4e 100%);
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
  color: #fff;
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
  object-position: 50% 30%;
}
.hero__title {
  /* Pleine largeur : annule la marge intérieure du hero. */
  margin: 0 -24px;
  font-weight: 900;
  font-size: clamp(38px, 11.5vw, 54px);
  line-height: 1.02;
  letter-spacing: 0.01em;
  text-transform: uppercase;
}
.hero__name {
  color: var(--yellow);
}
.hero__static {
  display: none;
  padding: 0 24px;
  text-shadow: var(--glow);
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

/* ---------- Titre défilant ---------- */
.marquee {
  display: block;
  overflow: hidden;
  padding: 14px 0 12px;
  white-space: nowrap;
}
.marquee__track {
  display: inline-flex;
  width: max-content;
  animation: marquee 22s linear infinite;
  will-change: transform;
}
.marquee__item {
  flex-shrink: 0;
  padding-right: 0.35em;
  font-size: clamp(46px, 14vw, 66px);
  text-shadow: var(--glow);
}
.marquee__item--outline {
  color: transparent;
  -webkit-text-stroke: 2px #fff;
  text-shadow: none;
}
.marquee__star {
  color: var(--yellow);
  -webkit-text-stroke: 0;
}
/* Chaque piste contient deux moitiés identiques : -50 % = boucle sans couture. */
@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}
@media (prefers-reduced-motion: reduce) {
  .marquee {
    display: none;
  }
  .hero__static {
    display: block;
  }
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
  color: var(--plum);
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
  border: 2px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
}
/* Le jour en cours ressort : cerclé et légèrement soulevé. */
.chip--today {
  border-color: var(--plum);
  box-shadow: 0 0 0 3px #fff;
  transform: translateY(-5px);
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
  color: #fff;
}
</style>
