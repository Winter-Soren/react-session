import { memo } from 'react'
import { useTodo } from '../context/TodoContext'

const TodoItem = memo(function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useTodo()

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  )
})

export default TodoItem 