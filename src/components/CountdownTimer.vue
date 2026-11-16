<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

// Compte à rebours jusqu'à l'atterrissage. Une fois l'heure passée, affiche
// `doneText` s'il est fourni, sinon plus rien.
const props = defineProps({
  target: { type: String, required: true }, // date ISO avec fuseau
  label: { type: String, required: true },
  units: { type: Array, required: true }, // [jours, heures, minutes, secondes]
  doneText: { type: String, default: '' },
})

const targetMs = new Date(props.target).getTime()
const now = ref(Date.now())
let timer

onMounted(() => {
  timer = setInterval(() => (now.value = Date.now()), 1000)
})
onUnmounted(() => clearInterval(timer))

const left = computed(() => Math.max(0, Math.floor((targetMs - now.value) / 1000)))
const done = computed(() => left.value === 0)

const parts = computed(() => {
  const s = left.value
  const all = [
    { value: Math.floor(s / 86400), unit: props.units[0] },
    { value: Math.floor((s % 86400) / 3600), unit: props.units[1] },
    { value: Math.floor((s % 3600) / 60), unit: props.units[2] },
    { value: s % 60, unit: props.units[3] },
  ]
  // On n'affiche les jours que s'il en reste.
  return all[0].value > 0 ? all : all.slice(1)
})

const pad = (n) => String(n).padStart(2, '0')
</script>

<template>
  <p v-if="done && doneText" class="countdown__done">{{ doneText }}</p>
  <div v-else-if="!done" class="countdown" role="timer">
    <span class="countdown__label">{{ label }}</span>
    <div class="countdown__tiles">
      <div v-for="part in parts" :key="part.unit" class="countdown__tile">
        <span class="countdown__value">{{ pad(part.value) }}</span>
        <span class="countdown__unit">{{ part.unit }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.countdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.countdown__label {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 2px 2px 0 var(--plum);
}
.countdown__tiles {
  display: flex;
  gap: 8px;
}
.countdown__tile {
  min-width: 64px;
  padding: 10px 8px 8px;
  border-radius: 16px;
  background: #fff;
  color: var(--plum);
  box-shadow: 4px 4px 0 var(--plum);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.countdown__value {
  font-weight: 900;
  font-size: 28px;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.countdown__unit {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.countdown__done {
  margin: 0;
  font-weight: 900;
  font-size: 22px;
  color: #fff;
  text-shadow: 3px 3px 0 var(--plum);
}
</style>
