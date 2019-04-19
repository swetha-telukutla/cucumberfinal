package com.training.step;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.relevantcodes.extentreports.LogStatus;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps extends ReusableMethods {
	@Given("^valid url(\\d+) to launch the xero application$")
	public void valid_url_to_launch_the_xero_application(int arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		startExtentReport();
		initializeDriver();
		launch("https://login.xero.com/");

	}

	@Given("^user enters valid user name  and valid password$")
	public void user_enters_valid_user_name_and_valid_password() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String[][] recData = readExcelSheet(dt_path, "Sheet1");
		WebElement emailAdress = driver.findElement(By.xpath(" //input[@placeholder='Email address']"));
		enterText(emailAdress, recData[0][0], "username");
		WebElement passWord = driver.findElement(By.xpath("//input[@id='password']"));
		enterText(passWord, recData[0][1], "password");
	}

	@When("^user click on login button(\\d+)$")
	public void user_click_on_login_button(int arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		WebElement login = driver.findElement(By.xpath("//button[@id='submitButton']"));
		clickObject(login, "login");
		Thread.sleep(2000);
		endExtentReport();
	}

	@Then("^Xero application home page(\\d+)  display$")
	public void xero_application_home_page_display(int arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("Xero application home page is dislpayed");
	}

	@Given("^valid url(\\d+) to launch  the application$")
	public void valid_url_to_launch_the_application(int arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		initializeDriver();
		launch("https://login.xero.com/");

	}

	@Given("^user enters valid user name  invalid password in password field$")
	public void user_enters_valid_user_name_invalid_password_in_password_field() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String[][] recData = readExcelSheet(dt_path, "Sheet2");
		WebElement emailAdress = driver.findElement(By.xpath(" //input[@placeholder='Email address']"));
		enterText(emailAdress, recData[0][0], "username");
		WebElement passWord = driver.findElement(By.xpath("//input[@id='password']"));
		enterText(passWord, recData[0][1], "password");

	}

	@Given("^when user click on login button(\\d+)$")
	public void when_user_click_on_login_button(int arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		WebElement login = driver.findElement(By.xpath("//button[@id='submitButton']"));
		clickObject(login, "login");
	}

	@Then("^error message is  displayed$")
	public void error_message_is_displayed() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		String errorMessage = driver.findElement(By.xpath("//button[@id='submitButton']")).getText();
		System.out.println(errorMessage);
		// String actualMessage = ("Your email or password is incorrect");
		// CompareString(actualMessage, errorMessage);
		Thread.sleep(2000);
		endExtentReport();
	}

	@Given("^provide invalid user name and  valid password$")
	public void provide_invalid_user_name_and_valid_password() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		startExtentReport();
		initializeDriver();
		Thread.sleep(4000);
		launch("https://login.xero.com/");
		String[][] recData = readExcelSheet(dt_path, "Sheet3");
		WebElement emailAdress = driver.findElement(By.xpath(" //input[@placeholder='Email address']"));
		enterText(emailAdress, recData[0][0], "username");

		WebElement passWord = driver.findElement(By.xpath("//input[@id='password']"));
		enterText(passWord, recData[0][1], "password");
		WebElement login = driver.findElement(By.xpath("//button[@id='submitButton']"));
		clickObject(login, "login");

	}

	@Given("^valid password in password field$")
	public void valid_password_in_password_field() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("valid password is given");

	}

	@Then("^error message will display$")
	public void error_message_will_display() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

		String errorMessage = driver.findElement(By.xpath("//button[@id='submitButton']")).getText();
		System.out.println(errorMessage);
		// String actualMessage=("Your email or password is incorrect");
		// CompareString(actualMessage, errorMessage);
		Thread.sleep(2000);
		endExtentReport();
	}

	@When("^uesr click on forgot password$")
	public void uesr_click_on_forgot_password() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		startExtentReport();
		Thread.sleep(4000);
		initializeDriver();
		launch("https://login.xero.com/");

		WebElement forgotpw = driver.findElement(By.xpath("//a[contains(@class,'forgot-password-advert')]"));
		clickObject(forgotpw, "forgot password");
		System.out.println("Salesforce forgot password page is displayed");
		Logger.log(LogStatus.PASS, forgotpw + "Salesforce forgot password page is displayed ");

	}

	@Then("^forgot password page is displayed$")
	public void forgot_password_page_is_displayed() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("forgot password page is displayed");

	}

	@When("^user enterd valid username in forgot password page and click on continue button$")
	public void user_enterd_valid_username_in_forgot_password_page_and_click_on_continue_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String[][] recData = readExcelSheet(dt_path, "Sheet1");
		WebElement emailAdress = driver.findElement(By.xpath(" //input[@placeholder='Email address']"));
		enterText(emailAdress, recData[0][0], "username");
		WebElement sendLinkbutton = driver.findElement(By.xpath("//a[@class='x-btn blue']"));
		sendLinkbutton.click();
		System.out.println("Password reset message page is displayed.");
		Logger.log(LogStatus.PASS, " Password reset message page is displayed");
		endExtentReport();
	}

	@Then("^password reset message is displayed$")
	public void password_reset_message_is_displayed() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("password reset message is displayed");
	}

	@Given("^url(\\d+) to launch the application$")
	public void url_to_launch_the_application(int arg1) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		initializeDriver();
		launch("https://www.xero.com/us/");

	}

	@When("^user click on free trail icon$")
	public void user_click_on_free_trail_icon() throws Throwable {
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("^free trail page is displayed$")
	public void free_trail_page_is_displayed() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		WebElement freeTrail = driver.findElement(By.linkText("Free trial"));
		clickObject(freeTrail, "free trail");
		System.out.println("30 days free trail is displayed");

	}

	@When("^user provides all the field values$")
	public void user_provides_all_the_field_values() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String[][] recData = readExcelSheet(dt_path, "Sheet4");
		WebElement firstName = driver.findElement(By.xpath("//input[@name='FirstName']"));
		enterText(firstName, recData[0][0], "first name");
		System.out.println("first name is displayed " + recData[0][0]);
		WebElement lastName = driver.findElement(By.xpath("//input[@name='LastName']"));
		enterText(lastName, recData[0][1], "last name");
		WebElement emailAddress = driver.findElement(By.xpath("//input[@name='EmailAddress']"));
		enterText(emailAddress, recData[0][2], "email address");
		WebElement phoneNumber = driver.findElement(By.xpath("//input[@name='PhoneNumber']"));
		enterText(phoneNumber, recData[0][3], "phone number");
		Select country = new Select(driver.findElement(By.xpath("//Select[@name='LocationCode']")));
		country.selectByVisibleText("United States");
		WebElement termsAndpolicy = driver.findElement(By.xpath("//input[@value='true']"));
		clickObject(termsAndpolicy, "terms and policy");

	}

	@When("^click on get started button$")
	public void click_on_get_started_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		WebElement getStarted = driver.findElement(By.xpath("//span[@class='g-recaptcha-submit']"));
		clickObject(getStarted, "get started");

	}

	@Then("^user can see the inbox page$")
	public void user_can_see_the_inbox_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("Inbox is displyed");
		endExtentReport();
	}

}
