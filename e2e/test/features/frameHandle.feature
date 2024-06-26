Feature: Handle the frames

  Background:
    Given Navigate to the "frames" url

@frame
  Scenario: Validate the frames
    When on frames page
    Then assert the title