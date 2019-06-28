import '@polymer/polymer/polymer-legacy.js';
import 'd2l-colors/d2l-colors.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-menu-item-styles">
	<template>
		<style>

			:host {
				background-color: #ffffff;
				box-sizing: border-box;
				cursor: pointer;
				display: block;
				font-size: 0.8rem;
				outline: none;
				width: 100%;
			}

			:host-context([d2l-color-scheme="dark"]) {
				background-color: var(--d2l-color-dark-mode-2);
			}

			:host([disabled]), :host([disabled]:hover), :host([disabled]:focus) {
				cursor: default;
				opacity: 0.75;
			}

			:host([hidden]) {
				display: none;
			}

		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
