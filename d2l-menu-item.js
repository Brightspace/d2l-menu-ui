/*
`d2l-menu-item`
Polymer-based web component for standard menu items.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '../@polymer/polymer/polymer-legacy.js';

import '../d2l-icons/tier1-icons.js';
import '../d2l-icons/d2l-icon.js';
import './d2l-menu-item-styles.js';
import './d2l-menu-item-behavior.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
import { dom } from '../@polymer/polymer/lib/legacy/polymer.dom.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-menu-item">

	<template strip-whitespace="">
		<style include="d2l-menu-item-styles">

			:host {
				display: flex;
				padding: 0.75rem 1rem;
			}

			:host > span {
				flex: auto;
				line-height: 1rem;
				overflow-x: hidden;
				overflow-y: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			:host > d2l-icon {
				flex: none;
				margin-top: 0.1rem;
			}

		</style>
		<span>[[text]]</span>
		<slot></slot>
	</template>

	

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-menu-item',

	behaviors: [
		D2L.PolymerBehaviors.MenuItemBehavior
	],

	_initialize: function() {
		if (this.hasChildView && !this.$$('d2l-icon')) {
			var icon = document.createElement('d2l-icon');
			dom(icon).setAttribute('icon', 'd2l-tier1:chevron-right');
			dom(this.root).insertBefore(
				icon, this.$$('slot')
			);
		}
	}

});
