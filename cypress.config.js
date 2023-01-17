const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    baseUrl: 'http://10.128.193.165:3000/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',

  },
});



