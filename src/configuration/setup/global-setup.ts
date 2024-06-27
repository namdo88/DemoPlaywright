
import test, {expect} from '../../base/fixtures.ts';
import TestConfig from '../../base/test-config.ts';
import dotenv from "dotenv";
import { Utils } from "../../utils/utils.ts";

dotenv.config({
    path: `./.env.${TestConfig.TEST_ENV}`,
    override: true
});

test('Setup chromium', async ({ pageManager, page }) => { 
    console.log("-------------------------Chromium setup test--------------------------");

    console.log(TestConfig.BASE_URL);
    console.log(TestConfig.USERNAME);
    console.log(TestConfig.PASSWORD);

    // const pageManager = new PageManager(page);
    await page.context().tracing.start({screenshots: true, snapshots: true});

    await pageManager.getCommonPage().navigate(TestConfig.BASE_URL);
    await pageManager.getLoginPage().login(TestConfig.USERNAME, TestConfig.PASSWORD)
    await pageManager.getHomePage().verifyHomePageTitle(await Utils.loadTestData("home", "pageTitle"));
    await page.context().storageState({path: "./login-state.json"})
    await page.context().tracing.stop({
        path: './test-results/setup-trace.zip',
    });
    await page.close();
})

// async function globalSetup() {
//     if (process.env.test_env) {
//         dotenv.config({ 
//             path: `.env.${process.env.test_env}`,
//             override: true })
//     }

//     const browser: Browser = await chromium.launch({ headless: false });
//     const context = await browser.newContext();
//     const page: Page = await context.newPage();
//     const pageManager = new PageManager(page);
//     await pageManager.getCommonPage().navigate('https://opensource-demo.orangehrmlive.com/');
//     await pageManager.getLoginPage().login("Admin", "admin123")
//     await pageManager.getHomePage().verifyHomePageTitle("Dashboard");
//     await page.context().storageState({path: "./LoginAuth.json"})
//     await browser.close();
// }

// export default globalSetup;