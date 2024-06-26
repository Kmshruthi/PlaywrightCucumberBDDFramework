import { FrameLocator, Locator, Page, expect } from "@playwright/test";


export default class frameHandle {
  framelocator: FrameLocator;


  constructor(private page: Page) {
    this.framelocator = page.frameLocator('frame[name="main"]');
  }


  async framesNavigation(url: string) {
    if (url.includes("frames")) {
      await this.page.goto("https://www.londonfreelance.org/courses/frames/");
    }
  }


  async assertPage(){
    expect(await this.page.url()).toContain("courses/frames/")
  }

  async assertTitle(){
    await expect(this.framelocator.getByRole('heading', { name: 'Title bar (top.html)' })).toBeVisible();
  }
}