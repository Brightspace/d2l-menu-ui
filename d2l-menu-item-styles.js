import '@polymer/polymer/polymer-legacy.js';
import 'd2l-colors/d2l-colors.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-menu-item-styles">
	<template>
		<style>

			:host {
				background-color: #ffffff;
				border: 1px solid transparent;
				border-top-color: var(--d2l-color-gypsum);
				box-sizing: border-box;
				color: var(--d2l-color-ferrite);
				cursor: pointer;
				display: block;
				font-size: 0.8rem;
				margin-top: -1px;
				outline: none;
				width: 100%;
			}

			:host(:focus),
			:host(:hover),
			:host([first]:focus),
			:host([first]:hover) {
				background-color: var(--d2l-color-celestine-plus-2);
				border-bottom: 1px solid var(--d2l-color-celestine);
				border-top: 1px solid var(--d2l-color-celestine);
				color: var(--d2l-color-celestine-minus-1);
				z-index: 2;
			}

			:host([disabled]), :host([disabled]:hover), :host([disabled]:focus) {
				cursor: default;
				opacity: 0.75;
			}

			:host([hidden]) {
				display: none;
			}

			:host([first]) {
				border-top-color: transparent;
			}

			:host([last]:focus),
			:host([last]:hover) {
				border-bottom-color: var(--d2l-color-celestine);
			}
		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
