<script setup>
defineProps({ label: { type: String, required: true } })
const lang = defineModel({ type: String, required: true })

const options = [
  { code: 'uk', text: 'UA' },
  { code: 'en', text: 'EN' },
]
</script>

<template>
  <div class="lang-anchor">
    <div class="lang" role="group" :aria-label="label">
      <button
        v-for="option in options"
        :key="option.code"
        type="button"
        class="lang__btn"
        :class="{ 'lang__btn--active': lang === option.code }"
        :aria-pressed="lang === option.code"
        @click="lang = option.code"
      >
        {{ option.text }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Barre collante de hauteur 0 : le sélecteur flotte en haut à droite pendant le défilement. */
.lang-anchor {
  position: sticky;
  top: 0;
  z-index: 30; /* au-dessus de l'écran d'entrée */
  height: 0;
  display: flex;
  justify-content: flex-end;
}
.lang {
  display: flex;
  gap: 4px;
  height: 44px;
  padding: 4px;
  margin: 14px 16px 0 0;
  border-radius: 999px;
  background: var(--plum);
}
.lang__btn {
  min-width: 48px;
  height: 100%;
  padding: 0 10px;
  border: 0;
  border-radius: 999px;
  font: 700 14px var(--font);
  background: transparent;
  color: #fff;
}
.lang__btn--active {
  background: var(--yellow);
  color: var(--plum);
}
</style>
