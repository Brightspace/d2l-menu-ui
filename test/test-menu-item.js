import '@polymer/polymer/polymer-legacy.js';
import '../d2l-menu-item-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-custom-menu-item">
	<template strip-whitespace="">
		<span>[[text]]</span>
		<slot></slot>
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-test-menu-item',
	behaviors: [
		D2L.PolymerBehaviors.MenuItemBehavior
	]
});
