Feature: It should be possible to search for places at the Norwegian Institute, http://www.yr.no

Scenario: Find Stockholm

    Given I wanna know the weather forecast for coming days
    When I look for Stockholm
    Then I must be able to get a weather forecast for Stockholm