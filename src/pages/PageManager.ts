import { Page } from "@playwright/test";
import { LoginPage } from "./login.page";
import { CommonPage } from "./common.page";
import { HomePage } from "./home.page";

export class PageManager {
    protected page: Page;
    constructor(page: Page) {
      this.page = page;
    }

    getLoginPage() {
        return new LoginPage(this.page);
    }

    getCommonPage() {
        return new CommonPage(this.page);
    }

    getHomePage() {
        return new HomePage(this.page);
    }

    // getProductsPage() {
    //     return new ProductsPage(this.page);
    // }



}