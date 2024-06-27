import test, {expect} from '../src/base/fixtures.ts';
import { PageManager } from '../src/pages/PageManager.ts';
import { Utils } from '../src/utils/utils.ts';

test.describe('Test Home page', () => {
    test.beforeEach(async ({ pageManager }) => {
        console.log("-------------------------Before test--------------------------");
        await pageManager.getCommonPage().navigate("https://opensource-demo.orangehrmlive.com/");
    })

    test.afterEach(async ({ pageManager }) => {
        console.log("-------------------------After test--------------------------");
        await pageManager.getCommonPage().closeAllTabs();
    })

    test('should see Home page title correctly', async ({ pageManager }) => {
        await test.step('Verify Home page title', async () => {
          await pageManager.getHomePage().verifyHomePageTitle(await Utils.loadTestData("home", "pageTitle"));
        })
      })

})