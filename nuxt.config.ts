// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/image", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  css: [
    "assets/css/bootstrap.min.css",
    "assets/css/font-awesome.min.css",
    "assets/css/animations.css",
    "assets/css/lightbox.min.css",
    "assets/css/modal-video.min.css",
    "assets/css/style.css",
  ],
  image: {
    dir: "assets/images",
  },
  app: {
    head: {
      title: "Nuxt3.2.2",
      meta: [{ name: "description", content: "Nuxt3.2.2" }],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Iceland&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&display=swap",
        },
      ],
      script: [
        { src: "jquery-3.2.1.min.js" },
        { src: "popper.min.js" },
        { src: "bootstrap.min.js" },
        { src: "blazy.min.js" },
        { src: "particles.js" },
        { src: "isotope.pkgd.min.js" },
        { src: "lightbox.min.js" },
        { src: "jquery-modal-video.min.js" },
        { src: "validator.min.js" },
        { src: "strider.js" },
        { src: "https://cookieconsent.popupsmart.com/src/js/popper.js" },
      ],
    },
  },
  runtimeConfig: {
    webBEndURL: process.env.WEB_BEND_URL,
    public: {
      // in case of to share into the public
    },
  },
  // buildDir: "dist",
  ssr: true,
});
