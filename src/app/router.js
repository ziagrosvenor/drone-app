import R from "ramda"
import {fetchStrikes, changePage} from "./action-creators"

export const routerFactory = ({dispatch}, pageSpec) => (path) => {
  dispatch(fetchStrikes(R.path(["data"], pageSpec[path])))
  dispatch(changePage("/" + path))
}
