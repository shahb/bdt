package com.softcrylic.testautomation;

import junit.framework.TestCase;
import junit.framework.TestSuite;
import cucumber.junit.Cucumber;

import org.junit.Test;
//import org.testng.annotations.*;
import org.junit.Before;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class) 
// @Cucumber.Options(format = "html:target/cukes")
@Cucumber.Options(format = {"pretty", "html:target/cucumber","json:target/cucumber.json" })
public class RunCukesTests  {
	/*@Test 
	public void testDummy(){}*/
}
