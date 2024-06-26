Feature: Hover functionality on a tool-tip

  Background:
    Given Navigate to the spotify website

  @toolTip
  Scenario:
    When hover over your library side menu
    Then tool-tip should be visible