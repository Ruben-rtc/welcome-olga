# Welcome Olga

Page d'accueil pour la semaine d'Olga en Suisse (17–23 novembre 2026) : un site à défilement vertical, en ukrainien et en anglais.

## Stack

- **Vue 3** (Composition API, `<script setup>`)
- **Vite** pour le dev et le build
- **CSS pur** (variables + animations pilotées par le défilement), aucune librairie d'animation
- **GitHub Actions → GitHub Pages** pour la mise en ligne

## Lancer en local

Il faut [Node.js](https://nodejs.org) (version LTS).

```shell
npm install
npm run dev
```

Le site s'ouvre sur l'adresse affichée dans le terminal (par défaut `http://localhost:5173`).

Pour tester le build de production :

```shell
npm run build
npm run preview
```

## Structure

```text
src/
  data/content.js        # tous les textes et le planning (uk + en) — à modifier ici
  components/
    LangToggle.vue       # sélecteur UA / EN
    HeroSection.vue      # écran d'accueil
    DaySection.vue       # une section par jour
    OutroSection.vue     # fin de page + crédits photo
  directives/reveal.js   # v-reveal : apparition au défilement
  assets/photos/         # photos
  style.css              # couleurs, typo, animations
```

Pour remplacer une photo : déposer la nouvelle image dans `src/assets/photos/` avec le même nom de fichier.

## Mise en ligne sur GitHub Pages

1. Créer un dépôt vide sur GitHub, puis dans ce dossier :

   ```shell
   git init
   git add .
   git commit -m "Welcome Olga"
   git branch -M main
   git remote add origin https://github.com/<utilisateur>/<depot>.git
   git push -u origin main
   ```

2. Sur GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
3. Le workflow `.github/workflows/deploy.yml` se lance à chaque push sur `main`. Suivre son avancement dans l'onglet **Actions**.
4. Le site est en ligne sur `https://<utilisateur>.github.io/<depot>/`.

Si le premier push a eu lieu avant l'étape 2, relancer le workflow à la main : **Actions → Deploy to GitHub Pages → Run workflow**.

## Confidentialité

Un site GitHub Pages est **public** : toute personne qui a le lien peut le voir. La page demande aux moteurs de recherche de ne pas l'indexer (`noindex`), mais ce n'est pas une protection. Ne pas y mettre d'adresse ni d'information sensible.

## Crédits photo

Les crédits sont réunis ici ; le site lui-même n'en affiche pas.

| Jour | Photo | Auteur | Source / licence |
| --- | --- | --- | --- |
| Mardi | Hublot, aéroport de Genève | Anton Shakirov | [Unsplash](https://unsplash.com/photos/white-plane-on-runway-MnEZnSQJDxw), licence Unsplash |
| Mercredi | Temple de Morges | Tim Bernhard | [Unsplash](https://unsplash.com/photos/a-city-street-with-a-clock-tower-in-the-background-IrP6hR4TcWo), licence Unsplash |
| Jeudi | Toits de Lausanne | Wassim Chouak | [Unsplash](https://unsplash.com/photos/houses-near-body-of-water-during-daytime-UEn6D23cM8o), licence Unsplash |
| Vendredi | Verre de vin dans les vignes | Hector Uribe | [Unsplash](https://unsplash.com/photos/wine-glass-sits-on-a-table-overlooking-a-vineyard-cde6dorxX3w), licence Unsplash |
| Dimanche | Église | Akira Hojo | Unsplash (`_86u_Y0oAaM`), licence Unsplash |
| Lundi | Gruyères | Rich Martello | [Unsplash](https://unsplash.com/photos/a-scenic-view-of-a-town-with-a-castle-in-the-background-W1JEOEMZaT4), licence Unsplash |

Les autres photos (Olga, famille, Milan) sont des photos personnelles.
