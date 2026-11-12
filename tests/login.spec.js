
const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

// Import test data from JSON
const users = require('../data/users.json');

// Run test for each user
users.forEach((user, index) => {

  test(`TC_LOGIN_00${index + 1} - Login test for ${user.username}`, async ({ page }) => {

    // Create Page Objects
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // Open SauceDemo
    await page.goto('/');

    // Login using JSON data
    await loginPage.login(user.username, user.password);

    // Verify result based on expected value
    if (user.expected === 'success') {

      await expect(page).toHaveURL(/inventory/);
      expect(await inventoryPage.isLoaded()).toBe(true);
      await expect(inventoryPage.productList.first()).toBeVisible();

    } else if (user.expected === 'error') {

      await expect(loginPage.errorMessage).toBeVisible();

      const errorMessage = await loginPage.getErrorMessage();

      expect(errorMessage).toContain('Epic sadface');
    }

  });

});
