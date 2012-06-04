package com.softcrylic.testautomation.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SearchResultPage { 
    private WebDriver driver; 

    public SearchResultPage(WebDriver driver) {
        this.driver = driver;
        if (!driver.getTitle().contains("yr.no")) {
            throw new IllegalStateException("This is not yr.no: " + driver.getCurrentUrl());
        }
    }

    public LocationPage clickOnTopSearchResultLink() {
        String topLinkXPathExpression = "//div[@id='directories']/table/tbody/tr/td[2]/a";
        WebElement topResultLink = driver.findElement(By.xpath(topLinkXPathExpression));
        topResultLink.click();

        return new LocationPage(driver);
    }
}