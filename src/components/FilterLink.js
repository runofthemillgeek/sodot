import React from 'react';
import { connect } from "react-redux";

import { changeFilter } from '../actions'

const FilterLink = ({ type, children, onClick, active }) => {
  const classNames = ["filter-link"];

  if (active) classNames.push("filter-link--active")

  return (
    <div className={classNames.join(' ')} onClick={() => onClick(type)}>{ children }</div>
  )
}

function mapStateToProps(state, nowProps) {
  return {
    active: state.filter === nowProps.type
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: type => {
      dispatch(changeFilter(type));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
