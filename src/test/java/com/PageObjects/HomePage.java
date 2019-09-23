package com.PageObjects;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

import org.openqa.selenium.By;
import org.openqa.selenium.By.ByClassName;
import org.testng.Assert;
import org.openqa.selenium.WebElement;

import project.Tatoc.AppTest;

public class HomePage extends AppTest{
	
	private WebElement logo=driver.findElement(By.className("title"));
	public WebElement basicCourse =driver.findElement(By.xpath("//a[contains(@href,'/tatoc/basic')]"));
	public WebElement AdvanceCourse =driver.findElement(By.xpath("//a[contains(@href,'/tatoc/advanced')]"));
	private WebElement footer=driver.findElement(By.className("footer"));
	
	
	public int verifyHomePage() {
		int respCode=200;
		try {
			
     	   HttpURLConnection huc = null;
     	   URL url=new URL("http://10.0.1.86/tatoc");
     	 HttpURLConnection connection = (HttpURLConnection)url.openConnection();
     	 connection.setRequestMethod("GET");
     	 connection.connect();

     	 int code = connection.getResponseCode();
            return respCode;
           
        }catch (Exception e){}
		return respCode;
	}

public boolean verifyHeading() {
		
		return logo.isDisplayed();
	}
public int verifygridPage() {
	int respCode=200;
	try {
		
 	   HttpURLConnection huc = null;
 	   URL url=new URL("http://10.0.1.86/tatoc/basic/grid/gate");
 	 HttpURLConnection connection = (HttpURLConnection)url.openConnection();
 	 connection.setRequestMethod("GET");
 	 connection.connect();

 	 int code = connection.getResponseCode();
        return respCode;
       
    }catch (Exception e){}
	return respCode;
}

public int verifyHoverMenuPage() {
	int respCode=200;
	try {
		
 	   HttpURLConnection huc = null;
 	   URL url=new URL("http://10.0.1.86/tatoc/advanced/hover/menu");
 	 HttpURLConnection connection = (HttpURLConnection)url.openConnection();
 	 connection.setRequestMethod("GET");
 	 connection.connect();

 	 int code = connection.getResponseCode();
        return respCode;
       
    }catch (Exception e){}
	return respCode;
}
public boolean verifyFooter() {
	
	return footer.isDisplayed();
}
public String gridHeading() {
	WebElement gridheading =driver.findElement(By.tagName("h1"));
	return gridheading.getText();
}
public String verifyInstructions() {
	 WebElement instruction=driver.findElement(By.tagName("h3"));
	return instruction.getText();
}

public boolean DragButton() {
	
	Boolean button = driver.findElement(By.xpath("//div[contains(text(),'DRAG ME')]")).isEnabled();
    return button;
}

public int WindowLinks() throws IOException {
	HttpURLConnection huc = null;
	String launchLink = driver.findElement(By.xpath("//a[contains(text(),'Launch Popup Window')]")).getAttribute("href");
	huc = (HttpURLConnection)(new URL(launchLink).openConnection());
    huc.connect();
    int respCode = huc.getResponseCode();
    Assert.assertEquals(respCode, 200);
    String proceedLink = driver.findElement(By.xpath("//a[contains(text(),'Proceed')]")).getAttribute("href");
	huc = (HttpURLConnection)(new URL(launchLink).openConnection());
    huc.connect();
    int respCode2 = huc.getResponseCode();
    return respCode2;
}
public Boolean[] WindowButton() {
	Boolean bar = driver.findElement(By.id("name")).isEnabled();
	Boolean bar2 = driver.findElement(By.id("submit")).isEnabled();
	Boolean[] bool=new Boolean[2];
	bool[0]=bar;
	bool[1]=bar2;
	return bool;
}

}
