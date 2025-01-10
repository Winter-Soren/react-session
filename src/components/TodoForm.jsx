import { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoForm() {
  const [input, setInput] = useState('')
  const { addTodo } = useTodo()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    addTodo(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoForm 