import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, text: 'Start building app in one component', isComplete: false},
        {id: 2, text: 'Divide the app into multiple components', isComplete: false},
        {id: 3, text: 'Apply testing for each component', isComplete: false}
      ],
      currentTodo: ''
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange(evt) {
    this.setState({
      currentTodo: evt.target.value
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo}/>
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
