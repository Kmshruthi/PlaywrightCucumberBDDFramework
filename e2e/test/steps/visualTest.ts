import { Given, Then, When } from "@cucumber/cucumber";
import VisualTest from "../../pages/visualTest"
import { pageFixture } from "../../hooks/pageFixture";

let visualTest:VisualTest

Given('Navigate to gitHub website', async function () {
  visualTest = new VisualTest(pageFixture.page);
  visualTest.gitHubWebsiteNavigation()
});

When('page is loaded take the screenshot', async function () {
  visualTest.getScreenShot()
});

Then('assert the page', async function () {

});