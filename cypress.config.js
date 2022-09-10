const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://i6.io/',
    "viewportWidth": 1536,
    "viewportHeight": 960,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
