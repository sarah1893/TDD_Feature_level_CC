# Feature Test I: Passing

Now that we have written our first test with an assert statement, we will run the test and use the error message to drive the next step in our development process.

When executing a feature test that fails, errors will have messages that discuss the failure in terms of HTML (i.e. that text or button that you said would be on the page isn’t on the page) or HTTP (i.e. the request that this page made resulted in a 404 HTTP status because the route you requested didn’t exist).

Considering our poetry web app example, if we ran our test suite we would get an error message that included:

    Error: An element could not be located on the page using the given search parameters

The error message describes the issue in terms of HTML elements and tells us that the element we are expecting does not exist on our page. This is because we have not yet created the HTML in our **index.html** file.

Using a strict TDD approach, we would write just enough HTML code to make our test pass. Let’s do that now.
```html
<section id="poems"></section>
```

When we run our tests we get a message confirming that it is passing.

    Passing: without existing poems, page starts blank

We have written our first feature test and moved from the red to the green using a TDD approach.

We expected this test to pass because we haven’t created any poems as part of our test’s setup. Each test is discrete and isolated from the other parts of the project, so we know that the list of poems will be empty.

## Instructions

1. Run your test suite in the terminal.

Go to **index.html** and create a ``<section> </section>`` element that responds to the error message you received when running your test suite.

Run your test suite again in the terminal to make sure you are in the green.

> Hint
> You need to create a ``section`` element with the ID ``messages``.