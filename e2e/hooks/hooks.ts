import { BeforeAll, AfterAll, After, Before, Status } from "@cucumber/cucumber"
import { Browser, Page, BrowserContext } from "@playwright/test"
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
const fs = require('fs-extra');
let page: Page;
let browser: Browser;
let context: BrowserContext

BeforeAll(async function () {
  getEnv();
  browser = await invokeBrowser();
})

Before(async function ({ pickle }) {
  const scenarioName = pickle.name + pickle.id;
  let creds = {
    "user": "admin",
    "password": "admin"
  }
  if (scenarioName.includes("basic auth")) {
    context = await browser.newContext({
      httpCredentials: {
        username: "admin",
        password: "admin"
      }
    });
  } else {
    context = await browser.newContext({
      storageState: getStorageState(pickle.name),
      recordVideo: {
        dir: "test-results/videos",
      },
    });
  }
  const page = await context.newPage();
  pageFixture.page = page
})

After(async function ({ pickle, result }) {
  let videoName: string;
  await pageFixture.page.waitForTimeout(3000)
  if (result?.status == Status.PASSED || result?.status == Status.FAILED) {
    const img = await pageFixture.page.screenshot({ path: `test-results/screenshots/${pickle.name}.png`, type: "png" })
    await this.attach(img, "image/png");
    videoName = await pageFixture.page.video().path();
    fs.rename(videoName, `test-results/videos/${pickle.name}.webm`)
  }

  await pageFixture.page.close();
  await context.close();

})

AfterAll(async () => {
  await browser.close()
})

function getStorageState(user: string): string | { cookies: { name: string; value: string; domain: string; path: string; expires: number; httpOnly: boolean; secure: boolean; sameSite: "Strict" | "Lax" | "None"; }[]; origins: { origin: string; localStorage: { name: string; value: string; }[]; }[]; } {
  if (user.includes("lead")) {
    return "e2e/helper/auth/lead.json";
  } else {
    return "e2e/helper/auth/admin.json";
  }


}
