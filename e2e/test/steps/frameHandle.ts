import { Given, Then, When } from "@cucumber/cucumber";
import FrameHandle from "../../pages/frameHandle";
import { pageFixture } from "../../hooks/pageFixture";

let frameHandle:FrameHandle;

Given('Navigate to the {string} url', async function (url) {
  frameHandle = new FrameHandle(pageFixture.page);
  await frameHandle.framesNavigation(url);
});


When('on frames page', async function () {
  await frameHandle.assertPage()
});

Then('assert the title', async function () {
  await frameHandle.assertTitle();
});
