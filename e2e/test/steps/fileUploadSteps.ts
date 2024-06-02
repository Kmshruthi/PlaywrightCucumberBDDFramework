import { Then, When } from "@cucumber/cucumber";
import FileUpload from "../../pages/fileUpload"
import { pageFixture } from "../../hooks/pageFixture";

let fileUpload: FileUpload;
When('the file is selected and uploaded', async function () {
  fileUpload = new FileUpload(pageFixture.page)
  await fileUpload.uploadFile()
});

Then('file upload should be successful', async function () {
  await fileUpload.clickOnFileUploadButton()
});