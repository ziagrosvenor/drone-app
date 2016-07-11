import Bacon from "baconjs"
import R from "ramda"
import {normalize, arrayOf, Schema} from "normalizr"
import {mergeIntoEntity} from "./utils"
import {SELECT_TAB, SELECT_COUNTRY, FETCH_STRIKES}
  from "./constants"
const isFunction = R.is(Function)
const strike = new Schema("strikes", { idAttribute: "_id" })
const bus = new Bacon.Bus()
export const store = bus.toProperty()

let state = {
	selectedTab: "0",
	selectedCountry: "yemen",
	incidents: [],
  result: [],
  entities: {
    strikes: {},
  },
	fetchedQueries: [],
	isLoading: true,
}

function handleSyncAction(state, payload) {
  return isFunction(payload) ?
    R.merge(state, payload(state)) :
    R.merge(state, payload)
}

function handleFetchAction(state, payload) {
  const fetched = payload(state)
    .then((payload) => {
      let newStrikes

      if (payload.query)
        state.fetchedQueries.push(payload.query)
        state.fetchedQueries =
          R.dropRepeats(state.fetchedQueries)

      if (payload.strikes)
        newStrikes = normalize(payload.strikes, arrayOf(strike), {mergeIntoEntity})
        state.result = R.concat(state.result, newStrikes.result)
        state.entities.strikes = R.merge(state.entities.strikes, newStrikes.entities.strikes)

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
