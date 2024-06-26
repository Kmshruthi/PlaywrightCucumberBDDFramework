Feature: Visual comparion tests

Background:
  Given Navigate to gitHub website

@visualTest
Scenario: Assert the screenshots
  When page is loaded take the screenshot
  Then assert the page