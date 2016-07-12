import R from "ramda"
import {bubbleChartLabels} from "./options"

const sumDeathsForLocations = R.memoize(R.compose(
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

const pickBubbleChartData = R.memoize(R.map(R.pick(bubbleChartLabels)
))

const pickBubbleChartValues = R.compose(
	R.map(R.values),
	pickBubbleChartData
)

const getTotalDeaths = R.memoize(R.compose(
	R.sum,
	R.map(R.path(["deaths"]))
))

const getTotalCivilDeaths = R.memoize(R.compose(
	R.sum,
	R.map(R.path(["civilians"]))
))

const getTotalInjuries = R.memoize(R.compose(
	R.sum,
	R.map(R.path(["injuries"]))
))
