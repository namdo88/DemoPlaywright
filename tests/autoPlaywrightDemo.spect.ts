import { test, expect } from '@playwright/test';
import { auto } from "auto-playwright";

test("executes query, action and assertion", async ({page}) => {
    const options = {
        model: "gpt-3.5-turbo",
        openaiApiKey: 'sk-proj-...'
    };

    // Navigate to a website
    await page.goto("https://www.saucedemo.com/v1/");
  
    // `auto` can query data
    // In this case, the result is plain-text contents of the header
    const res = await auto("get the header text", { page, test }, options);  


    // use res.query to get a query result.
    console.log(res);
    await page.close();
});