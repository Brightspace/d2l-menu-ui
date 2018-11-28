import '../../@polymer/polymer/polymer-legacy.js';
import '../d2l-menu-item-localize-behavior.js';
import { Polymer } from '../../@polymer/polymer/lib/legacy/polymer-fn.js';
import { dom } from '../../@polymer/polymer/lib/legacy/polymer.dom.js';
Polymer({
	is: 'test-localize',
	behaviors: [ D2L.PolymerBehaviors.MenuItemLocalizeBehavior ],
	ready: function() {
		dom(this.root).appendChild(
			document.createTextNode(
				this.localize('returnCurrentlyShowing', 'menuTitle', 'testTitle')
			)
		);
	}
});
