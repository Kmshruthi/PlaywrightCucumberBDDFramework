Feature: Login Functionality

  Background:
    Given I am on the "login" page

@login @all
  Scenario: Successful login with valid credentials
    When I fill in username with 'tomsmith'
    And I fill in password with 'SuperSecretPassword!'
    And I click the Submit button
    Then I should be redirected to the Secure Area page
    And I should see the text "You logged into a secure area!"


  @LoginEmpty @all
  Scenario Outline: Unsuccessful login with invalid credentials
    When I fill in username with '<username>'
    And I fill in password with '<password>'
    And I click the Submit button
    And I should see the text '<message>'
    Examples:
      | username  | password             | message                   |
      |           |                      | Your username is invalid! |
      |           | SuperSecretPassword! | Your username is invalid! |
      | tomsmith1 | SuperSecretPassword! | Your username is invalid! |
      | tomsmith  |                      | Your password is invalid! |
      | tomsmith  | SuperSecretPassword  | Your password is invalid! |
      | tomsmith1 | SuperSecretPassword  | Your username is invalid! |