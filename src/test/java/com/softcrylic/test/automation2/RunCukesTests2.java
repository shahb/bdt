package com.softcrylic.test.automation2;

import cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class) 
@Cucumber.Options(features = "src\\test\\resources\\com\\softcrylic\\testautomation2\\test2.feature",format = {"pretty", "html:target/cucumber","json:target/cucumber.json" })
//@Cucumber.Options(format = {"pretty", "html:target/cucumber","json:target/cucumber.json" })
public class RunCukesTests2  {
}
