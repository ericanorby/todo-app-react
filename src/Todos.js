// Developer TODO: add App component

import React, { Component } from 'react'

let todos = [
  {title: "clean up your room", completed: true},
  {title: "pay bills", completed: false},
  {title: "do react homework", completed: false},
  {title: "give will a hug", completed: true}
]

class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      completed: false
    }
  }

  render(){
    let notCompleted = todos.filter((todo) => {
      return todo.completed == false
    })
    let list = notCompleted.map((todo) => {
      return(
        <h1>{todo.title}</h1>
      )
    })
  return(
    <div>{list}</div>
  )
  }
}

export default Todo
