import {fetchStrikes} from "./action-creators"

export const routerFactory = ({dispatch}, pageSpec) => (path) => {
  dispatch(fetchStrikes(pageSpec[path]))
}
