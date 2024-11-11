import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList = [
  {
    id: 1,
    title: "eat"
  },
  {
    id: 2,
    title: "sleep"
  },
  {
    id: 3,
    title: "study"
  },
];


function App() {

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function(item){
          return <li>{item.title}</li>
        })}
      </ul>
    </>
  )
}

export default App
