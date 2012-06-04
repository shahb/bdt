package com.softcrylic.testautomation;

import static org.junit.Assert.*;
import junit.framework.TestCase;
import junit.framework.TestSuite;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

//@RunWith(Suite.class)
public class JunitClassTest extends TestCase{
	
	public JunitClassTest(){
		super(); 
	}
	public JunitClassTest(String TestName){
		super(TestName);
	}
	@Test
	public void testMyFirstTest() {
		System.out.print("Implemented");
	}

}
