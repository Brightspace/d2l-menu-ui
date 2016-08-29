# d2l-menu
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A [Polymer](https://www.polymer-project.org/1.0/)-based web component for menus.

## Installation

`d2l-menu` can be installed from [Bower][bower-url]:
```shell
bower install d2l-menu
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import the opener and content components as needed:

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
</head>
```

### Menu

A basic menu can be defined using `d2l-menu` and a combination of `d2l-menu-item` and `d2l-menu-item-link`.  **Important**: specify a label on your `d2l-menu` for screen-readers.

```html
<link rel="import" href="../d2l-menu/d2l-menu.html">
<link rel="import" href="../d2l-menu/d2l-menu-item.html">

<d2l-menu label="Astronomy">
	<d2l-menu-item text="Introduction"></d2l-menu-item>
	<d2l-menu-item text="Searching the Heavens"></d2l-menu-item>
	...
</d2l-menu>
```

* `label` - required to announce menu text with screen-readers
* `no-side-borders` - optionally specify not to render side borders (sometimes helpful in side-nav/mobile menu context)

### Nested Menus

Nested menus can be defined by placing a `d2l-menu` inside a `d2l-menu-item`.  For nested menus, a `label` attribute is automatically applied using the text attribute of the `d2l-menu-item` that contains it - no need to duplicate this value.  A "return" menu item will be added to the top of the nested menu by default.

```html
<link rel="import" href="../d2l-menu/d2l-menu.html">
<link rel="import" href="../d2l-menu/d2l-menu-item.html">

<d2l-menu label="Astronomy">
	...
	<d2l-menu-item text="The Planets">
		<d2l-menu>
			<d2l-menu-item text="Mercury"></d2l-menu-item>
			<d2l-menu-item text="Venus"></d2l-menu-item>
			<d2l-menu-item text="Earth"></d2l-menu-item>
			...
		</d2l-menu>
	</d2l-menu-item>
	...
</d2l-menu>
```

* `no-return-item` - optionally specify not to render "return" menu item

### Menu Items

By default, `d2l-menu-item` (for JS handlers) and `d2l-menu-item-link` (for navigating) are provided.  While navigation can be done in JS too, `d2l-menu-item-link` gives users the ability to right-click and open in a new tab.  If providing a JS handler, wire-up to the `select` event.  In addition, a `d2l-menu-item-separator` can be used to semantically separate menu items.

```html
<link rel="import" href="../d2l-menu/d2l-menu.html">
<link rel="import" href="../d2l-menu/d2l-menu-item.html">
<link rel="import" href="../d2l-menu/d2l-menu-item-link.html">
<link rel="import" href="../d2l-menu/d2l-menu-item-separator.html">

<d2l-menu id="menu" label="Astronomy">
	<d2l-menu-item text="Introduction"></d2l-menu-item>
	<d2l-menu-item text="The Planets"></d2l-menu-item>
	<d2l-menu-item-separator></d2l-menu-item-separator>
	<d2l-menu-item-link href="http://...">Extra Stuff</d2l-menu-item-link>
</d2l-menu>
```

* `text` - required for `d2l-menu-item`
* `href` - required for `d2l-menu-item-link`

```javascript
menu.addEventListener('select', function(e) {
	console.log('item selected:', e);
});
```

### Usage in Production

In production, it's recommended to use a build tool like [Vulcanize](https://github.com/Polymer/vulcanize) to combine all your web components into a single import file. [More from the Polymer Docs: Optimize for Production](https://www.polymer-project.org/1.0/tools/optimize-for-production.html)...

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=d2l-menu
[bower-image]: https://img.shields.io/bower/v/d2l-menu.svg
[ci-url]: https://travis-ci.org/Brightspace/d2l-menu-ui
[ci-image]: https://travis-ci.org/Brightspace/d2l-menu-ui.svg?branch=master
