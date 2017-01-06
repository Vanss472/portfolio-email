# Vanessa Martinez Portfolio Email

I'm using Grunt task to help simplify things:

1. Builds HTML email templates using Handlebar templating

2. SCSS to Inline CSS

3. Live browser preview and reload

## Requirements

* Node.js
* Grunt
* Assemble
* Juice
* Express
* Sass


## Command Line Tasks

`npm install` -- Install npm devDependecies

`npm run build` -- Clean dist; Inline CSS

`npm run develop` -- Run grunt serve

### How it works

	<h1>Hello World!</h1>

	<p>{{> follow_vanss }}</p>

	<a class="orange-link" href="http://htmlemailboilerplate.com" target ="_blank" title="Styling Links">Coloring Links appropriately</a>

	<img src="img/mailgun.png" alt="Your alt text" title="Your title text" />

	background-image: url('../img/bg-header.jpg');

