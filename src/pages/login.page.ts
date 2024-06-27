import { expect } from '@playwright/test';
import { CommonPage } from './common.page';


export class LoginPage extends CommonPage{

  // readonly page: Page;
  readonly usernameInput = "[name='username']";
  readonly passwordInput = "[name='password']";
  readonly loginButton = "button[type='submit']";
  readonly errorMessage = ".oxd-alert-content-text";

  // constructor(page: Page) {
  //   super(page);
  // }

  async enterUsername(username: string, tabId?: number) {
    // const locator = await this.getLocator(this.usernameInput, tabId);
    // locator.waitFor({ state: 'attached' });
    // await locator.fill(username);
    await this.typeText(this.usernameInput, username, tabId);
  }

  async enterPassword(password: string, tabId?: number) {
    await this.typeText(this.passwordInput, password, tabId);
  }

  async clickLoginButton(tabId?: number) {
    await this.clickElement(this.loginButton, tabId);
    // await this.page.click(this.loginButton);
  }

  async login(username: any, password: any, tabId?: number) {
    await this.enterUsername(username, tabId);
    await this.enterPassword(password, tabId);
    await this.clickLoginButton(tabId);
  }

  async verifyErrorMessage(message: string, tabId?: number) {
    console.log(`Expected error message: ${message}`);
    const actualMessage = await this.getText(this.errorMessage, tabId);
    console.log(`Actual error message: ${actualMessage}`);
    await expect(actualMessage).toBe(message);
  }

}
