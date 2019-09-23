package com.Stepdef;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.testng.ITestResult;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import project.Tatoc.AppTest;

@CucumberOptions(
		
		features= "Resources",
		glue={"com.Stepdef"},
		tags = {"@Tatoc"},
		monochrome = true,
		plugin=
				{"pretty",
				"html:target/cucumber-reports/cucumber-pretty",
				"json:target/cucumber-reports/CucumberTestReport.json",
				"rerun:target/cucumber-reports/re-run.txt"
				}
				
		)

public class CucumberRunner_Test extends AbstractTestNGCucumberTests {
	 @BeforeClass
	 public void startTest() {
		 AppTest at = new AppTest();
		 at.setup();
	 }
	
	 @AfterClass
	 public static void after() {
		 AppTest at = new AppTest();
		 at.closeBrowser();
		}
	 
	

}