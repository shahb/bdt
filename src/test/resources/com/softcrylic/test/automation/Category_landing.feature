Feature: Category Landing Pages
In order to validate Categories
As a Guest or Existing user
I want Category Landing feature

Background:
  Given Customer is on Steve Maddens home page
  And Customer clicked on any category on home page
  And Customer is on any category landing page
  

Scenario: Navigate to any category
   When Customer is on any category landing page
   Then Category List page should display as per our selection
   And Category link is diaplayed on below of the Steve Maddens Logo

Scenario: Sort Categories by Name from A to Z
   When Customer is on any category landing page
   Then Filter item by Size color and price options should exist
   And Sort by functioanlity with A to Z
   And Sort by functionality with Z to A
   And Sort by functionality with Ascending
   And Sort by functionality with Descening
   








   