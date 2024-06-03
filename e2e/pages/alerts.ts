import { Locator, Page, expect } from "@playwright/test";

export default class Alerts {
  clickOnJSAlert: Locator;
  clickOnJSConfirm: Locator;
  alertSuccessMessage: Locator;
  clickOnJSPrompt: Locator;

  constructor(private page: Page) {
    this.clickOnJSAlert = page.getByRole("button", { "name": "Click for JS Alert" })
    this.clickOnJSConfirm = page.getByRole("button", { "name": "Click for JS Confirm" })
    this.clickOnJSPrompt = page.getByRole("button", { "name": "Click for JS Prompt" })
    this.alertSuccessMessage = page.locator('#result')
  }

  async clickOnJSAlertButton() {
    await this.clickOnJSAlert.click()
  }

  async acceptAlert() {
    this.page.on('dialog', async dialog => await dialog.accept());
  }

  async clickOnJSConfirmButton() {
    await this.clickOnJSConfirm.click()
  }

  async clickOnJSPromptButton() {
    await this.clickOnJSPrompt.click()
  }

  async clickOnLabel(action: string) {
    if (action == "accept") {

      await this.page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');

        // Verify Dialog Message
        expect(await dialog.message()).toContain('I am a JS Confirm');

        await dialog.accept()
      });
    } else {
      await this.page.on('dialog', dialog => dialog.dismiss());
    }
  }

  async confirmationMessageAssertion(message: string) {
    await expect(this.alertSuccessMessage).toContainText(message);
  }

  async enterValueAndAction(value: string, action: string) {
    if (action == "accept") {
      await this.page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');

        // Verify Dialog Message
        expect(await dialog.message()).toContain('I am a JS prompt');

        await dialog.accept(value)
      });
    } else {
      await this.page.on('dialog', dialog => dialog.dismiss());
    }
  }


  async assertPromptMessage(value: string) {
    await expect(this.alertSuccessMessage).toContainText("You entered: " + value);
  }
}

