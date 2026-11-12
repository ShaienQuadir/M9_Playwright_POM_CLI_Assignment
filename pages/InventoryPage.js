
class InventoryPage {
  constructor(page) {
    this.page = page;

    // Inventory Page Locators
    this.pageTitle = page.locator('[data-test="title"]');
    this.productList = page.locator('[data-test="inventory-item"]');
  }

  // Check whether Inventory Page is loaded
  async isLoaded() {
    await this.pageTitle.waitFor({ state: 'visible' });

    return await this.pageTitle.textContent() === 'Products';
  }
}

module.exports = { InventoryPage };
