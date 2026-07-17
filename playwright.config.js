// @ts-check
import { defineConfig, devices } from '@playwright/test';

/** 
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 30*1000,
  expect : {
    timeout: 30*1000
  },

  reporter: 'html',

  use: {
      browsername: 'firefox',
      headless : false
  },


  
});
module.exports = config 
