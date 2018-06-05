export const ADD_TODO = 'ADD_TODO'
export const MARK_UNMARK = 'MARK_UNMARK'
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const REMOVE_TODO = 'REMOVE_TODO';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    todo: {
      id: '' + Date.now(),
      completed: false,
      text
    }
  }
}

export function markUnmark(id) {
  return {
    type: MARK_UNMARK,
    id
  }
}

export function changeFilter(newFilter) {
  return {
    type: CHANGE_FILTER,
    filter: newFilter
  }
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}