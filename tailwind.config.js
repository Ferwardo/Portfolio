const colors = require("tailwindcss/colors")

module.exports = {
  purge: {
    enabled: process.env.WEBPACK_DEV_SERVER === 'true' && process.argv.join(' ').indexOf('build') !== -1,
    content: [
      "./src/**/*.{html,ts}",
      "./projects/**/*.{html,ts}"
    ]
  },
  darkMode: false,
  theme: {
    color: {
      gray: colors.warmGray,
    },
    fontFamily: {
      body: ["Lato", "ui-sans"],
      title: ["Montserrat", "ui-sans"],
    },
    backgroundImage: theme => ({
      'welcome': "url('/assets/images/code_bg.jpg')"
    })
  },
  variants: {
    scrollbar: ["rounded"],
    extend: {
      blur: ["hover", 'group-hover'],
      filter: ["hover", 'group-hover'],
      transitionDuration: ["hover", "group-hover"],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}