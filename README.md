# Introduction

Often the hardest part of creating a full-stack web application is knowing where to start. In this lesson, we will use an outside-in development process. With this approach, we start to build our new functionality at the feature level.

Starting at the feature level of the pyramid (going outside-in) means you begin by writing tests that inform implementation of the code that a user’s browser renders. These tests involve the aspects of your project that users will see and interact with.

In this lesson:
- You will learn a few tools for writing feature-level tests.
- You will go through a few rounds of the TDD cycle at the feature level to build an application that renders user input.
- You will end the lesson “in the red,” with a failing feature-level test that you can only address by “dropping” to the server level.

If you want to continue the journey, you can pick up where you left off in the Codecademy course on testing the server.

# Feature Test Toolbelt

To write the most effective feature tests, we are going to employ a few additional tools. These tools are meant to support JavaScript testing. We will cover their uses in the scope of building a feature test that drives implementation.

## Chai
Node.js has a default assertion library that provides enough functionality to write basic test code. [The Chai testing library](http://chaijs.com/) extends the types of assertions we can make.

Chai is an assertion library for Node.js and browsers that can be paired with any JavaScript testing framework.

 ## PhantomJS
[PhantomJS](http://phantomjs.org/) is a headless browser scriptable with a JavaScript API, which allows us to write tests that mimic user interaction and then evaluate the results. It does not require us to render the application in a browser.

A browser runs “headless” when it doesn’t render anything to the screen, but runs in the background.

## WebdriverI/O
[WebdriverIO](http://webdriver.io/guide/getstarted/modes.html#The-WDIO-Testrunner) provides methods that allow us to programmatically interact with the user-facing elements of our app in the headless browser that PhantomJS runs.

## Toolbelt High-Level Summary
Phantom allows us to run an instance of a headless browser so you can run tests that mimic user interaction with a web application. WebdriverIO provides the methods to interact with browser values programmatically. We can make assertions against these tests using the Chai assertion library.

### Instructions
In your user-visits-root-test.js file notice the first line of code, which makes Chai’s assertion library available for us to use in our tests.
```javascript
const {assert} = require("chai")
```