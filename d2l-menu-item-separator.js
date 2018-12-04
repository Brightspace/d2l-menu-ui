/*
`d2l-menu-item-separator`
Polymer-based web component for menu item separators.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-menu-item-separator">

	<template strip-whitespace="">
		<style>
			:host {
				display: block;
			}
		</style>
	</template>

	

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-menu-item-separator',

	hostAttributes: {
		'role': 'separator'
	}

});
