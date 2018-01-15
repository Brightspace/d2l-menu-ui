# d2l-menu
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/menu)
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
  <script src="../webcomponentsjs/webcomponents-lite.js"></script>
</head>
```

### Menu

A basic menu can be defined using `d2l-menu` and a combination of `d2l-menu-item` and `d2l-menu-item-link`.  **Important**: specify a label on your `d2l-menu` for screen-readers.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-menu.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
      d2l-menu {
        max-width: 400px;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-menu label="Astronomy">
  <d2l-menu-item text="Introduction"></d2l-menu-item>
  <d2l-menu-item-separator></d2l-menu-item-separator>
  <d2l-menu-item text="Searching the Heavens"></d2l-menu-item>
  <d2l-menu-item text="The Solar System"></d2l-menu-item>
  <d2l-menu-item text="Stars &amp; Galaxies"></d2l-menu-item>
  <d2l-menu-item text="The Night Sky"></d2l-menu-item>
  <d2l-menu-item text="The Universe"></d2l-menu-item>
</d2l-menu>
```

* `label` - required to announce menu text with screen-readers

**Note:** `d2l-menu` renders without an outer border since it's typically used in a context where a containing element defines a border (ex. `d2l-dropdown-menu` or side nav).

### Nested Menus

Nested menus can be defined by placing a `d2l-menu` inside a `d2l-menu-item`.  For nested menus, a `label` attribute is automatically applied using the text attribute of the `d2l-menu-item` that contains it - no need to duplicate this value.  A "return" menu item will be added to the top of the nested menu by default.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-menu.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
      d2l-menu {
        max-width: 400px;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-menu label="Astronomy">
  <d2l-menu-item text="Introduction"></d2l-menu-item>
  <d2l-menu-item-separator></d2l-menu-item-separator>
  <d2l-menu-item text="Searching the Heavens"></d2l-menu-item>
  <d2l-menu-item text="The Solar System">
    <d2l-menu>
      <d2l-menu-item text="Formation"></d2l-menu-item>
      <d2l-menu-item text="Modern Solar System"></d2l-menu-item>
      <d2l-menu-item text="The Planets">
        <d2l-menu>
          <d2l-menu-item text="Mercury"></d2l-menu-item>
          <d2l-menu-item text="Venus"></d2l-menu-item>
          <d2l-menu-item text="Earth"></d2l-menu-item>
          <d2l-menu-item text="Mars"></d2l-menu-item>
          <d2l-menu-item text="..."></d2l-menu-item>
        </d2l-menu>
      </d2l-menu-item>
      <d2l-menu-item text="The Sun"></d2l-menu-item>
      <d2l-menu-item text="Asteroids"></d2l-menu-item>
      <d2l-menu-item text="Comets"></d2l-menu-item>
    </d2l-menu>
  </d2l-menu-item>
  <d2l-menu-item text="Stars &amp; Galaxies">
    <d2l-menu>
      <d2l-menu-item text="What is a Star?"></d2l-menu-item>
      <d2l-menu-item text="Lifecycle of a Star"></d2l-menu-item>
      <d2l-menu-item text="Binaries &amp; Multiples"></d2l-menu-item>
      <d2l-menu-item text="Star Clusters"></d2l-menu-item>
      <d2l-menu-item text="Star Death"></d2l-menu-item>
      <d2l-menu-item text="Galaxies"></d2l-menu-item>
    </d2l-menu>
  </d2l-menu-item>
  <d2l-menu-item text="The Night Sky"></d2l-menu-item>
</d2l-menu>
```

### Menu Items

By default, there are several menu item types provided. These include `d2l-menu-item` (for JS handlers), `d2l-menu-item-link` (for navigating), and `d2l-menu-item-checkbox`/`d2l-menu-item-radio` (for selection).

While navigation can be done in JS too, `d2l-menu-item-link` gives users the ability to right-click and open in a new tab.  If providing a JS handler, wire-up to the `d2l-menu-item-select` event.  In addition, a `d2l-menu-item-separator` can be used to semantically separate menu items.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-menu.html">
    <link rel="import" href="d2l-menu-item.html">
    <link rel="import" href="d2l-menu-item-link.html">
    <link rel="import" href="d2l-menu-item-separator.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
      d2l-menu {
        max-width: 400px;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-menu label="Astronomy">
  <d2l-menu-item text="Introduction"></d2l-menu-item>
  <d2l-menu-item text="The Planets"></d2l-menu-item>
  <d2l-menu-item-separator></d2l-menu-item-separator>
  <d2l-menu-item-link text="The Universe" href="https://en.wikipedia.org/wiki/Universe"></d2l-menu-item-link>
</d2l-menu>
```

The selection menu items act as you would expect a checkbox or radio item to act. Multiple checkboxes in the same menu may be selected, but only one radio item in a given `<d2l-menu>` may be selected at once (i.e. selecting one option will deselect all the other `d2l-menu-item-radio` items).

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-menu.html">
    <link rel="import" href="d2l-menu-item-checkbox.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
      d2l-menu {
        max-width: 400px;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-menu label="Some Options">
  <d2l-menu-item-checkbox text="Option 1" value="1"></d2l-menu-item-checkbox>
  <d2l-menu-item-checkbox text="Option 2" value="2"></d2l-menu-item-checkbox>
  <d2l-menu-item-checkbox text="Option 3" value="3"></d2l-menu-item-checkbox>
</d2l-menu>
```

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-menu.html">
    <link rel="import" href="d2l-menu-item-radio.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
      d2l-menu {
        max-width: 400px;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-menu label="Some Options">
  <d2l-menu-item-radio text="Option 1" value="1" selected></d2l-menu-item-radio>
  <d2l-menu-item-radio text="Option 2" value="2"></d2l-menu-item-radio>
  <d2l-menu-item-radio text="Option 3" value="3"></d2l-menu-item-radio>
</d2l-menu>
```

* `text` - required for `d2l-menu-item`
* `href` - required for `d2l-menu-item-link`
* `value` - required for `d2l-menu-item-checkbox`/`d2l-menu-item-radio`
* `prevent-default` - optional for `d2l-menu-item-link` - disables normal link behavior.  This can help if you want both a JS handler and the browser's 'open in new tab' functionality (e.g. popup window links).
* `selected` - optional for `d2l-menu-item-checkbox`/`d2l-menu-item-radio`, this will set the item to be selected by default.

```javascript
menu.addEventListener('d2l-menu-item-select', function(e) {
	console.log('item selected:', e.target);
});
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#tests):

```shell
polymer test --skip-plugin sauce
```

To lint AND run local unit tests:

```shell
npm test
```

[bower-url]: http://bower.io/search/?q=d2l-menu
[bower-image]: https://badge.fury.io/bo/d2l-menu.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/menu
[ci-image]: https://travis-ci.org/BrightspaceUI/menu.svg?branch=master
