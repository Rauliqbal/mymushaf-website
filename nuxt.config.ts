// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
      head: {
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1",
         meta: [{ name: "description", content: "This Website using Nuxt 3 and Tailwind CSS" }],
         link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, {
           rel: "stylesheet",
           href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Scheherazade+New:wght@400;500;600;700&display=swap",
         }],
      },
      pageTransition: { name: "page", mode: "out-in" },
   },
   css: ["~/assets/css/main.css"],
   devtools: { enabled: true },
   postcss: {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   },
});
