 var assert = require('assert'),
     webdriver = require('selenium-webdriver'),
     By = webdriver.By,
     until = webdriver.until,
     chrome = require('selenium-webdriver/chrome'),

     var path = require('chromedriver').path;
 var driver = chrome.Driver.createSession(new chrome.Options(), new chrome.ServiceBuilder(path).build());

 driver.get('https://www.naver.com/');