import React, { Component } from 'react';
import { connect } from "react-redux";

import { markUnmark, removeTodo } from "../actions";

import TodoListItem from './TodoListItem.js'

class TodoList extends Component {
  render() {
    const items = this.getFilteredItems()

    return (
      <ul className="todo-list">
        {items.length > 0 ? items : <li className="todo-list__empty">It's pretty lonely here...</li>}
      </ul>
    )
  }

  getFilteredItems = () => {
    const { filterCriteria, todos, toggleTodoStatus, removeTodo } = this.props;
  
    if (filterCriteria === 'all' || !filterCriteria) {
      return todos.map(todo => <TodoListItem key={todo.id} {...todo} onClick={() => toggleTodoStatus(todo.id)} onDeleteClick={() => removeTodo(todo.id)} />)
    } else if (filterCriteria === 'finished') {
      return todos.filter(todo => todo && todo.completed)
                  .map(todo => <TodoListItem key={todo.id} {...todo} onClick={() => toggleTodoStatus(todo.id)} onDeleteClick={() => removeTodo(todo.id)} />)
    } else if (filterCriteria === 'pending') {
      return todos.filter(todo => !todo.completed)
                  .map(todo => <TodoListItem key={todo.id} {...todo} onClick={() => toggleTodoStatus(todo.id)} onDeleteClick={() => removeTodo(todo.id)} />)
    }
  }
}



function mapStateToProps(state) {
  return {
    todos: state.todos,
    filterCriteria: state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodoStatus: id => {
      dispatch(markUnmark(id))
    },

    removeTodo: id => {
      dispatch(removeTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)