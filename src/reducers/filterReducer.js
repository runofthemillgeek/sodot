import {
  CHANGE_FILTER
} from '../actions'

export default function filterReducer(state = 'all', action) {
  switch (action.type) {
    case CHANGE_FILTER:
      if (typeof action.type === 'string')
        return action.filter
      break
    default:
      return state
  }
}