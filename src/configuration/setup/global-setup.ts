import { Browser, Page, chromium } from "@playwright/test";
import { PageManager } from "../../pages/PageManager.ts";
import test, {expect} from '../../base/fixtures.ts';
import Constants from '../../base/Constants.ts';
import dotenv from "dotenv";

dotenv.config({
    path: `./.env.${Constants.TEST_ENV}`,
    override: true
});

test('Setup chromium', async ({ pageManager, page }) => { 
    console.log("-------------------------Chromium setup test--------------------------");

    console.log(Constants.BASE_URL);
    console.log(Constants.USERNAME);
    console.log(Constants.PASSWORD);

    // const pageManager = new PageManager(page);
    await page.context().tracing.start({screenshots: true, snapshots: true});

    await pageManager.getCommonPage().navigate(Constants.BASE_URL);
    await pageManager.getLoginPage().login(Constants.USERNAME, Constants.PASSWORD)
    await pageManager.getHomePage().verifyHomePageTitle("Dashboard");
    await page.context().storageState({path: "./login-state.json"})
    await page.context().tracing.stop({
        path: './test-results/setup-trace.zip',
    });
    await page.close();
})

async function globalSetup() {
    
    // if (process.env.test_env) {
    //     dotenv.config({ 
    //         path: `.env.${process.env.test_env}`,
    //         override: true })
    // }

    

    // const browser: Browser = await chromium.launch({ headless: false });
    // const context = await browser.newContext();
    // const page: Page = await context.newPage();
    // const pageManager = new PageManager(page);
    // await pageManager.getCommonPage().navigate('https://opensource-demo.orangehrmlive.com/');
    // await pageManager.getLoginPage().login("Admin", "admin123")
    // await pageManager.getHomePage().verifyHomePageTitle("Dashboard");
    // await page.context().storageState({path: "./LoginAuth.json"})
    // await browser.close();
}

export default globalSetup;