Feature: Checkout
In order to Place orders
As Guest and Existing Customer
I want Checkout feature

Background:
  Given Customer is on Steve Maddens home page
  And Customer clicked on any category on home page
  And Customer clicked on any item on sub category page
  And Customer is on item detail page
  And Customer selected the color size quantity 
  And Customer added the product to basket
  And Customer is on Basket page


Scenario: Guest with discount code
   When Customer entered valid <discountcode>
   Then Promotional code information is displayed
   When Customer landed on Checkout page
   Then Merchandising total price and shipping price and tax and order total displayed
   When Customer place order 
   Then Customer should be seen order summary page
       
Examples:
   | discountcode |
   | SMRETAIL15   |

Scenario: Guest without discount code
   When I do not enter discount code in basket page
   And Customer landed on Checkout page
   And Enter <firstname> <lastname> <Addressline1> <City> <stateprovince> <Zipcode> <Country> <Phone> <email> <reenter email> in Billing Addresss
   And Enter <firstname> <lastname> <Addressline1> <City> <stateprovince> <Zipcode> <Country> <Phone> in Shipping Addresss
   Then Billing and Shipping Address displayed as per our entry
   Then Merchandising total price and shipping price and tax and order total displayed as expected
   When I place order 
   Then I should be seen order summary page

   
Examples:
   | firstname  |lastname | Addressline1                     | City 	   | stateprovince     | zipcode | Country       | Phone             | email | reenter email |
   | Automation | Tester  | 2300 Southeastern Avenue |Indianapolis  |IN		   | 46201   | UnitedStates|(317) 266-3300 |
   | Automation1| Tester1 | 600 Alexander Road          |Princeton     |NJ		   | 08540   | UnitedStates|(609) 452-7638 |


Scenario: Checkout as Registered User
   When I do not enter discount code in basket page
   And Customer landed on Checkout page
   And Login to the site with <useremail> and <password>
   Then Merchandising total price and shipping price and tax and order total displayed
   When Customer place order 
   Then Customer should be seen order summary page


Examples:
   | useremail		     | password  |
   | mahesh.ambati@gmail.com | 123456785 | 
