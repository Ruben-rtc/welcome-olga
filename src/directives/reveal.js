// v-reveal : l'élément monte en fondu la première fois qu'il entre dans l'écran.
// Le style de l'animation est dans style.css (.reveal / .reveal.is-visible).

// v-inview : ajoute seulement la classe is-visible à l'entrée dans l'écran, sans
// le fondu. Sert de repli pour le zoom des photos sur les navigateurs qui ne
// gèrent pas les animations liées au défilement (Firefox, anciens Safari).

const observer =
  typeof IntersectionObserver === 'undefined'
    ? null
    : new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.15 },
      )

export const inview = {
  mounted(el) {
    if (observer) observer.observe(el)
    else el.classList.add('is-visible')
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  },
}

export const reveal = {
  mounted(el) {
    el.classList.add('reveal')
    if (observer) observer.observe(el)
    else el.classList.add('is-visible') // vieux navigateur : on affiche tout de suite
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  },
}
