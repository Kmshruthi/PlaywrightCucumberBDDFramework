
import {Locator, Page, expect} from "@playwright/test"
export default class visualTest{
  loginText: Locator;


  constructor(private page: Page){
    this.loginText = this.page.getByText('Let’s build from here', { exact: true })


  }


  async gitHubWebsiteNavigation(){
    await this.page.goto("https://github.com/");
    await expect(this.loginText).toBeVisible();
  }


  async getScreenShot(){
    // await expect(this.page).toHaveScreenshot('githubPage.png');

    // expect(await this.page.screenshot()).toMatchSnapshot("screenshotPath");
  }
}