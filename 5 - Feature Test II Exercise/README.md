# Feature Test II: Exercise

The next step for our poetry web app is to use our ``browser`` variable for the exercise phase of the test.

First, we will set the URL of the browser to go to the root of our project using the ``.url`` method:
```javascript
browser.url('/');
```

Next, we will use the ``.setValue`` method, which sends a sequence of keystrokes to an element, based on a string argument.

We will use ``.setValue()`` to mimic a user entering the title and poem into the corresponding HTML input elements at the root of our web app.

The first argument passed to ``.setValue()`` is the CSS selector that references an HTML element, and the second argument is the value you want to assign that element.
```javascript
browser.setValue('input[id=title]', title);
browser.setValue('textarea[id=poem]', poem);
```

In the example above, a text input with the ID of ``title`` will be set to a value of ``title``. Also, the textarea with ID poem will be set to the value ``poem``. The variables referenced here are the ones we created in the setup phase.

To complete the exercise phase of our test we would use the ``.click`` method to mimic a user clicking on a submit button.
```javascript
 browser.click('input[type=submit]');
```

Our second test, with the setup and exercise phases, now looks like this:
```javascript
  describe('demo poetry web app', () => { 
    it('saves the user poem and title', () => {
      // Setup
      const title = 'Words Birth Worlds';
      const poem = 'Our words are marvelous weapons with which we could behead the sun';
     // Exercise
      browser.url('/');
      browser.setValue('input[id=title]', title);
      browser.setValue('textarea[id=poem]', poem);
      browser.click('input[type=submit]');
    });
  });
```

## Instructions

1. Write the exercise phase of your second feature test for the message web app.

Use the ``browser.url()`` method to set the URL of the headless browser to your project root.

> Hint
> You can navigate to the root using **``/``**.

2. Use ``browser.setValue()`` to set the value of an HTML ``<input>`` element with the ID ``author`` to the value of your variable named ``author``.

Under the line you just wrote, use`` browser.setValue()`` to set the value of an HTML ``<textarea>`` element with the ID ``message`` to the value of your variable named ``message``.

3. Use ``browser.click()`` to simulate a user clicking on an HTML ``<input>`` with the type ``submit``.