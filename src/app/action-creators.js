import {SELECT_COUNTRY, SELECT_TAB, TOGGLE_LOADING}
  from "./constants"

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
