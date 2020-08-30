# Feature Test I

Feature tests exercise behavior by simulating a user navigating the application in a web browser.

Imagine we wanted to create a simple web-based poetry writing application.

The first feature test we want to write is to check our application’s *empty state*. The functionality we want to test is:
- When a ``user visits the homepage``, the ``poems section is empty``

We want to make sure that when there are no poems in the database, there are no poems rendered on the homepage. This is the application’s *empty state*.

The testing suite for our poetry app would begin with nested describe blocks like this:
```javascript
describe('Poetry web app', () => {
  describe('user visits root', () => {

  });
});
```

The term ‘root’, refers to our application’s entry point, which in this example is the home page that users will visit in their browser.

Next, we add an ``it`` block to describe the behavior we want to test in our app:
```javascript
describe('Poetry web app', () => {
  describe('user visits root', () => {
    it('page starts blank', () => {

    });  
  });
});
```

When a user visits the root of our app, they should have a blank page on which to write their own poem.

## The Plumbing
Next, we reach for our feature testing toolbelt. We start by to using the global ``browser`` variable that is provided by WebdriverI/O.

The ``browser`` variable is powerful because it gives us access to the browser that Phantom is running in the background. We can simulate a user interacting with our website by calling different methods on the global \\ variable in our test suite.

For example, we can use ``browser.url()`` to simulate a user visiting the home page of our application, which is the first behavior we want to test.

The ``.url`` method navigates to the URL that is passed to it as an argument. The following line of code would navigate to the Codecademy website in the Phantom browser.
```javascript
browser.url('https://www.codecademy.com')
```

In the case of our poetry web app, we will pass in ``'/'`` as the argument, which will point the browser to the root file of our project, which in this case is our **index.html**.

The code would look like this:
```javascript
describe('poetry web app', () => {
  describe('user visits root', () => {
    it('page starts blank', () => {
      browser.url('/');
    });  
  });
});
```

## Instructions

1. Imagine you are a developer working on a project that includes creating a web application with a message feature.

The first feature you want to test in your web app is that no messages appear on the page when a user visits the project root.
- Inside the ``describe`` blocks in **user-visits-root-test.js** file, write an ``it`` block with the string: ``starts blank``, and an empty callback function.

> Hint
> An ``it`` block has two parameters. The first is a string that describes expected behavior, and the second is a callback function.
```javascript
it('does something', () => {})
```

2. Inside the ``it`` block, call the ``.url()`` method on the global ``browser`` variable and pass ``'/'`` as the argument.

