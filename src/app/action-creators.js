import R from "ramda"
import fetch from "isomorphic-fetch"
import querystring from "querystring"
import {SELECT_COUNTRY, SELECT_TAB, TOGGLE_LOADING,
FETCH_STRIKES}
  from "./constants"

const whenIsFunc = R.when(R.is(Function)
export const fetchStrikes = (filter = {}) => ({
  type: FETCH_STRIKES,
  payload: (state) => {
    const _filter = R.map(
      whenIsFunc((filter) => filter(state)),
      filter
    )

    const query = querystring
      .stringify(_filter)

    return fetch(`/strikes?${query}`)
      .then((res) => {
        if (res.ok)
          return res.json()
      })
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

export function setLoading(isLoading) {
	return {
    type: TOGGLE_LOADING,
    payload(state) { return {isLoading} }
  }
}
