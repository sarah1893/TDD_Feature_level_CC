# Stuck In The Red

Now that we have written our second test, it is time to write the minimal implementation code to move us forward in the TDD process. Running the test suite for our poetry web app at this point would give us this error message:

    An element could not be located on the page using the given search parameters

The error message describes the HTML issue that is preventing our test from continuing.

To address this error message, we would create an ``<input>`` with the ID, ``title`` in our **index.html** file. It would look like this:
```html
<label for="title">Title</label>
<input id="title">
```

Now when we run our test, we will get a step further and receive an error message that tells us the next line of HTML code we need to write:

    An element could not be located on the page using the given search parameters

This error message tells us we are missing a ``<textarea>`` element with the ID, ``poem``. We can address this by adding the following to our **index.html**:
```html
<label for="poem">Your poem:</label>
<textarea id="poem"></textarea>
```

Running the test again would give us a similar error message concerning the input element with the ``type`` equal to ``submit``. This is the submit button referenced in our test code, and we can address this error by adding the following code to our **index.html** file:
```html
<input type="submit">
```

The complete **index.html** file would now look like this:
```html
<section id="poems">
</section>

<label for="title">Title</label>
<input id="title">

<label for="poem">Your poem:</label>
<textarea id="poem"></textarea>

<input type="submit">
```

Running the test suite now would give us an error message like this:

    AssertionError: expected '' to include "Words Birth Worlds"

While this error message looks similar to the ones we have been seeing, it is a different type of error message, and it signals the need for a shift in our TDD process.

What’s different here is that the failure comes from the verification phase instead of the exercise phase. While this isn’t always the case, that means that we’ve changed the implementation code enough to get to the part of the test where we’re specifying behavior, not just the existence of elements.

The kind of test we need to write in response to this error will force us to drop levels in the TDD Testing Pyramid.

## Instructions

1. Run your test and follow the error messages to address one issue at a time, until you receive an error concerning the verification phase of your test. That error that will force you to drop down to a server level test.
- Create an ``<input>`` element with the ID, ``author``.
- Check your work
- Run your test suite

> **Hint**
Make sure the spacing of your HTML code is correct.

2. Create a ``<textarea>`` element with the ID, ``message``,
- Check your work
- Run your test suite

3. Create an ``<input>`` element with the ``type``, ``submit``.
- Check your work
- Run your test suite