const { Before, BeforeAll, After, AfterAll } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

Before(async function () {
  console.log("This is executed before every scenario");
  global.context = await browser.newContext();
  global.page = await context.newPage();
});

After(async function () {
  console.log("This is executed after every scenario");
  // await clearDatabase();
  await global.page.close();
  await global.context.close();
});

BeforeAll(async function () {
  console.log("This is executed in the begining of login feature");
  global.browser = await chromium.launch({
    headless: false,
    slowMo: 5,
    channel: "chrome",
  });
});

AfterAll(async function () {
  console.log("This is executed at the end of login feature");
  await global.browser.close();
});
