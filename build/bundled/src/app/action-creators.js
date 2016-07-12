import R from "ramda"
import Promise from "bluebird"
import fetch from "isomorphic-fetch"
import querystring from "querystring"
import {SELECT_COUNTRY, SELECT_TAB, TOGGLE_LOADING,
  CHANGE_PAGE, FETCH_STRIKES
} from "./constants"

const whenIsFunc = R.when(R.is(Function))
const applyDynamicFilters = (state, filter) => R.map(
  whenIsFunc((fn) => fn(state)),
  filter
)

export const fetchStrikes = (filter = {}) => ({
  type: FETCH_STRIKES,
  payload: (state) => {
    const _filter = applyDynamicFilters(state, filter)
    const query = querystring
      .stringify(_filter)

    if (R.contains(query, state.fetchedQueries))
      return Promise.resolve({})

    return fetch(`/strikes?${query}`)
      .then((res) => {
        if (res.ok)
          return res.json()
      })
      .then(R.merge({query}))
      .catch(console.log)
  },
})

export function selectTab(selectedTab) {
	const payload = {
		selectedTab,
	}

	return {
    type: SELECT_TAB,
		payload,
	}
}

export function selectCountry(selectedCountry) {
	const payload = {
		selectedCountry,
	}

	return {
		type: SELECT_COUNTRY,
		payload,
	}
}

export function changePage(path) {
	const payload = {
		path,
	}

	return {
		type: CHANGE_PAGE,
		payload,
	}
}

export function setLoading(isLoading) {
	return {
    type: TOGGLE_LOADING,
    payload(state) { return {isLoading} }
  }
}
