package com.training.runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\SankarA\\eclipse-workspace\\sfdc\\feature\\com.training.feature", glue="com.training.step",
                       plugin={"pretty","html:test-out","json:test-out.json"})
  //"com.cucumber.listener.ExtentCucumberFormatter:test-out/report.html"})
public class Runner {
 
}




