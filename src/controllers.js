var _this
const initialState = {}
window.update = Bacon.constant({})
window.actions = []

function convertActionObservableProp(action) {
	return Bacon.fromPromise(fetch(action).then((res) => res.json())).toProperty()
}

function processNextAction() {
	const action = window.actions.pop()

	window.update = Bacon.combineWith(function(p1, p2) {
  	return Object.assign({}, p1, p2);
	}, window.update, convertActionObservableProp(action));
}

window.dispatch = (action) => {
	window.actions.push(action)
	processNextAction()
}


window.droneMapView = () => ({
  is: 'drone-map',
  properties: {
    map: Object,
  },
  updateState(state) {
    const map = _this.$$("google-map")

    state.incidents.map((strike, i) => {
      var dynamicEl =
        document.createElement("google-map-marker");

      dynamicEl.latitude = strike.lat
      dynamicEl.longitude = strike.lon;
      dynamicEl.clickEvents = true
      dynamicEl.title = strike.location

      dynamicEl.innerHTML =
        "<div>" +
					"<p>" + strike.narrative + "</p>" +
					"<p>" + strike.town || strike.location + "</p>" +
				"</div>"

      if (i === 30) {
        dynamicEl.open = true
      }

      map.appendChild(dynamicEl);
    })
  },
  ready: function() {
    _this = this
		window.update.onValue((state) => {
			_this.updateState(state)
		})

    const map = _this.$$("google-map")
    map.latitude = 31.5782126;
    map.longitude = 68.8674589;
  },
})

window.listView = () => ({
  is: 'incident-list',
	properties: {
  	incidents: Array,
	},
  updateState(state) {
		this.incidents = state.incidents.splice(0, 50)
  },
  ready: function() {
		this.incidents = [{}, {}, {}, {}]
		window.update.onValue((state) => {
			this.updateState(state)
		})
  },
})

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

window.chartView = () => ({
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
  ready: function() {
		window.update.onValue((state) => {
			this.updateState(state)
		})
  },
})


