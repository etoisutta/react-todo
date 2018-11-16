import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';
import Typography from '@material-ui/core/Typography'

class App extends Component {
  render() {
    return (      
      <div className="App">
        <Typography variant='display1' align='center' gutterBottom>
          Todo List
        </Typography>
        <TodoList />
      </div>
    );
  }
}

export default App;
