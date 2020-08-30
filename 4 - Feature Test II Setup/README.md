# Feature Test II: Setup

Now that we are in the green we should take a moment to consider refactoring our code.

Our code is pretty basic and succinct. We won’t refactor it but will take a moment to consider our current code implementation.

For more on the refactor phase, you can try the Codecademy Learn Test Driven Development With Mocha Course.

### Feature Test II

Returning to our poetry app demo, we want to write a test to check if the application saves the title and text of a user’s poem when they press the submit button.

The functionality we want to test is:
1. The user enters text into a text input element (the poem)
2. The user enters text into a second text input element (the title of the poem)
3. The user presses a submit button

Adding the ``describe`` and ``it`` blocks for this second test would look like this:
```javascript
  describe('demo poetry web app', () => { 
    it('saves the user poem and title', () => {

    });
  });
```

Next, we want to write the setup, exercise, and verification phases of our test.

In the setup phase for this test, we create variables to represent a user’s input to the title and poem fields on the home page.
```javascript
     const title = 'Words Birth Worlds';
     const poem = 'Our words are marvelous weapons with which we could behead the sun';
```

The second test would now look like this:
```javascript
  describe('demo poetry web app', () => { 
    it('saves the user poem and title', () => {
      const title = 'Words Birth Worlds';
      const poem = 'Our words are marvelous weapons with which we could behead the sun';
    });
  });
```

## Instructions

1. Go to your test suite for the message app in the **user-visits-root-test.js** file. Notice that we have added the ``describe`` and ``it`` blocks for your second test. Inside those blocks:
- Create a ``const`` variable named message to hold the expected value of the ``message`` input, and set it equal to a string with the value:
``feature tests often hit every level of the TDD Testing Pyramid``
- Below ``message``, create a ``const`` variable named ``author`` to hold the expected value of the author input, and set it equal to ``username``.