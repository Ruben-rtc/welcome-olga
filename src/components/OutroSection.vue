<script setup>
import hug from '../assets/photos/hug.jpg'

defineProps({
  t: { type: Object, required: true },
  days: { type: Array, required: true },
})
</script>

<template>
  <section class="outro">
    <div v-inview class="outro__photo">
      <img class="zoom" :src="hug" alt="" loading="lazy" />
    </div>
    <div class="outro__body">
      <h2 v-reveal class="outro__title">{{ t.outro }}</h2>
      <p class="outro__sign">{{ t.sign }}</p>
    </div>
  </section>
</template>

<style scoped>
.outro {
  background: linear-gradient(180deg, var(--pink) 0%, #ff9a1f 100%);
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
  object-position: 60% 30%;
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
  color: #fff;
  font-weight: 700;
}
</style>
