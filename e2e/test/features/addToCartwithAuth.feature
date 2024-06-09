Feature: Add to cart feature with Auth

  Background:
    Given User navigats to the bookcart application

  @auth
  Scenario: Authenticate Users - add to cart using lead
    When user search for "Roomies"
# And user add the book to the cart
# Then the cart badge should get updated