// Developer TODO: add App component

import React, { Component } from 'react'

let todos = [
  {title: "clean up your room", completed: true},
  {title: "blah blah blah", completed: false},
  {title: "pay bills", completed: false},
  {title: "do react homework", completed: false},
  {title: "give will a hug", completed: true}
]

class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: "",
      completed: false
    }
  }

  userInput(event) {
    this.setState({
      title: event.target.value
    })
  }

  addTodo(event) {
    event.preventDefault()
    todos.push(this.state)
    this.forceUpdate()
  }

  render(){
    let notCompleted = todos.filter((todo) => {
      return todo.completed === false
    })
    let list = notCompleted.map((todo, index) => {
      return(
        <div key={index}>
          <h2>{todo.title}</h2>
        </div>
      )
    })
    return(
      <div>
        <h1>Todos</h1>
        <div>{list}</div>
        <form onSubmit={(e) => this.addTodo(e)}>
          <input type='text' placeholder='Add new todo' onChange={(e) => this.userInput(e)} />
          <button type='submit'>Create</button>
        </form>
      </div>
    )
  }
}

export default Todo
