package com.softcrylic.testautomation.step_definitions;

import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import com.softcrylic.testautomation.pages.*;

import static junit.framework.Assert.assertTrue;

public class SearchStepDefinitions {
    private WebDriver driver;
    private HomePage home;
    private SearchResultPage searchResult;

    @Before
    public void prepare() {
        driver = new FirefoxDriver();
    }

    @After
    public void cleanUp() {
        driver.close();
    }

    @Given("^I want to know the weather forecast for coming days$")
    public void prepareHomePage() {
        home = new HomePage(driver);
    }

    @When("^I search for (.*)$")
    public void search(String location) {
        searchResult = home.searchFor(location);
    }

    @Then("^I should be able to get a weather forecast for (.*)$")
    public void assertTheSearchResult(String locationName) {
        LocationPage location = searchResult.clickOnTopSearchResultLink();
        String actualHeadLine = location.getHeadLine();

        assertTrue(actualHeadLine.contains(locationName));
    }
}