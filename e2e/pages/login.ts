import { Locator, Page, expect } from "@playwright/test";


export default class login{
  username: Locator;
  password: Locator;
  loginButton: Locator;
  message: Locator;
  successMessage: Locator;

  constructor(private page: Page){
    this.username = page.getByLabel("username");
    this.password = page.getByLabel("password");
    this.loginButton = page.locator("//i[text()=' Login']");
    this.message = page.locator("//div[@id='flash-messages']//div[1]")
    this.successMessage = page.locator("//h3[text()='Basic Auth']/following-sibling::p")
  }

  async navigateUrl(subUrl){
    await this.page.goto(process.env.BASEURL + subUrl)
  }

  async addUsername(username: string){
    await this.username.fill(username)
  }

  async addpassword(password: string) {
    await this.password.fill(password)
  }

  async clickOnLoginButton() {
    await this.loginButton.click();
  }

  async redirectionPageAssertion(){
    await this.page.waitForURL('**/secure');
    expect(await this.page.url()).toContain("secure")
  }

  async assertLoggedInSuccessMessage(message: string){
    let textMessage = await this.message.innerText()
    expect(textMessage).toContain(message);
  }

  async assertSuccessMessage(){
    expect(await this.successMessage.innerText()).toContain("Congratulations! You must have the proper credentials.")
  }
}