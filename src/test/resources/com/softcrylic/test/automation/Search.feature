Feature: Search
In order to Find Right Products
As a Guest User
I want Search Functionality

Background:
 Given User is on home page

Scenario Perform a Search
  When Enter <search> in search box field and click on Go
  Then page loads  with correct products related to the search keyword
  
Examples:
   |search |
   | shirt |

Scenario Perform an advanced Search
  When Click on Advanced search 
  Then Landed on Search page with Womens and mens Tab
  When Click on Womens tab
  Then Advanced Search page should be displayed for Womens tab with multiple options
  When Click on Mens tab
  Then Advanced Search page should be displayed for Mens tab with multiple options
  When Enter <search> select options and click on Search
  Then page loads  with correct products related to the search keyword

Examples:
   |search |
   | shirt |