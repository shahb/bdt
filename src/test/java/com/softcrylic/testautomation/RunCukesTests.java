package com.softcrylic.testautomation;

import cucumber.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
// @Cucumber.Options(format = "html:target/cukes")
@Cucumber.Options(format = {"pretty", "html:target/cucumber","json:target/cucumber.json" })
public class RunCukesTests {

}
