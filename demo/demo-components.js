import '../../@polymer/polymer/polymer-legacy.js';
import '../../d2l-hierarchical-view/d2l-hierarchical-view-behavior.js';
import '../d2l-menu-item-styles.js';
import '../d2l-menu-item-behavior.js';
import '../d2l-menu-item.js';
import '../d2l-menu.js';
import { Polymer } from '../../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-custom-menu-item">
	<template strip-whitespace="">
		<style include="d2l-menu-item-styles">
			:host {
				display: block;
				padding: 0.75rem 1.5rem;
			}
			:host span {
				line-height: 1rem;
				overflow-x: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			:host(:hover) span,
			:host(:focus) span {
				display: inline-block;
				-webkit-transform: rotateY(360deg);
				transform: rotateY(360deg);
				transition: transform 2s;
			}
		</style>
		<span>[[text]]</span>
		<slot></slot>
	</template>
	
</dom-module><dom-module id="d2l-custom-view">
	<template strip-whitespace="">
		<style include="d2l-hierarchical-view-styles">
			:host {
				background-image: url("https://www.nasa.gov/sites/default/files/images/504349main_ngc6357_hst_big_full.jpg");
				background-size: cover;
				border: 1px solid black;
				border-radius: 0.3rem;
				box-sizing: border-box;
				color: white;
				font-size: 1.5rem;
			}
			:host .d2l-hierarchical-view-content {
				min-height: 500px;
				padding: 1rem;
			}
			:host .back-container {
				margin-top: 1rem;
			}
			:host a {
				color: white;
				font-size: 0.7rem;
			}
		</style>
		<div class="d2l-hierarchical-view-content">
			<slot></slot>
			<div class="back-container">
				<a href="javascript:void(0);" on-click="_handleHide" tabindex="-1">Go Back</a>
			</div>
		</div>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-custom-menu-item',
	behaviors: [
		D2L.PolymerBehaviors.MenuItemBehavior
	]
});
Polymer({
	is: 'd2l-custom-view',

	listeners: {
		'd2l-hierarchical-view-show-complete': '_onShowComplete'
	},

	behaviors: [
		D2L.PolymerBehaviors.HierarchicalViewBehavior
	],

	focus: function() {
		this.$$('.back-container > a').focus();
	},

	_onShowComplete: function() {
		this.focus();
	},

	_handleHide: function(e) {
		e.stopPropagation();
		this.hide();
	}

});
