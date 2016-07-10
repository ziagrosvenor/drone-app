import {strikesByCountry} from "../selectors"
import mapStyle from "./map-style"

export const mapCtrl = ({store, dispatch}) => ({
  is: 'drone-map',
  updateState(state) {
    const map = this.$$("google-map")
		const strikes = strikesByCountry(state)

    map.latitude = strikes[0].lat;
    map.longitude = strikes[0].lon;
		map.styles = mapStyle

    state.incidents.map((strike, i) => {
      let dynamicEl =
        document.createElement("google-map-marker");

      dynamicEl.latitude = strike.lat
      dynamicEl.longitude = strike.lon;
      dynamicEl.clickEvents = true
      dynamicEl.title = strike.location

      dynamicEl.innerHTML = templateMarker(strike)

      map.appendChild(dynamicEl);
    })
  },
  ready() {
		store.onValue((state) => {
			this.updateState(state)
		})
  },
})

function templateMarker(content) {
  `<div>
    <p>${content.narrative}</p>
    <p>${content.town || content.location}</p>
  </div>`
}
