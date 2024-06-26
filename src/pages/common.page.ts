import { Page } from '@playwright/test';
import { BasePage } from '../base/basePage';
import path from 'path';
import fs from 'fs';
import config from '../configuration/testConfig.js';

export class CommonPage extends BasePage{
    constructor(page: Page) {
      super(page);
    }

    async loadTestData(pageName: string, key: string) {
      const dataPath = path.join(__dirname, `../data/${pageName}-data/${config.language}.json`);
      const data = await fs.promises.readFile(dataPath, 'utf8');
      const parsedData = await JSON.parse(data);
      return await parsedData[key];
    }
    
    async navigate(url: any) {
      await this.navigateTo(url);
    }

    // async closeTabs() {
    //   await this.closeAllTabs();
    // }

    // async closeTabByIndex(tabId?: number) {
    //   await this.closeTabByIndex(tabId);
    // }

      
}
