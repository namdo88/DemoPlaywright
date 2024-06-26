import { expect } from '@playwright/test';
import { CommonPage } from './common.page';

export class HomePage extends CommonPage {
    readonly homePageTitle = "//span[@class='oxd-topbar-header-breadcrumb']/h6";

    async verifyHomePageTitle(title: string) {
        const actualUserName = await this.getText(this.homePageTitle);
        await expect(actualUserName).toBe(title);
    }
   

}