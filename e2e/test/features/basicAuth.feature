Feature:Basic Auth Login Functionality

  Background:
    Given I am on the "basic_auth" page

  @basicAuth @all
  Scenario: Successful login with basic auth
    And success message should be seen