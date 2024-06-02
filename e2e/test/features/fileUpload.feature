Feature:FileUpload Functionality

  Background:
    Given I am on the "upload" page

  @fileUpload @all
  Scenario: Successful File Upload
    When the file is selected and uploaded
    Then file upload should be successful
    