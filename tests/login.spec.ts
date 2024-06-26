// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../src/pages/login.page.ts';

// test.describe('Login Page Tests', () => {
//   test.beforeEach(async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.goto();
//   });

//   test('should display login form', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await expect(loginPage.usernameInput).toBeVisible();
//     await expect(loginPage.passwordInput).toBeVisible();
//     await expect(loginPage.loginButton).toBeVisible();
//   });

//   test('should login with valid credentials', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.login('standard_user', 'secret_sauce');
//     await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');
//   });

//   test('should show error with invalid credentials', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.login('invalid_user', 'invalid_password');
//     const errorMessage = page.locator('[data-test="error"]');
//     await expect(errorMessage).toBeVisible();
//     await expect(errorMessage).toContainText('Username and password do not match any user in this service');
//   });

//   test('should not login with empty username', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.login('', 'secret_sauce');
//     const errorMessage = page.locator('[data-test="error"]');
//     await expect(errorMessage).toBeVisible();
//     await expect(errorMessage).toContainText('Username is required');
//   });

//   test('should not login with empty password', async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.login('standard_user', '');
//     const errorMessage = page.locator('[data-test="error"]');
//     await expect(errorMessage).toBeVisible();
//     await expect(errorMessage).toContainText('Password is required');
//   });
// });