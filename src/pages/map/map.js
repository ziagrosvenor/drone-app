import R from "ramda"
import {strikesByCountry} from "../selectors"
import mapStyle from "./map-style"

export const mapRouteSpec = {
  data: {
    takeLast: 150,
  },
  path: "/map"
}

export const mapCtrl = ({store, dispatch}) => ({
  is: 'drone-map',
  updateState(mapEl, state) {
    if (state.path !== mapRouteSpec.path)
      return

    const strikes = R.takeLast(mapRouteSpec.takeLast, strikesByCountry(state))

    if (!strikes.length) {
      return
    }

    mapEl.latitude = strikes[0].lat;
    mapEl.longitude = strikes[0].lon;

    R.values(state.entities.strikes).map((strike, i) => {
      let dynamicEl =
        document.createElement("google-map-marker");

      dynamicEl.latitude = strike.lat
      dynamicEl.longitude = strike.lon;
      dynamicEl.clickEvents = true
      dynamicEl.title = strike.location
      dynamicEl.innerHTML = templateMarker(strike)

      mapEl.appendChild(dynamicEl);
    })
  },
  ready() {
    const mapEl = this.$$("google-map")
    mapEl.styles = mapStyle
    store.onValue((state) => this.updateState(mapEl, state))
  },
})

function templateMarker(content) {
  return `<div>
    <p>${content.narrative}</p>
    <p>${content.town || content.location}</p>
    </div>`
}
