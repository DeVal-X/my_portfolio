import {defineConfig} from 'vite'


export default defineConfig({
  base: './', // Indique d'utiliser des chemins relatifs
	plugins: [],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        bff: 'project-bff.html',
        escape: 'project-escape.html',
        butterfly:  'project-butterfly.html',
        converter:  'project-converter.html',
        password:  'project-password.html',
        portal:  'project-portal.html',
        train:  'project-train.html',
      },
      external: [
        './assets/js/jquery.min.js',
        './assets/js/jquery.scrollex.min.js',
        './assets/js/jquery.scrolly.min.js',
        './assets/js/browser.min.js',
        './assets/js/breakpoints.min.js',
        './assets/js/util.js',
        './assets/js/main.js',
        './assets/js/carousel.js'
      ]
    }
  },
})
