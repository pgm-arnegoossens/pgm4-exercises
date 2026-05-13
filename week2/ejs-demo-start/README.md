# Templating Engines met EJS

## Description
This project is part of the course Programming 3 at Arteveldehogeschool Gent. This is the start code for the livecode demo we'll develop during class.

EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.

In this demo we'll be using EJS as a templating engine. We'll also be using Express EJS Layouts to create a layout for our views. Views will be rendered using EJS and we'll also cover an example of how to use a markdown parser to render markdown content in our views.

## Requirements
- Node.js
- npm

## Installation

```bash
$ npm install
```

**Note:** normally we **do not** include a .env file, ONLY because this is a demo we included the file.

## Running the App

```bash
# watch mode
$ npm run start:dev
```


## Useful tags

- `<%= %>`: Outputs the value into the template (HTML escaped).
- `<%- %>`: Outputs the unescaped value into the template.
- `<% %>`: Executes JavaScript code without outputting anything.
- `<% for(var i=0; i < items.length; i++) { %>`: Iterates over an array.
- `<% items.forEach(function(item){ %>`: Iterates over an array using the forEach method.
- `<% if (user) { %>`: Conditional statement.
- `<% } %>`: Closes an opened JavaScript block.
- `<% include('filename') %>`: Includes another EJS template.
- `<% include('filename', { data: data }) %>`: Includes another EJS template and passes additional data to it.

## Passing Data to EJS Templates

To pass data to your EJS templates, you can use the `res.render` method provided by Express. This method takes the name of the template file and an object containing the data you want to pass.

### Example

Suppose you have a route in your Express application that looks like this:

```javascript
app.get('/user', function(req, res) {
    const user = {
        name: 'John Doe',
        age: 30
    };
    res.render('user', { user: user });
});
```

In your `user.ejs` template, you can access the `user` object and its properties like this:

```html
<h1><%= user.name %></h1>
<p>Age: <%= user.age %></p>
```

This will render the following HTML:

```html
<h1>John Doe</h1>
<p>Age: 30</p>
```

You can pass any kind of data to your templates, including strings, numbers, arrays, and objects.

## Using a custom layout

To use a custom layout in your EJS templates, you can use the `layout` option when calling the `res.render` method in your Express routes.

### Example

```javascript
app.get('/', function(req, res) {
  res.render('the-view', { layout: 'specific-layout' });
});
```


## Useful references
- [EJS Documentation](https://ejs.co/#docs)
- [Express EJS Layouts](https://www.npmjs.com/package/express-ejs-layouts)
- [Marked Documentation](https://marked.js.org/)

## Authors
- Frederick Roegiers