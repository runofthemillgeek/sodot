import {
  ADD_TODO,
  MARK_UNMARK,
  REMOVE_TODO
} from '../actions'

const dummyState = [
  {
    text: 'test',
    id: 1,
    completed: true
  },
  {
    text: 'test2',
    id: 2,
    completed: false
  }
]

export default function todoReducer(state = dummyState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo]
    case MARK_UNMARK: {
      const idx = state.findIndex(el => el.id === action.id)

      return [
        ...state.slice(0, idx),
        { ...state[idx], completed: !state[idx].completed },
        ...state.slice(idx + 1)
      ]
    }
    case REMOVE_TODO: {
      const idx = state.findIndex(el => el.id === action.id)

      const elems = [
        ...state.slice(0, idx),
        ...state.slice(idx + 1)
      ]

      return elems
    }
    default:
      return state;    
  }
}