import {strikesByCountry} from "../selectors"

export const listRouteSpec = {
  country(state) { return state.selectedCountry },
  takeLast: 15,
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
    this.isLoading = state.isLoading
    this.incidents = strikesByCountry(state)
    const list = this.$$("iron-list")
    list.notifyResize()
  },
  ready() {
    store.onValue((state) => {
      this.updateState(state)
    })
  },
})
