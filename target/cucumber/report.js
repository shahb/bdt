$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('C:\Documents and Settings\mayurshahb\My Documents\GitHub\bdt\src\test\resources\com\softcrylic\testautomation\newYork.feature');
formatter.feature({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-institute,-http://www.yr.no",
  "description": "",
  "name": "It should be possible to search for places at the Norwegian Institute, http://www.yr.no",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-institute,-http://www.yr.no;search-new-york",
  "description": "",
  "name": "Search New York",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I wanna know the weather forecast for coming days",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I look for New York",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I must be able to get a weather forecast for New York",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "SearchStepDefinitions2.prepareHomePage()"
});
formatter.result({
  "duration": 12901958830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 11
    }
  ],
  "location": "SearchStepDefinitions2.search(String)"
});
formatter.result({
  "duration": 9176766872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 45
    }
  ],
  "location": "SearchStepDefinitions2.assertTheSearchResult(String)"
});
formatter.result({
  "duration": 6006038090,
  "status": "passed"
});
});