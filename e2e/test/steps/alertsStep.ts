import { Then, When } from "@cucumber/cucumber";
import AlertsPage from "../../pages/alerts"
import { pageFixture } from "../../hooks/pageFixture";

let alertsPage: AlertsPage;
When('I click on the JS {string}', async function (action) {
  alertsPage = new AlertsPage(pageFixture.page);
  if (action == "alert") {
    alertsPage.clickOnJSAlertButton()
  }
  else if (action == "confirm") {
    alertsPage.clickOnJSConfirmButton();
  }
  else {
    alertsPage.clickOnJSPromptButton();
  }
});

Then('it should be accepted', async function () {
  alertsPage.acceptAlert()
});


When('I {string} the confirmation', async function (action) {
  alertsPage.clickOnLabel(action)
});

Then('I should see the message {string}', async function (message) {
  alertsPage.confirmationMessageAssertion(message)
});

When('I enter the {string} and {string} the dialog', async function (value, action) {
  alertsPage.enterValueAndAction(value, action)
});

Then('I should see the {string} entered', async function (value) {
  alertsPage.assertPromptMessage(value)
});
