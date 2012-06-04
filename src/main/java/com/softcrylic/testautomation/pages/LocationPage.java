package com.softcrylic.testautomation.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LocationPage {
    private WebDriver driver; 

    public LocationPage(WebDriver driver) {
        this.driver = driver;

        if (!driver.getTitle().contains("yr.no")) {
            throw new IllegalStateException("This is not yr.no: " + driver.getCurrentUrl());
        }
    }

    public String getHeadLine() {
        WebElement resultPageHeadLine = driver.findElement(By.cssSelector("h1"));
        return resultPageHeadLine.getText();
    }
}