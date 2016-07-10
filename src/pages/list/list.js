import {strikesByCountry} from "../selectors"

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
  },
  ready() {
		// TODO fix this
		this.incidents = [{}, {}, {}, {}]

		setTimeout(() => {
			store.onValue((state) => {
				this.updateState(state)
			})
		}, 200)
  },
})
