import React from 'react';

export const TodoForm = (props) => (
    <form>
        <input onChange={props.handleInputChange} value={props.currentTodo} type='text'/>
    </form>    
);

TodoForm.propTypes = {
  currentTodo: React.PropTypes.string.isRequired,
  handleInputChange: React.PropTypes.func.isRequired
};