import R from "ramda"

export const strikesByCountry = (state) => (R.filter(
	(strike) => R.toLower(strike.country) === state.selectedCountry
)(state.strikes))
