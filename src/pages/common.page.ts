import { Page } from '@playwright/test';
import { BasePage } from '../base/basePage';
import path from 'path';
import fs from 'fs';
import TestConfig from '../base/test-config.js';

export class CommonPage extends BasePage{
    constructor(page: Page) {
      super(page);
    }

    // async loadTestData(pageName: string, key: string) {
    //   const dataPath = path.join(__dirname, `../data/${pageName}-data/${TestConfig.LANGUAGE}.json`);
    //   const data = await fs.promises.readFile(dataPath, 'utf8');
    //   const parsedData = await JSON.parse(data);
    //   return await parsedData[key];
    // }
    
    async navigate(url: any) {
      await this.navigateTo(url);
    }
      
}
