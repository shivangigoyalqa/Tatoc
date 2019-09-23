package com.Stepdef;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;


import org.openqa.selenium.*;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;

import com.PageObjects.HomePage;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import project.Tatoc.AppTest;

public class HomePageStepDef extends AppTest{
HomePage hp;
	static String color3="";
	static String color4="";
	static String title="";
	static ArrayList<String> tabs2;
	@Before
	public void verifyTest() throws Exception {
		driver.get("http://10.0.1.86/tatoc");
		hp= new HomePage();
		Thread.sleep(20);
		
	}
	
	@Given("^user is on tatoc homepage$")
	public void verifyHomePage() {
		Assert.assertEquals(hp.verifyHomePage(),200);
	}
	
	@Then("^It should have Tatoc heading on it$")
	public void verifyHeading() {
		Assert.assertTrue(hp.verifyHeading());
	}

@When("^we click on basic course$")
public void verifyclick() {
	hp.basicCourse.click();
}
@Then("^it redirect us grid gate page$")
public void verifygridPage() {
	Assert.assertEquals(hp.verifygridPage(),200);
	driver.navigate().back();
}

@When("^we click on advance course$")
public void verifyclickadvance() {
	hp.AdvanceCourse.click();
}
@Then("^it redirect us hover menu page$")
public void verifyHoverMenuPage() {
	Assert.assertEquals(hp.verifyHoverMenuPage(),200);
	driver.navigate().back();
}

@Then("^it should have a footer$")
public void verifyFooter() {
	Assert.assertTrue(hp.verifyFooter());
}

@Given("^we are on grid page$")
public void verifyGridPage() {
	driver.get("http://10.0.1.86/tatoc/basic/grid/gate");
	String errorPage = driver.getTitle();
	 Assert.assertEquals(errorPage, "Grid Gate - Basic Course - T.A.T.O.C");
}

@Then("^Grid Gate heading should be there$")
public void gridHeading() {
	Assert.assertEquals(hp.gridHeading(),"Grid Gate");
}
@When("^we click on green box$")
public void Greenclick() {
	
	driver.findElement(By.className("greenbox")).click();
	

}
@Then("^frame dungeon page will open$")
public void FrameDungeon() {
	String nextPage = driver.getTitle();
    Assert.assertEquals(nextPage, "Frame Dungeon - Basic Course - T.A.T.O.C");
	driver.navigate().back();
}

@When("^we click on red box$")
public void Redclick() {

	driver.findElement(By.className("redbox")).click();
   
}

@Then("^error page will open$")
public void ErrorPage() {
	String errorPage = driver.getTitle();
    Assert.assertEquals(errorPage, "Error - T.A.T.O.C");
    driver.navigate().back();
}

@Then("^Instructions should be there$")
public void verifyInstructions() {
	Assert.assertEquals(hp.verifyInstructions(), "Instructions");
}

@Given("^we are on frame dungeon page$")
public void verifyFrameDungeonPage() {
	driver.get("http://10.0.1.86/tatoc/basic/frame/dungeon");
	String errorPage = driver.getTitle();
	 Assert.assertEquals(errorPage, "Frame Dungeon - Basic Course - T.A.T.O.C");
}

@Then("^boxes should be enabled$")
public void BoxCheck() {
	
	Boolean check = true;
	driver.switchTo().frame("main");
	Boolean box1 = driver.findElement(By.xpath("//div[contains(text(),'Box 1')]")).isEnabled();
	Assert.assertEquals(box1, check);
	driver.switchTo().frame("child");
	Boolean box2 = driver.findElement(By.xpath("//div[contains(text(),'Box 2')]")).isEnabled();
	Assert.assertEquals(box2, check);
	//driver.switchTo().parentFrame();
}

@When("^we click on proceed link without changing color$")
public void ErrorCheckClick() {
	driver.switchTo().frame("main");
    color3 = driver.findElement(By.xpath("//div[contains(text(),'Box 1')]")).getAttribute("class");
	driver.switchTo().frame("child");
	 color4 = driver.findElement(By.xpath("//div[contains(text(),'Box 2')]")).getAttribute("class");
	driver.switchTo().parentFrame();
	driver.findElement(By.xpath("//a[contains(text(),'Proceed')]")).click();
}

@Then("^it will redirect to error page$")
public void ErrorCheck() {
	
	if(color3.equals(color4))
		Assert.assertEquals(driver.getTitle(), "Drag - Basic Course - T.A.T.O.C");
	else 
		Assert.assertEquals(driver.getTitle(), "Error - T.A.T.O.C");
	
	driver.navigate().back();
}
@When("^we click on proceed link after changing color$")
public void FrameColor() {
	
	
	
	driver.switchTo().frame("main");
	String color = driver.findElement(By.xpath("//div[contains(text(),'Box 1')]")).getAttribute("class");
	
	String color2;
	do {
		driver.switchTo().frame("child");
		color2 = driver.findElement(By.xpath("//div[contains(text(),'Box 2')]")).getAttribute("class");
		driver.switchTo().parentFrame();
		if(color.equals(color2)) {
			
			driver.findElement(By.xpath("//a[contains(text(),'Proceed')]")).click();
			
		}
		else {
			
			driver.findElement(By.xpath("//a[contains(text(),'Repaint Box 2')]")).click();
			
		}
		
	}while(!(color.equals(color2)));
	
	title = driver.getTitle();

	
}
@Then("^it will redirect to drag page$")
public void Checkdrag() {
	Assert.assertEquals(title, "Drag - Basic Course - T.A.T.O.C" );
}

@Given("^we are on drag around page$")
public void verifyDragPage() {
	driver.get("http://10.0.1.86/tatoc/basic/drag");
	String errorPage = driver.getTitle();
	 Assert.assertEquals(errorPage, "Drag - Basic Course - T.A.T.O.C");
}

@Then("^drag me button should be enabled$")
public void DragButton() {
	
		Assert.assertTrue(hp.DragButton());
}

@When("^we click on proceed button without draging$")
public void DragErrorTestClick() {
	
	driver.findElement(By.xpath("//a[contains(text(),'Proceed')]")).click();
    
   
    
}
@Then("^it will redirect page to error page$")
public void DragErrorTest() {
	Assert.assertEquals(driver.getTitle(), "Error - T.A.T.O.C");
	driver.navigate().back();
}

@When("^we click on proceed button after draging$")
public void DragTestClick() {
    
	
	WebElement From=driver.findElement(By.xpath("//div[contains(text(),'DRAG ME')]"));	
    WebElement To=driver.findElement(By.xpath("//div[contains(text(),'DROPBOX')]"));									
    Actions act=new Actions(driver);							
    act.dragAndDrop(From, To).build().perform();
    driver.findElement(By.xpath("//a[contains(text(),'Proceed')]")).click();
   
    
    
	
}
@Then("^it will redirect to popup window page$")
public void DragTest() {
	 Assert.assertEquals(driver.getTitle(), "Windows - Basic Course - T.A.T.O.C");
}

@Given("^we are on popup window page$")
public void verifyPopUpPage() {
	driver.get("http://10.0.1.86/tatoc/basic/windows");
	String title = driver.getTitle();
	 Assert.assertEquals(title, "Windows - Basic Course - T.A.T.O.C");
}

@Then("^launch window link should be valid$")
public void WindowLinks() throws IOException {
	
    Assert.assertEquals(hp.WindowLinks(), 200);
    
}


@When("^we click on launch window link$")
public void WindowButtonClick()
{
	driver.findElement(By.xpath("//a[contains(text(),'Launch Popup Window')]")).click();
	ArrayList<String> tabs2 = new ArrayList<String> (driver.getWindowHandles());
	driver.switchTo().window(tabs2.get(1));
	}

@Then("^input box and submit button should be enabled$")
public void WindowButton() {
	  Boolean[] ans = hp.WindowButton(); 
	Assert.assertTrue(ans[0]);
	
	Assert.assertTrue(ans[1]);
	
	
}
 @When("^we click on proceed button$")
 public void WindowErrorClick() {
	 driver.findElement(By.xpath("//a[contains(text(),'Proceed')]")).click(); 
 }
@Then("^it will redirect window page to error page$")
public void WindowErrorTest() {
	
	Assert.assertEquals(driver.getTitle(), "Error - T.A.T.O.C");
	driver.navigate().back();
}
@When("^we submit form empty and click on proceed button$")
public void WindowNameTestClick() {

	String parentHandle = driver.getWindowHandle();
	JavascriptExecutor js=(JavascriptExecutor) driver;
	js.executeScript("document.querySelector(\"a[onclick='launchwindow();']\")" + ".click()");
	for (String winHandle : driver.getWindowHandles()) {
		driver.switchTo().window(winHandle);
	}
	driver.findElement(By.id("submit")).click();
	driver.switchTo().window(parentHandle);
	js.executeScript("document.querySelector(\"a[onclick='gonext();']\")" + ".click()");

    
	
}

@Then("^it will redirect again to error page$")
public void WindowNameTest() {
	Assert.assertEquals(driver.getTitle(), "Error - T.A.T.O.C");
	driver.navigate().back();
}

@When("^we submit form after entering name and click on proceed button$")
public void WindowTestClick() {
	
	String parentHandle = driver.getWindowHandle();
	JavascriptExecutor js=(JavascriptExecutor) driver;
	js.executeScript("document.querySelector(\"a[onclick='launchwindow();']\")" + ".click()");
	for (String winHandle : driver.getWindowHandles()) {
		driver.switchTo().window(winHandle);
	}
	js.executeScript("document.getElementById('name').value= 'Shivangi';");
	js.executeScript("document.getElementById('submit').click();");
	driver.switchTo().window(parentHandle);
	js.executeScript("document.querySelector(\"a[onclick='gonext();']\")" + ".click()");
    
}

@Then("^it will redirect again to cookie handling page$")
public void WindowTest() {
	Assert.assertEquals(driver.getTitle(), "Cookie Handling - Basic Course - T.A.T.O.C");
}


@Given("^we are on cookie page$")
public void CookieErrorPage() {
	driver.get("http://10.0.1.86/tatoc/basic/cookie");
	String title = driver.getTitle();
	 Assert.assertEquals(title, "Cookie Handling - Basic Course - T.A.T.O.C");
}

@When("^we click on proceed button on cookie page$")
public void ClickProceed() {
	driver.findElement(By.xpath("//a[contains(text(),'Proceed')]")).click(); 
}

@Then("^it will give error page$")
public void CookieErrorTest() {
	
	Assert.assertEquals(driver.getTitle(), "Error - T.A.T.O.C");
	driver.navigate().back();
}

@When("^we generate token and click on proceed button$")
public void cookieGenerateTokenAndProceed() {
	driver.findElement(By.xpath("//a[contains(text(),'Generate Token')]")).click(); 
	driver.findElement(By.xpath("//a[contains(text(),'Proceed')]")).click(); 
}

@Then("^it should redirect to error page$")
public void errorTest() {
	Assert.assertEquals(driver.getTitle(), "Error - T.A.T.O.C");
	driver.navigate().back();
}

@When("^we set cookie and then click on proceed$")
public void cookieSetProperly() {
	driver.findElement(By.xpath("//a[contains(text(),'Generate Token')]")).click(); 
	String cookie = driver.findElement(By.id("token")).getText();
	String[] cookiesplit = cookie.split(": ");
	
	Cookie newcookie = new Cookie("Token", cookiesplit[1]);
	
	driver.manage().addCookie(newcookie);
	driver.findElement(By.xpath("//a[contains(text(),'Proceed')]")).click(); 
	
	
}

@Then("^it will redirect to end page$")
public void TestEndPage()
{
	Assert.assertEquals( driver.getTitle(), "End - T.A.T.O.C");
}


}