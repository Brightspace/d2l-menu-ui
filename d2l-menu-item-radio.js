/**
`d2l-menu-item-radio`
Polymer-based web component for radio menu items.

@demo demo/radio-menu.html radio menu
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-icons/d2l-icons.js';
import './d2l-menu-item-selectable-styles.js';
import './d2l-menu-item-radio-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-menu-item-radio">
	<template strip-whitespace="">
		<style include="d2l-menu-item-selectable-styles">
			/*
			 * https://github.com/Polymer/tools/issues/408
			 * Empty style blocks break linter.
			 */
			:host {}
		</style>
		<d2l-icon icon="d2l-tier1:check" aria-hidden="true"></d2l-icon>
		<span>[[text]]</span>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-menu-item-radio',

	behaviors: [
		D2L.PolymerBehaviors.MenuItemRadioBehavior
	],
});
