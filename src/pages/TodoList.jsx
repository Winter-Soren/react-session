import { useMemo, useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoItem from '../components/TodoItem'
import { useTodo } from '../context/TodoContext'

function TodoList() {
  const { todos } = useTodo()
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }, [todos, filter])

  const todoStats = useMemo(() => {
    const total = todos.length
    const completed = todos.filter(todo => todo.completed).length
    const active = total - completed
    return { total, completed, active }
  }, [todos])

  return (
    <div className="todo-container">
      <h1>My Todo List</h1>
      
      <TodoForm />

      <div className="todo-filters">
        <button 
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          All ({todoStats.total})
        </button>
        <button 
          onClick={() => setFilter('active')}
          className={filter === 'active' ? 'active' : ''}
        >
          Active ({todoStats.active})
        </button>
        <button 
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
        >
          Completed ({todoStats.completed})
        </button>
      </div>

      <div className="todo-list">
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
    </div>
  )
}

export default TodoList 