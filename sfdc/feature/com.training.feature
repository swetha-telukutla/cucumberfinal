
Feature: Title of your feature
  I want to use this template to test  the  Xero application 


     @testcase1
 Scenario:Navigate to Xero application
    Given valid url1 to launch the xero application
    And user enters valid user name  and valid password 
    When user click on login button1
    Then   Xero application home page1  display
    
    @testcase2
 Scenario:incorrect password
    Given valid url2 to launch  the application
     And user enters valid user name  invalid password in password field
    And when user click on login button2
    Then error message is  displayed
       
     @testcase3
 Scenario:incorrect username
    Given valid url3 to launch the xero application
    And provide invalid user name and  valid password 
    And valid password in password field
    When user click on login button3
    Then error message will display
       
    @testcase4
 Scenario:forgot pwd
    Given valid url4 to launch the xero application
    When uesr click on forgot password
    Then forgot password page is displayed
    When user enterd valid username in forgot password page and click on continue button
    Then password reset message is displayed
    
    @testcase5
    Scenario:free trail
    Given url5 to launch the application
    When  user click on free trail icon
    Then free trail page is displayed
    When user provides all the field values
    And click on get started button
    Then  user can see the inbox page 
    