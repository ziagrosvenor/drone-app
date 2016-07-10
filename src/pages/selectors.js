import R from "ramda"

export const strikesByCountry = (state) => (R.filter(
	(incident) => R.toLower(incident.country) === state.selectedCountry
)(state.incidents))
