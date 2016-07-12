import R from "ramda"
import {bubbleChartLabels} from "./options"

export const sumDeathsForLocations = R.memoize(R.compose(
  R.values,
  R.reduce((accObj, dat) => {
    if (!dat.location)
      return accObj

    const location = accObj[dat.location]

    accObj[dat.location] = location ?
      R.merge(location, {deaths: location.deaths + dat.deaths}) :
      dat

    return accObj
  }, {}),
  R.map((dat) => {
    dat.deaths = (dat.deaths)
    return dat
  }),
  R.map(R.pick(["location", "deaths"]))
))

export const pickBubbleChartData = R.memoize(R.map(R.pick(bubbleChartLabels)
))

export const pickBubbleChartValues = R.compose(
	R.map(R.values),
	pickBubbleChartData
)

export const getTotalDeaths = R.memoize(R.compose(
	R.sum,
	R.map(R.path(["deaths"]))
))

export const getTotalCivilDeaths = R.memoize(R.compose(
	R.sum,
	R.map(R.path(["civilians"]))
))

export const getTotalInjuries = R.memoize(R.compose(
	R.sum,
	R.map(R.path(["injuries"]))
))
