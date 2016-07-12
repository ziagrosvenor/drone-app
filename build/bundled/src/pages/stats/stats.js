import R from "ramda"
import {bubbleChartLabels, bubbleChartCols, chartCols} from "./options"
import {sumDeathsForLocations, getTotalInjuries,
  getTotalCivilDeaths, getTotalDeaths, pickBubbleChartData, pickBubbleChartValues,
} from "./selectors"

export const statsRouteSpec = {
  path: "/stats",
}

export const statsCtrl = ({store}) => ({
  is: 'drone-stats',
  properties: {
    cols: Array,
    rows: Array,
    deadlyArea: Object,
    bubbleChartData: Array,
  },
  updateState(path, strikes) {
    if (path !== statsRouteSpec.path)
      return

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

      if (!strikes || strikes.length === 0)
        return

      this.updateState(state.path, strikes)
    })
  },
})
