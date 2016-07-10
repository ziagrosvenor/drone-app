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
  {label: "Deaths_max", type: "number"},
]

const bubbleChartLabels = R.map(R.compose(
	R.toLower,
	R.path(["label"])
))(bubbleChartCols)

const sumDeathsForLocations = R.memoize(R.compose(
  R.values,
  R.reduce((accObj, dat) => {
    const location = accObj[dat.location]

    accObj[dat.location] = location ?
      R.merge(location, {deaths: location.deaths + dat.deaths}) :
      dat

    return accObj
  }, {}),
  R.map((dat) => {
    dat.deaths = parseInt(dat.deaths)
    return dat
  }),
  R.map(R.pick(["location", "deaths"]))
))

const numberRegex = /[0-9]{1,6}/
const convertStrToNum = R.memoize(function(c) {
	return numberRegex.test(c) ? parseInt(c) : 0
})

const pickBubbleChartData = R.memoize(R.map(R.compose(
	R.evolve({
		civilians: convertStrToNum,
		injuries: convertStrToNum,
		deaths_max: convertStrToNum,
	}),
	R.pick(bubbleChartLabels)
)))

const pickBubbleChartValues = R.compose(
	R.map(R.values),
	pickBubbleChartData
)

const getTotalDeaths = R.memoize(R.compose(
	R.sum,
	R.map(R.path(["deaths_max"]))
))

const getTotalCivilDeaths = R.memoize(R.compose(
	R.sum,
	R.map(R.path(["civilians"]))
))

const getTotalInjuries = R.memoize(R.compose(
	R.sum,
	R.map(R.path(["injuries"]))
))

export const statsCtrl = ({store}) => ({
  is: 'drone-stats',
  properties: {
    cols: Array,
    rows: Array,
    deadlyArea: Object,
    bubbleChartData: Array,
  },
  updateState(state) {
    const locationDeathPairs = sumDeathsForLocations(state.incidents)

    this.deadlyArea = locationDeathPairs.reduce((prev, current) => (prev.deaths > current.deaths) ? prev : current)
    this.cols = chartCols
    this.rows = R.map(R.values, locationDeathPairs)

    const bubbleChartRows = pickBubbleChartValues(state.incidents)
    this.bubbleRows = bubbleChartRows
    this.bubbleCols = bubbleChartCols

    this.totalDeaths = getTotalDeaths(pickBubbleChartData(state.incidents))
    this.totalCivilDeaths = getTotalCivilDeaths(pickBubbleChartData(state.incidents))
    this.totalInjuries = getTotalInjuries(pickBubbleChartData(state.incidents))
  },
  ready() {
    store.onValue((state) => {
      if (!state.incidents.length)
        return
      this.updateState(state)
    })
  },
})
