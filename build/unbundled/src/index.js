import store from "./app/store"
import { routerFactory } from "./app/router"
import { appCtrl } from "./app/controller"
import { mapCtrl, mapRouteSpec } from "./pages/map/map"
import { statsCtrl, statsRouteSpec } from "./pages/stats/stats"
import { listCtrl, listRouteSpec } from "./pages/list/list"

const router = routerFactory(store, {
  map: mapRouteSpec,
  list: listRouteSpec,
  stats: statsRouteSpec,
})

window.appCtrl = appCtrl(router, store)
window.mapCtrl = mapCtrl(store)
window.statsCtrl = statsCtrl(store)
window.listCtrl = listCtrl(store)
