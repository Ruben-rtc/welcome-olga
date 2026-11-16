<script setup>
import narcisses from '../assets/photos/narcisses.jpg'
import { photoCredits } from '../data/content.js'

defineProps({
  t: { type: Object, required: true },
  days: { type: Array, required: true },
})
</script>

<template>
  <section class="outro">
    <div class="outro__photo">
      <img class="zoom" :src="narcisses" alt="" loading="lazy" />
    </div>
    <div class="outro__body">
      <h2 v-reveal class="outro__title">{{ t.outro }}</h2>
      <p class="outro__sign">{{ t.sign }}</p>
      <div class="rainbow" aria-hidden="true">
        <span v-for="day in days" :key="day.num" :style="{ background: day.color }"></span>
      </div>
      <p class="outro__credits">{{ photoCredits }}</p>
    </div>
  </section>
</template>

<style scoped>
.outro {
  background: var(--plum);
  color: #fff;
}
.outro__photo {
  height: 320px;
  overflow: hidden;
}
.outro__photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.outro__body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 36px 24px 40px;
}
.outro__title {
  margin: 0;
  font-weight: 900;
  font-size: 40px;
  line-height: 1.05;
  text-transform: uppercase;
  text-shadow: var(--glow);
}
.outro__sign {
  margin: 0;
  font-size: 17px;
  line-height: 1.5;
  color: #f1eaff;
}
.rainbow {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 6px;
}
.rainbow span {
  height: 8px;
  border-radius: 999px;
}
.outro__credits {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: #d9ccf5;
}
</style>
