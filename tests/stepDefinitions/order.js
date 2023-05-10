const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const url = "https://web.restrox.co/login";

const homepageElement = "//span[@class='text-primary font-bold h2 ']";
const loginButton = "//button[@type='submit']";
const emailLocator = "//input[@type='text']";
const passwordLocator = "//input[@type='password']";
const homepageLocator =
  "//p[@class='text-16 font-normal line-height-150 text-gray-700']";
const orderLocator = "//li[@id ='Orders']";
const addOrderlocator = "//button[@class='ms-1 btn btn-primary']";
const dineLocator = "//h1[@class='mb-1']";
const tableElementLocator =
  "//*[@class='TableCards_firstcontainer__1nY-J']//*[text()='Table 001']";
const menuLocator = "//div[@class='filter-txt']";
const itemaddbutton = "//button[@class='ItemCard_dishCardBtn__1PnlZ']";
const confirmFirstButton =
  "//button[@class='AddOrderModal_confirmButton___47gD btn btn-primary']";
const confirmSecondButton = "//button[@class='swal2-confirm btn btn-primary']";
const sucessMessage = "//div[@class='Toastify__toast-body']";
// const orderpageElement = "//img[@src='/static/media/emptyData.e494ffe9.svg']";

const quickOrderlocator = "//button[@class='btn btn-secondary']";
const quickAddButton = "//button[@class='ItemCard_dishCardBtn__1PnlZ']";
const quickConfirmButton =
  "//button[@class='QuickOrder_confirmButton__1bNYl btn btn-primary']";
const confirmquickSecButton =
  "//button[@class='swal2-confirm btn btn-primary']";

const orderpageElement =
  "//button[@class='PosHeader_dropdownToggler__14GgB btn btn-primary']";

const quickOrderLocator = "//*[@class='btn btn-secondary']";

Given("User has navigated to login page", async function () {
  // navigate to the app
  await page.goto(url);
  // locate the element in the webUI
  const locator = await page.locator(homepageElement);
  // assert that it's visible
  await expect(locator).toBeVisible();
});

Given(
  "User enters email {string} and password {string}",
  async function (email, password) {
    await page.fill(emailLocator, email);
    // click the button
    await page.fill(passwordLocator, password);
    await page.click(loginButton);
  }
);

Given("the user has navigated to the home page", async function () {
  const locator = await page.locator(homepageLocator);
  // assert that it's visible
  await expect(locator).toBeVisible();
});

Given("the user has clicked the order button", async function () {
  await page.click(orderLocator);
});

Given(
  "the user navigated to order page",
  { timeout: 2 * 5000 },
  async function () {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // wait for 5000 ms
    const locator = await page.locator(orderpageElement);
    await expect(locator).toBeVisible();
  }
);

When("user clicks the makeoredr button", async function () {
  await page.click(addOrderlocator);
  // await page.pause();
});

Then("user should be navigated dinein page", async function () {
  const locator = await page.locator(dineLocator);
  // assert that it's visible
  await expect(locator).toBeVisible();
});

//scenario2
Given("the user has navigated to dinein page", async function () {
  const locator = await page.locator(dineLocator);
  // assert that it's visible
  await expect(locator).toBeVisible();
  await page.pause();
});

When("the user clicks the table", async function () {
  await page.click(tableElementLocator);
});

Then("the user should be navigated to menu page", async function () {
  const locator = await page.locator(menuLocator);
  // assert that it's visible
  await expect(locator).toBeVisible();
});

When(
  "the user add the foods and clicks confirmorder button and navigates to next page and clicks confirmorder",
  async function () {
    //   const locatorhome = await page.locator(homepageLocator);
    // // assert that it's visible
    // await expect(locatorhome).toBeVisible();

    // //
    // await page.click(orderLocator);
    // //
    // const orderlocator = await page.locator(orderpageElement);
    // await expect(orderlocator).toBeVisible();
    // //
    await page.click(addOrderlocator);
    // await page.pause();

    //
    const dinelocator = await page.locator(dineLocator);
    // await page.pause();

    // assert that it's visible
    await expect(dinelocator).toBeVisible();
    // await page.pause();

    //
    await page.click(tableElementLocator);
    // await page.pause();

    //
    // await page.click(tableElementLocator);

    //

    const menulocator = await page.locator(menuLocator);
    // await page.pause();

    // assert that it's visible
    await expect(menulocator).toBeVisible();

    await page.click(itemaddbutton);
    //
    await page.click(confirmFirstButton);
    //
    await page.click(confirmSecondButton);
  }
);

Then("the sucess toast message should appear", async function () {
  const locator = await page.locator(sucessMessage);
  // assert that it's visible
  await expect(locator).toBeVisible();
});

When(
  "the clicks the quick order button and then the user add the foods and clicks confirmorder button and navigates to next page and clicks confirmorder",
  { timeout: 2 * 5000 },
  async function () {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // wait for 5000 ms

    await page.click(quickOrderlocator);

    await page.click(quickAddButton);

    await page.click(quickConfirmButton);

    //
    await page.click(confirmquickSecButton);
  }
);

When(
  "the user clicks the quick order button",
  { timeout: 2 * 5000 },
  async function () {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const quickAddlocator = await page.locator(quickOrderLocator);
    // assert that it's visible
    await expect(quickAddlocator).toBeVisible();
    await page.click(quickOrderLocator);
  }
);

Then("it navigates to the quick menu page", async function () {
  await page.click(quickAddButton);
});
