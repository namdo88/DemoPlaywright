// import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page.ts';
import { BasePage } from '../src/base/basePage.ts';
import { CommonPage } from '../src/pages/common.page.ts';
import test, {expect} from '../src/base/fixtures.ts';
import path from 'path';
import { Utils } from '../src/utils/utils.ts';



test.describe('Login', () => {

  // test.beforeAll(async ({ pageManager }) => {
  //   console.log("-------------------------Before all--------------------------");
  // })
  
  test.beforeEach(async ({ pageManager }) => {
    console.log("-------------------------Before test--------------------------");
    await pageManager.getCommonPage().navigate("https://opensource-demo.orangehrmlive.com/");
  })

  // test('should login with valid credentials', async ({ pageManager, page}) => {
  //   await test.step('Enter valid username', async () => {
  //     await pageManager.getLoginPage().enterUsername("Admin")
  //   })
  //   await test.step('Enter valid password', async () => {
  //     await pageManager.getLoginPage().enterPassword("admin123")
  //   })
  //   await test.step('Click login button', async () => {
  //     await pageManager.getLoginPage().clickLoginButton()
  //   })
  //   await test.step('Verify login success', async () => {
  //     // await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
  //     await pageManager.getHomePage().verifyHomePageTitle("Dashboard");
  //   })

  //   // page.context().storageState({path: "./LoginAuth.json"})

  // })

  test('should show error with invalid credentials', async ({ pageManager }) => {
    await test.step('Enter invalid username', async () => {
      await pageManager.getLoginPage().enterUsername("abc")
    })
    await test.step('Enter invalid password', async () => {
      await pageManager.getLoginPage().enterPassword("abc")
    })
    await test.step('Click login button', async () => {
      await pageManager.getLoginPage().clickLoginButton()
    })
    await test.step('Verify login error', async () => {
      await pageManager.getLoginPage().verifyErrorMessage(await Utils.loadTestData("login", "errorMessage"))
    })
    await test.step('Verify login success', async () => {
      // await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
      await pageManager.getHomePage().verifyHomePageTitle("Dashboard");
    })
  })

  test.afterEach(async ({ pageManager, page }) => {
    console.log("-------------------------After test--------------------------");
    await pageManager.getCommonPage().closeAllTabs();
  })
  
  // test.afterAll(async ({ page }) => {
  //   console.log("-------------------------After all--------------------------");
  // })
})

