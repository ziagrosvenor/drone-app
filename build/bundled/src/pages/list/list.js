import {strikesByCountry} from "../selectors"
import R from "ramda"

export const listRouteSpec = {
  data: {
    country(state) { return state.selectedCountry },
    takeLast: 15,
  },
  path: "/list",
}

export const listCtrl = ({store, dispatch}) => ({
  is: 'incident-list',
  properties: {
    incidents: Array,
    isLoading: {
      type: Boolean,
      value: true,
    },
  },
  updateState(state) {
    if (state.path !== listRouteSpec.path)
      return

    const strikes = R.takeLast(listRouteSpec.takeLast, strikesByCountry(state))

    if (!strikes || strikes.length === 0) {
      return
    }

    this.isLoading = state.isLoading
    this.incidents = strikes

    const list = this.$$("iron-list")
    list.notifyResize()
  },
  ready() {
    store.onValue((state) => {
      this.updateState(state)
    })
  },
})
