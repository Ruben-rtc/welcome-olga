<script setup>
// Pluie de confettis aux couleurs bonbon, déclenchée à l'atterrissage.
const colors = ['#ff2e93', '#ff9a1f', '#ffd93f', '#a8e63d', '#2ed9c3', '#5bb8ff', '#c9a0ff', '#ffffff']
const rand = (min, max) => min + Math.random() * (max - min)

const pieces = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  style: {
    left: `${rand(0, 100)}%`,
    width: `${rand(7, 13)}px`,
    height: `${rand(10, 18)}px`,
    background: colors[i % colors.length],
    borderRadius: i % 4 === 0 ? '50%' : '2px',
    animationDelay: `${rand(0, 1.1)}s`,
    animationDuration: `${rand(2.2, 3.6)}s`,
    '--drift': `${rand(-90, 90)}px`,
    '--spin': `${rand(360, 1080)}deg`,
  },
}))
</script>

<template>
  <div class="confetti" aria-hidden="true">
    <span v-for="piece in pieces" :key="piece.id" class="confetti__piece" :style="piece.style"></span>
  </div>
</template>

<style scoped>
.confetti {
  position: fixed;
  inset: 0;
  z-index: 25;
  overflow: hidden;
  pointer-events: none;
}
.confetti__piece {
  position: absolute;
  top: -24px;
  animation: confetti-fall linear both;
}
@keyframes confetti-fall {
  to {
    transform: translate(var(--drift), 110vh) rotate(var(--spin));
  }
}
@media (prefers-reduced-motion: reduce) {
  .confetti {
    display: none;
  }
}
</style>
