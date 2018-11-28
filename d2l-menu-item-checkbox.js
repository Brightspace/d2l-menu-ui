/**
`d2l-menu-item-checkbox`
Polymer-based web component for checkbox menu items.

@demo demo/checkbox-menu.html checkbox menu
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '../@polymer/polymer/polymer-legacy.js';

import '../d2l-icons/d2l-icons.js';
import './d2l-menu-item-selectable-styles.js';
import './d2l-menu-item-selectable-behavior.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
import { afterNextRender } from '../@polymer/polymer/lib/utils/render-status.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-menu-item-checkbox">
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
	is: 'd2l-menu-item-checkbox',

	behaviors: [
		D2L.PolymerBehaviors.MenuItemSelectableBehavior
	],

	hostAttributes: {
		'role': 'menuitemcheckbox'
	},

	attached: function() {
		afterNextRender(this, function() {
			this.listen(this, 'd2l-menu-item-select', '_onSelect');
		}.bind(this));
	},

	detached: function() {
		this.unlisten(this, 'd2l-menu-item-select', '_onSelect');
	},

	_onSelect: function(e) {
		this.set('selected', !this.selected);
		this.__onSelect(e);
	}

});
