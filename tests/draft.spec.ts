import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page.ts';
import { BasePage } from '../src/base/basePage.ts';
import { CommonPage } from '../src/pages/common.page.ts';


test('should show error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const baseBase = new BasePage(page);
    await page.goto("https://www.saucedemo.com/v1/");
    await loginPage.enterUsername("abc")

    const methods = [
      { method: 'locator', args: ['#login-button1'] },
      { method: 'locator', args: ['#login-button2'] },
      { method: 'locator', args: ['#login-button3'] },
      { method: 'locator', args: ['#login-button4'] },
      { method: 'locator', args: ['#login-button5'] },

      { method: 'getByRole', args: ['button', { name: 'Submit' }] },
      { method: 'getByPlaceholder', args: ['Enter your name'] },
      { method: 'getByText', args: ['LOGIN'] },
      { method: 'getByLabel', args: ['Username'] },
    ];

    const locator = await baseBase.getLocatorWithSelfHealing("#login-button1", methods);

    await locator.click();

    // const locator1 = await baseBase.getLocator("#login-button", 1);
    // await locator1.click

    await loginPage.enterPassword("abc")
    await loginPage.enterUsername("jsaldjflsla")

    // const locator1 = await baseBase.getLocatorWithSelfHealing("#login-button", methods);

    // await locator1.click();


    // await loginPage.enterUsername("aaaaaaaaaaaa",2)
    // await loginPage.enterPassword("aaaaaaaaaaaa",2)



    // await baseBase.clickElement('#login-button', 1);
    // await baseBase.closeTab();
    // await baseBase.closeTab(2);
    // await baseBase.closeTab(1);

  });