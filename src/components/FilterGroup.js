import React from "react";

import FilterLink from './FilterLink'

export default () => {
  return (
    <div className="filter-group">
      <FilterLink type="all">All</FilterLink>
      <FilterLink type="finished">Finished</FilterLink>
      <FilterLink type="pending">Pending</FilterLink>
    </div>
  )
}