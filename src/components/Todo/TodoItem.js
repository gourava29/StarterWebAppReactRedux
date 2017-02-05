import React from 'react';

export const TodoItem = (props) => (
    <li>
        <input defaultChecked={props.isComplete} type='checkbox'/> {props.text}
    </li>
);

TodoItem.propTypes = {
    isComplete: React.PropTypes.bool,
    text: React.PropTypes.string.isRequired
};