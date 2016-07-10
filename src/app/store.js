import Bacon from "baconjs"
import R from "ramda"
import {SELECT_TAB, SELECT_COUNTRY} from "./constants"
const isFunction = R.is(Function)

let state = {
	selectedTab: "0",
	selectedCountry: "yemen",
	incidents: [],
	isLoading: true,
}

const bus = new Bacon.Bus()

function handleSyncAction(payload) {
  return isFunction(payload) ?
    R.merge(state, payload(state)) :
    R.merge(state, payload)
}

const syncActions = {
  [SELECT_COUNTRY]: handleSyncAction,
  [SELECT_TAB]: handleSyncAction,
}

export const store = bus.toProperty()
export function dispatch(action) {
  const maybeSyncHandler = syncActions[action.type]

  if (maybeSyncHandler) {
		state = maybeSyncHandler(action.payload)
		return bus.push(state)
  }

	if (state.incidents.length > 100)
		return bus.push(state)

	bus.plug(
		Bacon.fromPromise(
			fetch(action)
				.then((res) => res.json())
				.then((res) => {
					state = R.mergeAll([state, res, {isLoading: false}])
					return state
				})
		)
	)
}

export default {store, dispatch}
