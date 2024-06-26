import { test as base} from '@playwright/test';
import { PageManager } from '../pages/PageManager';


const test = base.extend<{
    pageManager: PageManager;
}>({
    pageManager: async ({ page }, use) => {
        await use(new PageManager(page));
    }
})

export default test;
export const expect = test.expect;
