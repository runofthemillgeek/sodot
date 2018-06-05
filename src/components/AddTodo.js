import React, { Component } from 'react';
import { connect } from "react-redux";

import { addTodo } from "../actions";

class AddTodo extends Component {
  state = {
    hasFocus: false
  }

  inputElement = React.createRef()
  
  toggleFocusState = () => this.setState(prevState => ({ hasFocus: !prevState.hasFocus }))

  onButtonClick = event => {
    const { onTodoAdd } = this.props;

    onTodoAdd(this.inputElement.current.value)
    this.inputElement.current.value = ''
  }
  
  render() {

    const inputClasses = ["add-todo"];

    if (this.state.hasFocus) inputClasses.push("add-todo--has-focus")

    return (
      <div className={inputClasses.join(' ')}>
        <input
          ref={this.inputElement}
          className="add-todo__input"
          type="text"
          onFocus={this.toggleFocusState}
          onBlur={this.toggleFocusState}
          onKeyUp={({key}) => key === 'Enter' && this.onButtonClick() } />
        <button className="add-todo__btn" onClick={this.onButtonClick}>+</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoAdd: text => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);