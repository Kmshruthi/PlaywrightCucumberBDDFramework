import { BeforeAll, AfterAll, After, Before, Status } from "@cucumber/cucumber"
import { Browser, Page, BrowserContext } from "@playwright/test"
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";

let page: Page;
let browser: Browser;
let context: BrowserContext

BeforeAll(async function () {
  getEnv();
  browser = await invokeBrowser();
})

Before(async function () {
  context = await browser.newContext();
  const page = await context.newPage();
  pageFixture.page = page
})

After(async function ({ pickle , result}) {
  if (result?.status == Status.PASSED || result?.status == Status.FAILED){
  const img = await pageFixture.page.screenshot({ path: `test-results/screenshots/${pickle.name}.png`, type: "png" })
  await this.attach(img, "image/png");
  }
  await pageFixture.page.close();
  await context.close();
})

AfterAll(async () => {
  await browser.close()
})