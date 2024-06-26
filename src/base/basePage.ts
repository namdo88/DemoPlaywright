import { Page, Locator } from 'playwright';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async getTabById(tabId: number=1): Promise<Page> {
    const tabs = this.page.context().pages();
    if(tabs.length >= tabId) {
      return tabs[tabId - 1];
    } else {
      throw new Error(`Tab with ID ${tabId} not found`);
    } 
  }

  async getLocator(selector: string, tabId?: number): Promise<Locator> {
    this.page = await this.getTabById(tabId);
    return this.page.locator(selector);
  }

  async getUrl(tabId?: number): Promise<string> {
    this.page = await this.getTabById(tabId);
    return this.page.url();
  }
  

  async waitForElement(selector: string, tabId?: number, timeout: number = 30000) {
    this.page = await this.getTabById(tabId);
    // const locator = this.page.locator(selector);
    await this.page.locator(selector).waitFor({ timeout: timeout });
  }

  async clickElement(selector: string, tabId?: number) {
    const locator = await this.getLocator(selector, tabId);
    await locator.click();
  }

  async typeText(selector: string, text: string, tabId?: number) {
    const locator = await this.getLocator(selector, tabId);
    await locator.waitFor({ state: 'attached' });
    await locator.fill(text);
  }

  async getText(selector: string, tabId?: number) {
    const locator = await this.getLocator(selector, tabId);
    return await locator.textContent();
  }

  async rightClickElement(selector: string) {
    const locator = await this.getLocator(selector);
    await locator.click({ button: 'right' });
  }

  async screenshot(path: string) {
    await this.page.screenshot({ path });
  }

  async closeTabByIndex(tabId?: number) {
    this.page = await this.getTabById(tabId);
    await this.page.close();
  }

  async closeAllTabs() {
    const pages = this.page.context().pages();
    console.log("Number of pages: ", pages.length);
    for (const page of pages) {
      await page.close();
    }
  }

  async getLocatorFromAListMethods(methods: { method: string; args: any }[], tabId?: number): Promise<Locator> {
    const start = Date.now();
    for (const { method, args } of methods) {
      this.page = await this.getTabById(tabId);
      const locator = await (this.page[method] as any)(...args);
      if (await locator.isVisible({ timeout: 1000 })) {
        return locator;
      } else {
        console.log(`Error retrieving locator using ${method}: ${args}`);
        console.log(Date.now()-start);
      }
    }
    throw new Error('No locator found');
  }
  
  async getLocatorWithSelfHealing(selector: string, methods?: { method: string; args: any }[], tabId?: number): Promise<Locator> {
    let locator = await this.getLocator(selector, tabId);
    if (await locator.isVisible({ timeout: 3000 })) {
      return locator;
    } else {
      console.log(`Error retrieving locator with selector: ${selector}`);
      if (methods) {
        return this.getLocatorFromAListMethods(methods, tabId);
      }
    }
    return locator;
  }

  // async getLocatorWithSelfHealing(selector: string, methods: { method: string; args: any }[], tabId?: number): Promise<Locator> {
  //   try {
  //     this.page = await this.getTabById(tabId);
  //     return this.page.locator(selector);;
  //   } catch (error) {
  //     console.log(`Error retrieving locator with selector: ${selector}: ${error}`);
  //     for (const { method, args } of methods) {
  //       this.page = await this.getTabById(tabId);
  //       const locator = await (this.page[method] as any)(...args);
  //       if (await locator.isVisible({ timeout: 1000 })) {
  //         return locator;
  //       } else {
  //         console.log(`Error retrieving locator using ${method}: ${args}`);
  //       }
  //     }
  //   }
  //   throw new Error('No locator found');
  // }

  
  
}