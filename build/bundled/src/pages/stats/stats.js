import R from "ramda"

const chartCols = [
  {label: "Location", type: "string"},
  {label: "Lives lost", type: "number"}
]

const bubbleChartCols = [
  {label: "Location", type: "string"},
  {label: "Civilians", type: "number"},
  {label: "Injuries", type: "number"},
  {label: "Country", type: "string"},
  {label: "Deaths", type: "number"},
]

const bubbleChartLabels = R.map(R.compose(
	R.toLower,
	R.path(["label"])
))(bubbleChartCols)

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

export const statsRouteSpec = {
}

export const statsCtrl = ({store}) => ({
  is: 'drone-stats',
  properties: {
    cols: Array,
    rows: Array,
    deadlyArea: Object,
    bubbleChartData: Array,
  },
  updateState(strikes) {
    const locationDeathPairs = sumDeathsForLocations(strikes)

    this.deadlyArea = locationDeathPairs.reduce((prev, current) => (prev.deaths > current.deaths) ? prev : current)
    this.cols = chartCols
    this.rows = R.map(R.values, locationDeathPairs)

    const bubbleChartRows = pickBubbleChartValues(strikes)
    this.bubbleRows = bubbleChartRows
    this.bubbleCols = bubbleChartCols

    this.totalDeaths = getTotalDeaths(pickBubbleChartData(strikes))
    this.totalCivilDeaths = getTotalCivilDeaths(pickBubbleChartData(strikes))
    this.totalInjuries = getTotalInjuries(pickBubbleChartData(strikes))
  },
  ready() {
    store.onValue((state) => {
      const strikes = R.values(state.entities.strikes)

      if (!strikes)
        return

      this.updateState(strikes)
    })
  },
})
