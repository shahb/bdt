Feature: Item Detailed Page
In order to validate Item page functionality
As a guest or existing customer
I want product feature

Background:
  Given Customer is on Steve Maddens home page
  And Customer clicked on any category on home page
  And Customer clicked on any item on sub category page
  And Customer is on item detail page

Scenario: Test Selection of Multiple Colors on Product Page
  When Customer click on any color in colors available section
  Then Main image of the item should change as per our selection
  And Selcted color should be preselected in color dropdown
  And Thumbnail images should change as per the selected color
  When Cusomer selected color form drop down menu
  Then Main image of the item should change as per our selection
  And Under color available section respectivecolor should be selected
  And Thumbanil images should change as per the selected color

Scenario: Description Reviews Size Chart Shipping and Return Policy on Product Page
  When Customer is on Item detail page
  Then Tabs for DESCRIPTION REVIEWS SIZE CHART SHIPPING and RETURN POLICY are displayed
  When Customer clicks on DESCRIPTION or REVIEWS or SIZE or CHART or SHIPPING or RETURN POLICY
  Then Page is not refreshed but respective information is displayed on the layer below 


Scenario: Alternate Views on Product Page
  When Cutomer click on any of the thumbnail image
  Then Principal image should replace the selected thumbnail image
  And Cusomter should able to see the alternate views of the item

Scenario: Writing a Review on the Product Page
  When Customer is on Item detail page
  And Review rate with review count and snippet is dipalyed
  And Total number of reviews count and write a review link is displayed
  When Click on Read Review Link
  Then Focus should be moved to Review tab 
  And List of reviews should displayed
  When Click on Write Review link
  Then Customer is on Write Page
  When Enter <reviewheadline> <comments> <nickname> <location> 
  And select Overall rating and click Preview
  Then Preview of the reveiw is dispalyed
  When Customer checks user agreement option and click on Submit
  Then Confirmation of the review is displayed

Examples:
  | reviewheadline     | comments       | nickname | location  |
  | Cucumber Testing | Ony for testing| Testing   |New York |


Scenario: Recently View Items on Product Page
  When Customer is on Item detail page
  Then Recently Viewed products section is displayed on footer of the page

Scenario: Add to Basket on Product Page
  When Customer selects color size and quantity
  And Customer click on Add to Bag
  Then Item should be added to Bag
  And Item in Bag should consits Same color size and quantity