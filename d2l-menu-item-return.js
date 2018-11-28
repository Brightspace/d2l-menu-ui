/*
`d2l-menu-item-link`
Polymer-based web component for nested menu's return items. Automatically rendered
when menus are nested.
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
import './d2l-menu-item-localize-behavior.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-menu-item-return">

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
				text-decoration: none;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			:host > d2l-icon {
				flex: none;
				margin-right: 1rem;
				margin-top: 0.1rem;
			}

			:host-context([dir="rtl"]) > d2l-icon {
				margin-right: 0;
				margin-left: 1rem;
			}

			/* Duplicated because some browsers ignore CSS block for any invalid selector */
			:host(:dir(rtl)) > d2l-icon {
				margin-right: 0;
				margin-left: 1rem;
			}

		</style>
		<d2l-icon icon="d2l-tier1:chevron-left"></d2l-icon>
		<span aria-hidden="">[[text]]</span>
		<slot></slot>
	</template>

	

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-menu-item-return',

	properties: {
		'aria-label': {
			type: String,
			reflectToAttribute: true
		},
		text: {
			type: String,
			observer: '_textChanged'
		}
	},

	ready: function() {
		this['aria-label'] = this.localize('return');
	},

	_textChanged: function() {
		this['aria-label'] = this.localize('returnCurrentlyShowing', 'menuTitle', this.text);
	},

	behaviors: [
		D2L.PolymerBehaviors.MenuItemBehavior,
		D2L.PolymerBehaviors.MenuItemLocalizeBehavior
	]

});
