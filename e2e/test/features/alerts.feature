Feature:Alerts Functionality

  Background:
    Given I am on the "javascript_alerts" page

  @alerts @all
  Scenario: Handle the alerts
    When I click on the JS "alert"
    Then it should be accepted

@alertsConfirm @all
  Scenario Outline: Handle the confirmation dialog <action>
    When I click on the JS "confirm"
    And I '<action>' the confirmation
    Then I should see the message '<message>'
    Examples:
      | action  | message             |
      | accept  | You clicked: Ok     |
      | dismiss | You clicked: Cancel |

@alertPrompt @all
  Scenario Outline: Handle the prompt dialog <action>
    When I click on the JS "prompt"
    And I enter the '<value>' and '<action>' the dialog
    Then I should see the '<value>' entered
    Examples:
      | action  | value             |
      | accept  | Testing the prompt     |
      | dismiss | null |