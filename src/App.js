import React from 'react'
import { Provider } from "react-redux";

import store from './store'

import Header from './components/Header'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import FilterGroup from './components/FilterGroup'

import './styles.css'

export default () => (
  <Provider store={store}>
    <main>
      <Header />
      <AddTodo />
      <FilterGroup />
      <TodoList />
    </main>
  </Provider>
)