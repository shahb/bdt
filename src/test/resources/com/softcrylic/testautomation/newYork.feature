Feature: It should be possible to search for places at the Norwegian Institute, http://www.yr.no

Scenario: Search New York

    Given I wanna know the weather forecast for coming days
    When I look for New York
    Then I must be able to get a weather forecast for New York