import store from "./app/store"
import { appCtrl } from "./app/controller"
import { mapCtrl } from "./pages/map/map"
import { statsCtrl } from "./pages/stats/stats"
import { listCtrl } from "./pages/list/list"

console.log(store)

window.appCtrl = appCtrl(store)
window.mapCtrl = mapCtrl(store)
window.statsCtrl = statsCtrl(store)
window.listCtrl = listCtrl(store)
