import {selectCountry, selectTab} from "./action-creators"

const tabCountryMap = {
	"0": "yemen",
	"1": "pakistan",
	"2": "somalia"
}

export const appCtrl = ({store, dispatch}) => ({
	is: 'my-app',
	selectTab(e) {
		const tab = e.target.id.split("tab")[1]
		const country = tabCountryMap[tab]

		dispatch(selectTab(tab))
		dispatch(selectCountry(country))
	},
	properties: {

		page: {
			type: String,
			reflectToAttribute: true,
			observer: '_pageChanged'
		},

		id: {
			type: String,
			reflectToAttribute: true,
			observer: '_subrouteChanged'
		},

	},

	observers: [
		'_routePageChanged(routeData.page)'
	],

	_routePageChanged: function(page) {
		this.page = page || 'map';
	},

	_pageChanged: function(page) {
		dispatch("/incidents")
		// load page import on demand.
		this.importHref(
			this.resolveUrl(`./pages/${page}/${page}.html`), null, null, true);
	}
})

