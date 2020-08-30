# Feature Test II: Verify

Now that we have programmed the behavior we want to test in the exercise phase, we will write the verification phase of our test. We will compare the actual results of exercising the code with the expected results.

In the case of our poetry app, we want to verify that once a user submits a poem, the section of the app’s webpage that we have decided will display the poems includes that poem.

We have created that element already to make our first feature test pass. It is the following line of code in our **index.html** file:
```html
<section id="poems">
</section>
```

To add an ``assert`` statement to evaluate the behavior of our feature, we will use the ``browser`` variable, and ``.getText()`` to return the text contents of the element, with the ``id poem``.

The Chai Assertion Library allows us to use the ``.include`` method to check if the string that is returned from ``.getText()`` includes the substrings of the title and poem that the user has submitted:
```javascript
assert.include(browser.getText('#poems'), title);
assert.include(browser.getText('#poems'), poem);
```

In both ``assert`` statements the first argument we pass to ``.include()`` is the function we created above it.

The ``.include()`` method works like this:
```javascript
assert.include(haystack, needle)
```

The full second test would now look like this:
```javascript
const {assert} = require('chai');

describe('User visits root', () => {

  describe('demo poetry web app', () => { 
    it('saves the user poem and title', () => {
      // Setup
      const title = 'Words Birth Worlds';
      const poem = 'Our words are marvelous weapons with which we could behead the sun;
     // Exercise
      browser.url('/');
      browser.setValue('input[id=title]', title);
      browser.setValue('textarea[id=poem]', poem);
      browser.click('input[type=submit]');
      // Verify
      assert.include(browser.getText('#poems'), title);
      assert.include(browser.getText('#poems'), poem);
    });
  });
});
```

## Instructions

1. Verify your results.
- Write an assert statement that verifies that the value of your variable ``author`` is included in the results of your ``.getText`` function.
- Write an assert statement that verifies that the value of your variable ``message`` is included in the results of your ``.getText`` function.

> **Hint**
Assuming that you are testing if **``needle``** is included in **``haystack``**;
the **``.include()``** method works like this:
```javascript
assert.include(haystack, needle)
```

> You can use **``browser.getText('#messages')``** to get the text contents of an HTML element