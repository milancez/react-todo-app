import React, { Component } from 'react';
import Todos from './Todos';
import Addtodo from './AddTodo';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  deleteTodo = (id) => {
    //console.log(id);
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })

    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="todo-app">
          <Navbar />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />

          <Route 
            path='/todo' 
            component={ 
              () => <Todos todos={this.state.todos} deleteTodo={ this.deleteTodo } addTodo={this.addTodo} /> 
            }
          />

          {/* <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo={ this.deleteTodo } />
          <Addtodo addTodo={this.addTodo} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
