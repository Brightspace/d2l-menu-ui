import '@polymer/polymer/polymer-legacy.js';
import '../d2l-menu-item-styles.js';
import '../d2l-menu-item-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
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

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-custom-menu-item',
	behaviors: [
		D2L.PolymerBehaviors.MenuItemBehavior
	]
});
