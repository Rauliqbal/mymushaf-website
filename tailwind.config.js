/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
   theme: {
      extend: {
         container: {
           center: true,
           padding: '1rem' 
         },
         colors : {
            primary: '#30BD9B',
            secondary: '#868686'
         }
      },
   },
   plugins: [],
};
