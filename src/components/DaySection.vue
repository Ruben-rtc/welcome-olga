<script setup>
import { computed } from 'vue'

const props = defineProps({
  day: { type: Object, required: true },
  lang: { type: String, required: true },
})

// Textes du jour dans la langue choisie
const text = computed(() => props.day[props.lang])
</script>

<template>
  <section :id="`day-${day.num}`" class="day" :style="{ background: day.color }">
    <div class="day__media">
      <div class="day__photo">
        <img
          class="zoom"
          :src="day.photo"
          alt=""
          loading="lazy"
          :style="{ objectPosition: day.photoPosition }"
        />
      </div>
      <div class="day__num num" aria-hidden="true">{{ day.num }}</div>
    </div>

    <div class="day__body">
      <p class="day__date">{{ text.date }}</p>
      <h2 class="day__title">{{ text.title }}</h2>

      <article v-for="event in text.events" :key="event.title" v-reveal class="event">
        <span class="event__time">{{ event.time }}</span>
        <h3 class="event__title">{{ event.title }}</h3>
        <p v-if="event.note" class="event__note">{{ event.note }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.day {
  color: var(--plum);
  scroll-margin-top: 0;
}
.day__media {
  position: relative;
}
.day__photo {
  height: 340px;
  overflow: hidden;
}
.day__photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.day__num {
  position: absolute;
  left: 18px;
  bottom: -34px;
  font-weight: 900;
  font-size: 150px;
  line-height: 1;
  color: #fff;
  text-shadow: 5px 5px 0 var(--plum);
}
.day__body {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 52px 24px 56px;
}
.day__date {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.day__title {
  margin: 0;
  font-weight: 900;
  font-size: 36px;
  line-height: 1.05;
  text-transform: uppercase;
}

.event {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 18px;
  border-radius: 22px;
  background: #fff;
}
.event__time {
  padding: 5px 12px;
  border-radius: 999px;
  background: var(--plum);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
}
.event__title {
  margin: 0;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.25;
}
.event__note {
  margin: 0;
  font-size: 15px;
  line-height: 1.45;
  color: #4a3466;
}
</style>
