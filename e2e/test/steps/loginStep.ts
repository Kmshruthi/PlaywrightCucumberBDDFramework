import { When, Then, Given } from "@cucumber/cucumber"
import { pageFixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/login"

let loginPage : LoginPage;
Given('I am on the {string} page', async function (subUrl) {
    loginPage = new LoginPage(pageFixture.page)
    await loginPage.navigateUrl(subUrl);
});

When('I fill in username with {string}', async function (username) {
    await loginPage.addUsername(username)
});


When('I fill in password with {string}', async function (password) {
    await loginPage.addpassword(password)
});



When('I click the Submit button', async function () {
    await loginPage.clickOnLoginButton()
});



Then('I should be redirected to the Secure Area page', async function () {
    await loginPage.redirectionPageAssertion();
});

Then('I should see the text {string}', async function (message) {
    await loginPage.assertLoggedInSuccessMessage(message);
});

Then('success message should be seen', async function () {
    await loginPage.assertSuccessMessage();
});