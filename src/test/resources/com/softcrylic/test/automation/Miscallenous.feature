Feature: Misceallenous
In order to sign for email, Finding the nearest store and purchasing gzgift card
As a Guest User
I want Miscallenous Feature

Background:
  Given Customer is on Steve Maddens home page

Scenario: Sign up for email
  When Enter valid <email> in the email signup section and Click on Submit button
  Then Email signup page is loaded
  When Enter <email > <cemail> <firstname> <lastname> <ZipPostalcode> <mobilephone> 
  And Click Male radio button
  And Select any occupation from Occupation drop down
  And Select Birthday and Country and click Submit
  Then Email signup confirmation page is loaded
  When I opened my mail inbox
  Then Confirmation email is delivered to my email inbox

Examples:
  | email  	          | cemail  	                    | firstname | lastname | Zipcode | Mobile           |
  | tester1234@gmail.com | | tester1234@gmail.com | Testing   | Demo      | 46201   | 213-119-9013 |


Scenario: Test the Store Locator
  When User clicks on Shoe store locator
  Then User lands on stores page
  And Locate section in United States section exists on the page
  And Locate section International section exist on the page
  When Click on any Locate section
  Then Nearest stores list is dipalyed 

Scenario: Purchase a Gift Card
  When User clicks on Steve Madden Gift card image
  Then Gift card page is loaded
  When Enter <giftcardrecipentname> in Gift card receipent name field
  And Enter <yourname> in Your name field
  And Slect Amount from Amoutn field and Click on Add to Shopping Bag
  Then Basket page is loaded
  And Gift card is added to basket

Examples:
  | giftcardrecipentname | yourname |
  | Automation 	        | Tester     |

