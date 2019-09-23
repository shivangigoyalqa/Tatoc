package project.Tatoc;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.annotations.BeforeTest;




public class AppTest {
	public static WebDriver driver; 
	
	
public void setup() {
	String driverpath="ChromeDriver/chromedriver";
	   System.setProperty("webdriver.chrome.driver",driverpath);
	   
		driver = new ChromeDriver();
		
		 driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS) ;
		 
}

public void navigateToPage(String url) {
	driver.get(url); 
}

public void closeBrowser() {
	driver.close();
}
	
}
