import { Locator, Page, expect } from "@playwright/test";

export default class fileUpload{
  fileUpload: Locator;
  uploadButton: Locator;

  constructor(private page:Page){
    this.fileUpload = page.locator("#file-upload");
    this.uploadButton = page.locator("#file-submit")
  }

  async uploadFile(){
    await this.fileUpload.setInputFiles("e2e/helper/testData/one.jpg")
  }

async clickOnFileUploadButton(){
  await this.uploadButton.click()
}
}