import React from "react";

export default ({ text, completed, onClick, onDeleteClick }) => {
  const classes = ["todo-list__item"];

  if (completed) classes.push("todo-list__item--completed");

  return (
      <li className={classes.join(' ')} onClick={onClick}>
        <span className="todo-list__item-text">{text}</span>
        <span className="todo-list__item-del-btn" onClick={e => e.stopPropagation() || onDeleteClick(e)}>&times;</span>
      </li>
  )
}