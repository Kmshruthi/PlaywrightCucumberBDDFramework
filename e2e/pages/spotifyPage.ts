import { Locator, Page, expect } from "@playwright/test";


export default class Spotify {
  yourLibraryMenu: Locator;
  toolTip: Locator;
  loginText: Locator;


  constructor(private page: Page) {
    this.yourLibraryMenu = page.locator("//button[text()='Your Library']");
    this.loginText = page.getByTestId("login-button");
    this.toolTip = page.getByRole("tooltip");
  }

  async spotifyWebsiteNavigation() {
    await this.page.goto("https://open.spotify.com/");
    expect(await this.loginText.innerText()).toContain("Log in")
  }

  async hoverOnYourLibrary() {
    await this.page.waitForTimeout(3000);
    await this.yourLibraryMenu.hover();
  }

  async assertToolTip() {
    // const toolTipText = await this.toolTip.textContent();
    // await this.page.waitForTimeout(3000);
    // // console.log("TEXT::", toolTipText)
    // await expect(toolTipText).toBe("Collapse Your Library")
  }
}