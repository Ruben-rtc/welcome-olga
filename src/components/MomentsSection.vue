<script setup>
import trio from '../assets/photos/trio.jpg'
import duo from '../assets/photos/duo.jpg'
import family from '../assets/photos/family.jpg'

defineProps({ t: { type: Object, required: true } })

// Trois souvenirs, posés comme des polaroïds légèrement de travers.
const photos = [
  { src: trio, tilt: '-3deg', side: 'left' },
  { src: duo, tilt: '2.5deg', side: 'right' },
  { src: family, tilt: '-2deg', side: 'left' },
]
</script>

<template>
  <section class="moments">
    <h2 class="moments__title">{{ t.moments }}</h2>
    <div
      v-for="photo in photos"
      :key="photo.src"
      v-reveal
      class="moments__item"
      :class="`moments__item--${photo.side}`"
    >
      <figure class="polaroid" :style="{ '--tilt': photo.tilt }">
        <img :src="photo.src" :alt="t.momentsAlt" loading="lazy" />
      </figure>
    </div>
  </section>
</template>

<style scoped>
.moments {
  display: flex;
  flex-direction: column;
  padding: 52px 24px 64px;
  background: linear-gradient(180deg, #c9a0ff 0%, #ff6fb5 55%, var(--pink) 100%);
  color: #fff;
}
.moments__title {
  margin: 0 0 28px;
  font-weight: 900;
  font-size: 36px;
  line-height: 1.05;
  text-transform: uppercase;
  text-shadow: 4px 4px 0 var(--plum);
}
.moments__item {
  width: 84%;
}
.moments__item + .moments__item {
  margin-top: -18px;
}
.moments__item--right {
  align-self: flex-end;
}
.polaroid {
  margin: 0;
  padding: 10px 10px 34px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 8px 8px 0 var(--plum);
  /* Avant l'apparition : plus grand et très penché, comme lâché sur la table. */
  transform: rotate(calc(var(--tilt) * -5)) scale(1.18);
  transition: transform 0.8s cubic-bezier(0.3, 1.5, 0.5, 1) 0.1s;
}
.is-visible .polaroid {
  transform: rotate(var(--tilt));
}
@media (prefers-reduced-motion: reduce) {
  .polaroid {
    transform: rotate(var(--tilt));
    transition: none;
  }
}
.polaroid img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 2px;
}
</style>
