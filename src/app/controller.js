import {selectCountry, selectTab, fetchStrikes} from "./action-creators"

const tabCountryMap = {
	"0": "yemen",
	"1": "pakistan",
	"2": "somalia"
}

const pageDataFilterOptions = {
  map: {
    takeLast: 150,
  },
  list: {
    country: "yemen",
    takeLast: 15,
  },
}

export const appCtrl = (router, {store, dispatch}) => ({
	is: 'my-app',
	selectTab(e) {
		const tab = e.target.id.split("tab")[1]
		const country = tabCountryMap[tab]

    // Update app state
		dispatch(selectTab(tab))
		dispatch(selectCountry(country))

    // Fetch resource - TODO loading state
    dispatch(fetchStrikes({takeLast: 20, country}))
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
    router(page)

		// load page import on demand.
		this.importHref(
			this.resolveUrl(`./pages/${page}/${page}.html`), null, null, true);
	}
})

