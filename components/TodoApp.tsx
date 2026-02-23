'use client'

import { useState } from 'react'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoStats from './TodoStats'

export interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: Date
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    if (text.trim() === '') return
    
    const newTodo: Todo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    }
    
    setTodos(prevTodos => [newTodo, ...prevTodos])
  }

  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
      <TodoHeader />
      <TodoInput onAdd={addTodo} />
      <TodoList 
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <TodoStats 
        todos={todos}
        onClearCompleted={clearCompleted}
      />
    </div>
  )
}