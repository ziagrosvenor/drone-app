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
  is: 'my-view1',
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
					"<h2>" + strike.narrative + "</h2>" +
					"<h3>" + strike.location + "</h3>" +
					"<p>" + strike.date + "</p>" +
				"</div>"

      if (i === 30) {
        dynamicEl.open = true
      }

      map.appendChild(dynamicEl);
    })
  },
  ready: function() {
    _this = this

		window.dispatch("/incidents")
		window.update.onValue((state) => {
			_this.updateState(state)
		})

    const map = _this.$$("google-map")
    map.latitude = 31.5782126;
    map.longitude = 68.8674589;
  },
})

window.listView = () => ({
  is: 'my-view2',
	properties: {
  	incidents: Array,
	},
  updateState(state) {
		this.incidents = state.incidents
  },
  ready: function() {
		window.update.onValue((state) => {
			this.updateState(state)
		})
  },
})
