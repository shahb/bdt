$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('com\softcrylic\testautomation\feature\test.feature');
formatter.feature({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no",
  "description": "",
  "name": "It should be possible to search for places at the Norwegian Meteorological Institute, http://www.yr.no",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no;locate-stockholm",
  "description": "",
  "name": "Locate Stockholm",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I want to know the weather forecast for coming days",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I search for Stockholm",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I should be able to get a weather forecast for Stockholm",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "SearchStepDefinitions.prepareHomePage()"
});
formatter.result({
  "duration": 6901114985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stockholm",
      "offset": 13
    }
  ],
  "location": "SearchStepDefinitions.search(String)"
});
formatter.result({
  "duration": 838478118,
  "status": "failed",
  "error_message": "cucumber.runtime.CucumberException: Can\u0027t invoke com.softcrylic.testautomation.step_definitions.SearchStepDefinitions.search(String) in file:/C:/Documents%20and%20Settings/mayurshahb/My%20Documents/GitHub/bdt/target/classes/\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:38)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:30)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:45)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:248)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:76)\r\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:65)\r\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:20)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat cucumber.junit.FeatureRunner.run(FeatureRunner.java:72)\r\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:76)\r\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:36)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat cucumber.junit.Cucumber.run(Cucumber.java:81)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\nCaused by: java.lang.ClassCastException: org.openqa.selenium.remote.RemoteWebDriver cannot be cast to org.openqa.selenium.TakesScreenshot\r\n\tat com.softcrylic.testautomation.pages.HomePage.takeScreenShot(HomePage.java:32)\r\n\tat com.softcrylic.testautomation.pages.HomePage.searchFor(HomePage.java:25)\r\n\tat com.softcrylic.testautomation.step_definitions.SearchStepDefinitions.search(SearchStepDefinitions.java:70)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t... 39 more\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Stockholm",
      "offset": 47
    }
  ],
  "location": "SearchStepDefinitions.assertTheSearchResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri('com\softcrylic\testautomation\feature\test2.feature');
formatter.feature({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no",
  "description": "",
  "name": "It should be possible to search for places at the Norwegian Meteorological Institute, http://www.yr.no",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no;locate-new-york",
  "description": "",
  "name": "Locate New York",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I want to know the weather forecast for coming days",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I search for New York",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I should be able to get a weather forecast for New York",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "SearchStepDefinitions.prepareHomePage()"
});
formatter.result({
  "duration": 162560972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 13
    }
  ],
  "location": "SearchStepDefinitions.search(String)"
});
formatter.result({
  "duration": 470153897,
  "status": "failed",
  "error_message": "cucumber.runtime.CucumberException: Can\u0027t invoke com.softcrylic.testautomation.step_definitions.SearchStepDefinitions.search(String) in file:/C:/Documents%20and%20Settings/mayurshahb/My%20Documents/GitHub/bdt/target/classes/\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:38)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:30)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:45)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:248)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:76)\r\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:65)\r\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:20)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat cucumber.junit.FeatureRunner.run(FeatureRunner.java:72)\r\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:76)\r\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:36)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat cucumber.junit.Cucumber.run(Cucumber.java:81)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\nCaused by: java.lang.ClassCastException: org.openqa.selenium.remote.RemoteWebDriver cannot be cast to org.openqa.selenium.TakesScreenshot\r\n\tat com.softcrylic.testautomation.pages.HomePage.takeScreenShot(HomePage.java:32)\r\n\tat com.softcrylic.testautomation.pages.HomePage.searchFor(HomePage.java:25)\r\n\tat com.softcrylic.testautomation.step_definitions.SearchStepDefinitions.search(SearchStepDefinitions.java:70)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t... 39 more\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 47
    }
  ],
  "location": "SearchStepDefinitions.assertTheSearchResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri('com\softcrylic\testautomation\test.feature');
formatter.feature({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no",
  "description": "",
  "name": "It should be possible to search for places at the Norwegian Meteorological Institute, http://www.yr.no",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no;locate-stockholm",
  "description": "",
  "name": "Locate Stockholm",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I want to know the weather forecast for coming days",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I search for Stockholm",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I should be able to get a weather forecast for Stockholm",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "SearchStepDefinitions.prepareHomePage()"
});
formatter.result({
  "duration": 1127055677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stockholm",
      "offset": 13
    }
  ],
  "location": "SearchStepDefinitions.search(String)"
});
formatter.result({
  "duration": 564229640,
  "status": "failed",
  "error_message": "cucumber.runtime.CucumberException: Can\u0027t invoke com.softcrylic.testautomation.step_definitions.SearchStepDefinitions.search(String) in file:/C:/Documents%20and%20Settings/mayurshahb/My%20Documents/GitHub/bdt/target/classes/\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:38)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:30)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:45)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:248)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:76)\r\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:65)\r\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:20)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat cucumber.junit.FeatureRunner.run(FeatureRunner.java:72)\r\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:76)\r\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:36)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat cucumber.junit.Cucumber.run(Cucumber.java:81)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\nCaused by: java.lang.ClassCastException: org.openqa.selenium.remote.RemoteWebDriver cannot be cast to org.openqa.selenium.TakesScreenshot\r\n\tat com.softcrylic.testautomation.pages.HomePage.takeScreenShot(HomePage.java:32)\r\n\tat com.softcrylic.testautomation.pages.HomePage.searchFor(HomePage.java:25)\r\n\tat com.softcrylic.testautomation.step_definitions.SearchStepDefinitions.search(SearchStepDefinitions.java:70)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t... 39 more\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Stockholm",
      "offset": 47
    }
  ],
  "location": "SearchStepDefinitions.assertTheSearchResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri('com\softcrylic\testautomation\test.feature');
formatter.feature({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no",
  "description": "",
  "name": "It should be possible to search for places at the Norwegian Meteorological Institute, http://www.yr.no",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no;locate-stockholm",
  "description": "",
  "name": "Locate Stockholm",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I want to know the weather forecast for coming days",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I search for Stockholm",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I should be able to get a weather forecast for Stockholm",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "SearchStepDefinitions.prepareHomePage()"
});
formatter.result({
  "duration": 847300489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stockholm",
      "offset": 13
    }
  ],
  "location": "SearchStepDefinitions.search(String)"
});
formatter.result({
  "duration": 450068674,
  "status": "failed",
  "error_message": "cucumber.runtime.CucumberException: Can\u0027t invoke com.softcrylic.testautomation.step_definitions.SearchStepDefinitions.search(String) in file:/C:/Documents%20and%20Settings/mayurshahb/My%20Documents/GitHub/bdt/target/classes/\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:38)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:30)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:45)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:248)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:76)\r\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:65)\r\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:20)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat cucumber.junit.FeatureRunner.run(FeatureRunner.java:72)\r\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:76)\r\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:36)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat cucumber.junit.Cucumber.run(Cucumber.java:81)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\nCaused by: java.lang.ClassCastException: org.openqa.selenium.remote.RemoteWebDriver cannot be cast to org.openqa.selenium.TakesScreenshot\r\n\tat com.softcrylic.testautomation.pages.HomePage.takeScreenShot(HomePage.java:32)\r\n\tat com.softcrylic.testautomation.pages.HomePage.searchFor(HomePage.java:25)\r\n\tat com.softcrylic.testautomation.step_definitions.SearchStepDefinitions.search(SearchStepDefinitions.java:70)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t... 39 more\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Stockholm",
      "offset": 47
    }
  ],
  "location": "SearchStepDefinitions.assertTheSearchResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri('com\softcrylic\testautomation\test2.feature');
formatter.feature({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no",
  "description": "",
  "name": "It should be possible to search for places at the Norwegian Meteorological Institute, http://www.yr.no",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no;locate-new-york",
  "description": "",
  "name": "Locate New York",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I want to know the weather forecast for coming days",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I search for New York",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I should be able to get a weather forecast for New York",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "SearchStepDefinitions.prepareHomePage()"
});
formatter.result({
  "duration": 819315593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 13
    }
  ],
  "location": "SearchStepDefinitions.search(String)"
});
formatter.result({
  "duration": 600127700,
  "status": "failed",
  "error_message": "cucumber.runtime.CucumberException: Can\u0027t invoke com.softcrylic.testautomation.step_definitions.SearchStepDefinitions.search(String) in file:/C:/Documents%20and%20Settings/mayurshahb/My%20Documents/GitHub/bdt/target/classes/\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:38)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:30)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:45)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:248)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:76)\r\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:65)\r\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:20)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat cucumber.junit.FeatureRunner.run(FeatureRunner.java:72)\r\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:76)\r\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:36)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat cucumber.junit.Cucumber.run(Cucumber.java:81)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\nCaused by: java.lang.ClassCastException: org.openqa.selenium.remote.RemoteWebDriver cannot be cast to org.openqa.selenium.TakesScreenshot\r\n\tat com.softcrylic.testautomation.pages.HomePage.takeScreenShot(HomePage.java:32)\r\n\tat com.softcrylic.testautomation.pages.HomePage.searchFor(HomePage.java:25)\r\n\tat com.softcrylic.testautomation.step_definitions.SearchStepDefinitions.search(SearchStepDefinitions.java:70)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:601)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\t... 39 more\r\n"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 47
    }
  ],
  "location": "SearchStepDefinitions.assertTheSearchResult(String)"
});
formatter.result({
  "status": "skipped"
});
});