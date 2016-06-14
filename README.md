# Resource-library

## Objectives

* Build an Ember model with several attributes. 
* Build routes that render templates. Build nested routes that render nested templates. 
* Build route handlers. 
* Use Handlebars to iterate over and display of list of Ember data objects. 
* Use handlebars to display a single Ember data object.

## Overview

In this app, you'll be building a library of educational resources. We'll be dealing with one model, the Resources model. Each resource represents an educational resource (a book, blog post, website, you name it). We'll be using the Active Model Adapter to connect to an external API of educational resources. For the purposes of development and testing, however, we have configured a Javascript library called Mirage to stub external web requests to the API and provide you with some dummy seed data to work with. 

This app is simple--users can browse the index of all resources, or view a specific resource. That's it!

## Instructions

### Part I: Setting up the Adapter and the Model

* Install Active Model Adapter addon: `ember install active-model-adapter` in your terminal. 
* Generate an adapter with `ember generate adapter application`. Your adapter should be defined like this:

```javascript
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend(){
  // host and namespace defined here
}
```

Then, code your Active Model Adapter to connect to the following host: `https://dry-shore-2260.herokuapp.com`, with a namespace of `v1`.
* Now that your Ember app knows where to send requests for data (i.e. to the API above), let's set up our Resources model. 
* In `app/models/resource.js`, define your model to have a title, topic, URL and description. All of these will be of data type `'string'`.

**IMPORTANT UPDATE:**

The manner in which we define Ember models in Ember 2.6.0 has changed slightly. Now, when you generate a model, it should look like this:

```javascript
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  
});

```

And you should define your attributes like this:

```javascript
// app/models/user.js
import Model from 'ember-data/model';

export default Model.extend({
  name: attr(),
  email: attr(),
  ...
});
```

### Part II: Building Routes and Route Handlers

* Define your router in `app/router.js` such that there is a route for `/resources`. This route should contain a nested route for an individual resource show page. In other words, a user should be able to visit `resources/1` and view that resource.
* Define a route handler in `app/routes/resources.js` that will find and return all of the resource records. 
* Define a route handler in `app/routes/resources/resource.js` that finds and returns the record for a given resource. Use the `resource_id` from params. 
* Use these resource to help you get this working: 
  * https://guides.emberjs.com/v2.6.0/tutorial/ember-data/
  * https://guides.emberjs.com/v2.6.0/models/finding-records/

### Part III: Templates

* On the `application.hbs` page, add a link to the resources page. 
  * You can use this resource to learn how to use the Handlebars `link-to` helper. https://guides.emberjs.com/v2.6.0/templates/links/
* Let's create the page that the above link will bring the user to. In `templates/resources/index.hbs` we'll iterate over all of the resources. Iterate over the list of resources using the `#each` Handlebars helper. The title, topic and URL of each resource should be list items (`<li>`s), with the title also wrapped in `<h5>` tags. 
* Build the show page for a given resource, `app/templates/resources/resource.hbs`. 
  * This page should display the title of the resource in an `<h4>` tag, and the details of the resouce in `<p>` tags. 
<p class='util--hide'>View <a href='https://learn.co/lessons/ember-data-lab'>Ember Data Lab</a> on Learn.co and start learning to code for free.</p>
