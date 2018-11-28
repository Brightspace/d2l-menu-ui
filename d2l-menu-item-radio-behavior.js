import '../@polymer/polymer/polymer-legacy.js';
import './d2l-menu-item-selectable-behavior.js';
import { afterNextRender } from '../@polymer/polymer/lib/utils/render-status.js';

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};

/** @polymerBehavior D2L.PolymerBehaviors.MenuItemRadioBehavior */
D2L.PolymerBehaviors.MenuItemRadioBehaviorImpl = {

	hostAttributes: {
		'role': 'menuitemradio',
	},

	attached: function() {
		afterNextRender(this, function() {
			this.listen(this, 'd2l-menu-item-change', '_onChange');
			this.listen(this, 'd2l-menu-item-select', '_onSelect');
		}.bind(this));
	},

	detached: function() {
		this.unlisten(this, 'd2l-menu-item-change', '_onChange');
		this.unlisten(this, 'd2l-menu-item-select', '_onSelect');
	},

	_onSelect: function(e) {
		this.set('selected', true);
		this.__onSelect(e);
	},

	_onChange: function(e) {
		var items = this.parentNode.querySelectorAll('[role="menuitemradio"]');
		for (var i = 0; i < items.length; i++) {
			items[i].set('selected', items[i].value === e.detail.value);
		}
	}

};

/** @polymerBehavior D2L.PolymerBehaviors.MenuItemRadioBehavior */
D2L.PolymerBehaviors.MenuItemRadioBehavior = [
	D2L.PolymerBehaviors.MenuItemSelectableBehavior,
	D2L.PolymerBehaviors.MenuItemRadioBehaviorImpl,
];
