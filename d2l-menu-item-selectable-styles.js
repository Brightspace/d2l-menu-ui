import '../@polymer/polymer/polymer-legacy.js';
import '../d2l-colors/d2l-colors.js';
import './d2l-menu-item-styles.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-menu-item-selectable-styles">
	<template>
		<style include="d2l-menu-item-styles">
			:host {
				display: flex;
				padding: 0.75rem 1rem;
				align-items: center
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

			:host(:hover),
			:host(:focus),
			:host(:hover) > d2l-icon,
			:host(:focus) > d2l-icon {
				color: var(--d2l-color-celestine);
			}

			:host > d2l-icon {
				flex: none;
				visibility: hidden;
				margin-right: 0.8rem;
			}

			:host-context([dir="rtl"]) > d2l-icon {
				margin-left: 0.8rem;
				margin-right: 0;
			}

			:host(:dir(rtl)) > d2l-icon {
				margin-left: 0.8rem;
				margin-right: 0;
			}

			:host([aria-checked="true"]) > d2l-icon {
				visibility: visible;
			}
		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
