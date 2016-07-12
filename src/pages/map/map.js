import R from "ramda"
import {strikesByCountry} from "../selectors"
import mapStyle from "./map-style"

export const mapRouteSpec = {
  data: {
    takeLast: 150,
  },
  path: "/map"
}

const getStrikes = R.when(
  R.compose(
    R.not,
    R.isNil
  ),
  R.compose(
    R.takeLast(mapRouteSpec.takeLast),
    R.values
  )
)

export const mapCtrl = ({store, dispatch}) => ({
  is: 'drone-map',
  updateState(mapEl, state) {
    if (state.path !== mapRouteSpec.path)
      return

    const strikes = strikesByCountry(state)

    if (!strikes || strikes.length === 0) {
      return
    }

    const _strikes = getStrikes(state.entities.strikes)

    const markerEls = _strikes.map((strike, i) => {
      let markerEl =
        document.createElement("google-map-marker");

      markerEl.latitude = strike.lat
      markerEl.longitude = strike.lon;
      markerEl.clickEvents = true
      markerEl.title = strike.location
      markerEl.innerHTML = templateMarker(strike)
      return markerEl
    })

    markerEls.map((el) => mapEl.appendChild(el));
    mapEl.resize()
    mapEl.latitude = strikes[0].lat;
    mapEl.longitude = strikes[0].lon;
  },
  ready() {
    const mapEl = this.$$("#strikes-map")
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
