# Protractor

## Install Protractor & Webdriver

`npm install -g protractor`

## Run Webdriver server

`webdriver-manager update`
`webdriver-manager start`

### Get driver for Internet Explorer

`webdriver-manager update --ie`

<span style="color: red"><b>NB!!</b></span> Downloads the drivers to `C:\Users\Jarrod\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium`

## Run tests

`protractor config.js`

## Angular Test Website (Super Calculator)

**_http://juliemr.github.io/protractor-demo/_**

## Global Variables that Protractor exposes

**_https://www.protractortest.org/#/api-overview#global-variables_**

<span style="color: red"><b>NB!!</b></span> Not all asynchronous steps are handled by Protractor. The ones that allow us to write statements as if they were synchronous, otherwise subsequent steps will need to be performed in a 'then' block

## Jasmine Website

**_https://jasmine.github.io/2.0/introduction.html_**

## Practice Websites

**_https://rahulshettyacademy.com/#/practice-project_**
