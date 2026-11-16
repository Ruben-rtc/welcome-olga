import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' : les chemins sont relatifs, donc le site fonctionne sur
// GitHub Pages quel que soit le nom du dépôt (https://<user>.github.io/<repo>/).
export default defineConfig({
  base: './',
  plugins: [vue()],
})
