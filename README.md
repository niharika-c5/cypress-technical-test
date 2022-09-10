# Cypress-technical-test

Cypress technical test for i6 

## Scenario
To validate error messages when contact form is submitted with empty fields

## Techstack 

- cypress version 10 ( Test automattion framework)
- javascript ( programming language)
- TDD Format ( Mocha )
- Page object model ( design pattern to store web elements)


## Project structure 
- baseUrl is configured in cypress.config.js
- cypress/e2e/validation.spec.cy.js  file contains automated test spec file
- cypress/Fixtures/testData.json file contains test data ( first name, last name, email etc.)
- cypress/support/pageObjects folder contains classes for page object model which are segreggated according to screens of application
- cypress/support/commands.js file contains custom commands to fill form data, get page title

## How to run the test
 
 ## From command line ( Triggers test in chrome headed mode)
- clone github repository

- open terminal / command line and navigate to root folder (cypress-technical-test) path 

- run command npm install 

- run command npm run trigger-tests-chrome   

## Using code editor (visual studio code)

-  clone github repository
-  open terminal in visual studio code
-  run command npm install 
-  run command npm run cypress:runner ( this will launch cypress runner)
-  select E2E Testing
-  choose browser ( chrome or any supported browser)
-  click Start E2E Testing in Chrome button
-  click validation.spec.cy.js
