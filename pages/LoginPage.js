
class LoginPage {
  constructor(page) {
    this.page = page;

    // Login Page Locators
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');

    // Error Message Locator
    this.errorMessage = page.locator('[data-test="error"]');
   }

   // Login Action
   async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
   }

   // Get Error Message
   async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}

module.exports = { LoginPage };
