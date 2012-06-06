Feature: Login
In order to validate Login
As an existing customer
I want Login feature

Background:
  Given Landed on Login page of Steve Maddens site


Scenario: Login to your account
   When I entered valid <useremail> and <password>
   And Click on login button
   Then Orders page should be displayed with Welcome message
   And Account user name is dispalyed on right top of the page
   And Orders history is displayed with list of orders 

Examples:
   | useremail		     | password  |
   | mahesh.ambati@gmail.com   | 123456785 | 

Scenario: Forgot Password
   When I click on Forgot password link on login page
   Then Reover Password page is loaded
   When I enter valid <email>
   And I click on Submit
   Then Recover Password Confirmation page is displayed
   When I opened my mail inbox
   Then Confirmation email is delivered to my email inbox
 
Examples:
   | email			     |
   | mahesh.ambati@gmail.com   |