import { Locator, Page, expect } from "@playwright/test";


export default class AddToCart {
  searchField: Locator;
  bookLocator: Locator;
  badgeLocator: Locator;

  constructor(private page: Page) {
    this.searchField = page.getByPlaceholder("Search books or authors'");
    this.bookLocator = page.locator("//button[@color='primary']")
    this.badgeLocator = page.locator("#mat-badge-content-0")
  }

  async addToCartNavigation() {
    await this.page.goto(process.env.CARTBASEURL);


    //  await this.page.waitForURL("https://bookcart.azurewebsites.net/")
    // await expect(this.page.locator("mat-card-title").innerText()).toContain(" Price Filter ")

     await expect(this.page.locator("mat-card-title")).toContainText('Price Filter');
  }

  async searchForBook(bookName) {
    await this.searchField.fill(bookName)
  }

  async addToCart() {
    await this.bookLocator.click();
    const toast = this.badgeLocator;
    await expect(toast).toBeVisible();
    await toast.waitFor({ state: "hidden" })
  }

  async checkCartBadge() {
    const badgeCount = await this.bookLocator.textContent();
    expect(Number(badgeCount)).toBeGreaterThan(0);
  }
}