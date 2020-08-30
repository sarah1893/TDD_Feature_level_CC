# Feature Test I: Assert

The last thing our test needs is an assert statement to verify that the behavior we expect is equal to the actual behavior of our code.

We want to make sure our app is in an *empty state*.

We can write a test for this behavior by deciding that poems will be listed in an HTML element with an ``id`` attribute set to ``poems``. Then, write an assert statement to verify that the element with the ID ``poems`` is empty.

We can do this using the Chai ``assert.equal`` method, which evaluates if the two arguments are equal.

In the case of our poetry app, the assert statement would look like this:
```javascript
assert.equal(browser.getText('#poems'), '')
```

Because we will render the poetry onto the page as text, we can evaluate the contents of the HTML element as a string.

The ``.getText`` method, from WebdriverI/O, gets the text content from the selected DOM element.

Here we are using ``browser.getText()`` to evaluate if the text in the element with the ID ``poems`` is equal to an empty string.

Our final code for this feature test would look like this:
```javascript
describe('User visits root', () => {
  describe('without existing poems', () => {
    it('page starts blank', () => {
      browser.url('/');

      assert.equal(browser.getText('#poems'), '');
    });
  });
});
```

## Instructions

1. Use ``assert.equal()`` to evaluate if an element with ID ``messages``:
```html
<section id="messages"></section>
```

has no text in it.

Then run your test suite to celebrate being in the red!

Check your work.

> **Hint**
> - The first argument in your assert statement should use **``browser.getText()``**, and the selector for a DOM element with the ID **``messages``**.
> - The second argument should be an empty string.