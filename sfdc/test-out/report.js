$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SankarA/eclipse-workspace/sfdc/feature/com.training.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "I want to use this template to test  the  Xero application",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Navigate to Xero application",
  "description": "",
  "id": "title-of-your-feature;navigate-to-xero-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@testcase1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "valid url1 to launch the xero application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enters valid user name  and valid password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on login button1",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Xero application home page1  display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "Steps.valid_url_to_launch_the_xero_application(int)"
});
formatter.result({
  "duration": 11655330400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_valid_user_name_and_valid_password()"
});
formatter.result({
  "duration": 9921200500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "Steps.user_click_on_login_button(int)"
});
formatter.result({
  "duration": 12813013500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "Steps.xero_application_home_page_display(int)"
});
formatter.result({
  "duration": 417500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "incorrect password",
  "description": "",
  "id": "title-of-your-feature;incorrect-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@testcase2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "valid url2 to launch  the application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user enters valid user name  invalid password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "when user click on login button2",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "error message is  displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "Steps.valid_url_to_launch_the_application(int)"
});
formatter.result({
  "duration": 9617851600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enters_valid_user_name_invalid_password_in_password_field()"
});
formatter.result({
  "duration": 8473092100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 31
    }
  ],
  "location": "Steps.when_user_click_on_login_button(int)"
});
formatter.result({
  "duration": 6137681800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.error_message_is_displayed()"
});
formatter.result({
  "duration": 3332586400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "incorrect username",
  "description": "",
  "id": "title-of-your-feature;incorrect-username",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@testcase3"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "valid url3 to launch the xero application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "provide invalid user name and  valid password",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "valid password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user click on login button3",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "error message will display",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    }
  ],
  "location": "Steps.valid_url_to_launch_the_xero_application(int)"
});
formatter.result({
  "duration": 9509639700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.provide_invalid_user_name_and_valid_password()"
});
formatter.result({
  "duration": 27434439700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.valid_password_in_password_field()"
});
formatter.result({
  "duration": 117000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "Steps.user_click_on_login_button(int)"
});
formatter.result({
  "duration": 9167349200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.error_message_will_display()"
});
formatter.result({
  "duration": 30853000,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SLOKA-REDDY\u0027, ip: \u0027192.168.1.152\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.training.step.Steps.error_message_will_display(Steps.java:116)\r\n\tat ✽.Then error message will display(C:/Users/SankarA/eclipse-workspace/sfdc/feature/com.training.feature:26)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 29,
  "name": "forgot pwd",
  "description": "",
  "id": "title-of-your-feature;forgot-pwd",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@testcase4"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "valid url4 to launch the xero application",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "uesr click on forgot password",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "forgot password page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user enterd valid username in forgot password page and click on continue button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "password reset message is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 9
    }
  ],
  "location": "Steps.valid_url_to_launch_the_xero_application(int)"
});
formatter.result({
  "duration": 9219549600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.uesr_click_on_forgot_password()"
});
formatter.result({
  "duration": 18950188300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.forgot_password_page_is_displayed()"
});
formatter.result({
  "duration": 79700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enterd_valid_username_in_forgot_password_page_and_click_on_continue_button()"
});
formatter.result({
  "duration": 192224800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\" //input[@placeholder\u003d\u0027Email address\u0027]\"}\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d72.0.3626.69 (3c16f8a135abc0d4da2dff33804db79b849a7c38),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SLOKA-REDDY\u0027, ip: \u0027192.168.1.152\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 72.0.3626.69 (3c16f8a135abc..., userDataDir: C:\\Users\\SankarA\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:58197}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: a84f38f74119de5d9b35e0f8421e70a1\n*** Element info: {Using\u003dxpath, value\u003d //input[@placeholder\u003d\u0027Email address\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.training.step.Steps.user_enterd_valid_username_in_forgot_password_page_and_click_on_continue_button(Steps.java:150)\r\n\tat ✽.When user enterd valid username in forgot password page and click on continue button(C:/Users/SankarA/eclipse-workspace/sfdc/feature/com.training.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.password_reset_message_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 37,
  "name": "free trail",
  "description": "",
  "id": "title-of-your-feature;free-trail",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@testcase5"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "url5 to launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "user click on free trail icon",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "free trail page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "user provides all the field values",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "click on get started button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user can see the inbox page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 3
    }
  ],
  "location": "Steps.url_to_launch_the_application(int)"
});
formatter.result({
  "duration": 12295104100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_free_trail_icon()"
});
formatter.result({
  "duration": 34500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.free_trail_page_is_displayed()"
});
formatter.result({
  "duration": 7485178400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_provides_all_the_field_values()"
});
formatter.result({
  "duration": 21430028700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_get_started_button()"
});
formatter.result({
  "duration": 4154648500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_see_the_inbox_page()"
});
formatter.result({
  "duration": 987512200,
  "status": "passed"
});
});