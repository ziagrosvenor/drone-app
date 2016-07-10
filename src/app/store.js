import Bacon from "baconjs"
import R from "ramda"
import {SELECT_TAB, SELECT_COUNTRY,
FETCH_STRIKES} from "./constants"
const isFunction = R.is(Function)

let state = {
	selectedTab: "0",
	selectedCountry: "yemen",
	incidents: [],
	strikes: [],
	isLoading: true,
}

const bus = new Bacon.Bus()
export const store = bus.toProperty()

function handleSyncAction(state, payload) {
  return isFunction(payload) ?
    R.merge(state, payload(state)) :
    R.merge(state, payload)
}

function handleFetchAction(state, payload) {
  const fetched = payload(state)
    .then((payload) => {
      state = R.mergeAll([state, payload])
      return state
    })

  return Bacon.fromPromise(fetched)
}

const syncActions = {
  [SELECT_COUNTRY]: handleSyncAction,
  [SELECT_TAB]: handleSyncAction,
}

const fetchActions = {
  [FETCH_STRIKES]: handleFetchAction,
}

export function dispatch(action) {
  const maybeSyncHandler = syncActions[action.type]

  if (maybeSyncHandler) {
		state = maybeSyncHandler(state, action.payload)
		return bus.push(state)
  }

  const maybeFetchHandler = fetchActions[action.type]

  if (maybeFetchHandler) {
	  return bus.plug(maybeFetchHandler(state, action.payload))
  }
}

export default {store, dispatch}
