import { Given, Then, When } from "@cucumber/cucumber";
import SpotifyPage from "../../pages/spotifyPage";
import { pageFixture } from "../../hooks/pageFixture";

let spotifyPage: SpotifyPage;

Given('Navigate to the spotify website', async function () {
  spotifyPage = new SpotifyPage(pageFixture.page);
  await spotifyPage.spotifyWebsiteNavigation();

});

When('hover over your library side menu', async function () {
  await spotifyPage.hoverOnYourLibrary();
});

Then('tool-tip should be visible', async function () {
  await spotifyPage.assertToolTip();
});
