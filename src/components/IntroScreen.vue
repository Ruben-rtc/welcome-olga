<script setup>
import { ref } from 'vue'
import CountdownTimer from './CountdownTimer.vue'

defineProps({
  t: { type: Object, required: true },
  arrival: { type: String, required: true },
})
const emit = defineEmits(['landing', 'done'])

// Écran d'entrée : on est dans les nuages, on touche l'écran pour « atterrir ».
// Au clic, les nuages s'écartent, l'avion part, puis l'écran disparaît.
const leaving = ref(false)

function enter() {
  if (leaving.value) return
  leaving.value = true
  emit('landing')
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  setTimeout(() => emit('done'), reduced ? 250 : 1500)
}

// side : de quel côté le nuage sort ; drift : durée du va-et-vient.
const clouds = [
  { top: '6%', left: '-12%', width: '62%', side: 'left', drift: '9s', opacity: 0.95 },
  { top: '14%', left: '58%', width: '54%', side: 'right', drift: '11s', opacity: 0.85 },
  { top: '30%', left: '-22%', width: '48%', side: 'left', drift: '13s', opacity: 0.8 },
  { top: '58%', left: '62%', width: '58%', side: 'right', drift: '10s', opacity: 0.9 },
  { top: '70%', left: '-18%', width: '78%', side: 'left', drift: '12s', opacity: 1 },
  { top: '80%', left: '34%', width: '92%', side: 'right', drift: '14s', opacity: 1 },
  { top: '88%', left: '-30%', width: '100%', side: 'left', drift: '16s', opacity: 1 },
]
</script>

<template>
  <div class="intro" :class="{ 'intro--leaving': leaving }" @click="enter">
    <div
      v-for="(cloud, i) in clouds"
      :key="i"
      class="cloud"
      :class="`cloud--${cloud.side}`"
      :style="{ top: cloud.top, left: cloud.left, width: cloud.width, opacity: cloud.opacity }"
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 100" :style="{ animationDuration: cloud.drift }">
        <g fill="#fff">
          <circle cx="50" cy="66" r="30" />
          <circle cx="86" cy="46" r="38" />
          <circle cx="126" cy="56" r="32" />
          <circle cx="156" cy="70" r="24" />
          <rect x="50" y="60" width="106" height="36" rx="18" />
        </g>
      </svg>
    </div>

    <div class="intro__center">
      <p class="intro__route">{{ t.introRoute }}</p>

      <svg class="plane" viewBox="0 0 120 60" aria-hidden="true">
        <g fill="#fff" stroke="#2a0f4a" stroke-width="3" stroke-linejoin="round">
          <path d="M14 26 L8 6 H20 L34 24 Z" />
          <path d="M10 32 Q10 24 22 24 H88 Q108 24 113 32 Q108 39 88 39 H22 Q10 39 10 32 Z" />
          <path d="M54 34 L40 57 H53 L76 34 Z" />
        </g>
        <g fill="#2a0f4a">
          <circle cx="50" cy="30" r="2.2" />
          <circle cx="60" cy="30" r="2.2" />
          <circle cx="70" cy="30" r="2.2" />
          <circle cx="80" cy="30" r="2.2" />
          <path d="M94 27 H102 Q105 29 106 31 H94 Z" />
        </g>
      </svg>

      <div class="intro__countdown">
        <CountdownTimer
          :target="arrival"
          :label="t.countdownLabel"
          :units="t.countdownUnits"
          :done-text="t.countdownDone"
        />
      </div>

      <button type="button" class="intro__btn" @click.stop="enter">{{ t.introBtn }}</button>
      <p class="intro__hint">{{ t.introHint }}</p>
    </div>
  </div>
</template>

<style scoped>
.intro {
  position: fixed;
  inset: 0;
  z-index: 20;
  overflow: hidden;
  cursor: pointer;
  /* Ciel : bleu en haut, rose bonbon vers l'horizon. */
  background: linear-gradient(180deg, #3fa9ff 0%, #8fd3ff 45%, #ffc4e3 100%);
  transition: opacity 0.6s ease 0.9s;
}
.intro--leaving {
  opacity: 0;
  pointer-events: none;
}

.cloud {
  position: absolute;
  transition: transform 1.3s cubic-bezier(0.5, 0, 0.8, 0.4);
}
.cloud svg {
  display: block;
  width: 100%;
  animation: drift ease-in-out infinite alternate;
}
.intro--leaving .cloud--left {
  transform: translateX(-140vw);
}
.intro--leaving .cloud--right {
  transform: translateX(140vw);
}
@keyframes drift {
  from {
    transform: translateX(-5%);
  }
  to {
    transform: translateX(5%);
  }
}

.intro__center {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 24px;
  text-align: center;
  transition: opacity 0.4s ease;
}
.intro__route {
  margin: 0;
  font-weight: 900;
  font-size: clamp(26px, 8vw, 38px);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 3px 3px 0 var(--plum);
}
.plane {
  width: min(58vw, 260px);
  transform: rotate(-6deg);
  animation: fly 3s ease-in-out infinite;
  filter: drop-shadow(5px 6px 0 rgba(42, 15, 74, 0.25));
  transition: translate 1.2s cubic-bezier(0.6, 0, 0.9, 0.5);
}
@keyframes fly {
  50% {
    transform: rotate(-3deg) translateY(-12px);
  }
}
.intro--leaving .plane {
  translate: 130vw 20vh;
}
.intro__btn {
  padding: 16px 34px;
  border: 0;
  border-radius: 999px;
  background: var(--yellow);
  color: var(--plum);
  font: 900 20px var(--font);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 5px 5px 0 var(--plum);
  animation: pulse 1.8s ease-in-out infinite;
}
@keyframes pulse {
  50% {
    transform: scale(1.06);
  }
}
.intro__hint {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: var(--plum);
}
.intro--leaving .intro__countdown,
.intro--leaving .intro__btn,
.intro--leaving .intro__hint,
.intro--leaving .intro__route {
  opacity: 0;
  transition: opacity 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
  .intro {
    transition: opacity 0.2s ease;
  }
  .cloud,
  .plane {
    transition: none;
  }
  .cloud svg,
  .plane,
  .intro__btn {
    animation: none;
  }
  .intro--leaving .cloud--left,
  .intro--leaving .cloud--right {
    transform: none;
  }
  .intro--leaving .plane {
    translate: none;
  }
}
</style>
