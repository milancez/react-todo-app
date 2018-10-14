import React from 'react';
import AddTodo from './AddTodo';

const Todos = ({todos, deleteTodo, addTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={ () => { deleteTodo(todo.id) } }>{todo.content}</span>
        </div>
        
      )
    })
  ) : (
    <p className="center">You have no todo's left</p>
  )

  return (
    <div className="container">
      <h1 className="center blue-text">Todo's</h1>
      <div className="todos collection">
        {todoList}
      </div>
      <AddTodo addTodo={addTodo} />
    </div>
  )
}

export default Todos;