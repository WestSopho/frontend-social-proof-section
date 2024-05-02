/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            "#512051": "#512051",
            "#EE69A4" : "#EE69A4",
            "#F7F2F7" : "#F7F2F7",
            "#927B91": "#927B91"
        },
        fontFamily: {
          'league-spartan': ['League Spartan', 'sans-serif']
        }
      },
    },
    plugins: [],
  }