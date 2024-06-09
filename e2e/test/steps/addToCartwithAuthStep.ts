import { Given, Then, When } from "@cucumber/cucumber";
import AddToCart from "../../pages/addToCart"
import { pageFixture } from "../../hooks/pageFixture";

let addToCart : AddToCart;
Given('User navigats to the bookcart application', async function () {
  addToCart = new AddToCart(pageFixture.page);
  await addToCart.addToCartNavigation()
});

When('user search for {string}', async function (string) {
  await addToCart.searchForBook(string);
});

When('user add the book to the cart', async function () {
  await addToCart.addToCart()
});

Then('the cart badge should get updated', async function () {
  await addToCart.checkCartBadge()
});


