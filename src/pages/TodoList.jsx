import TodoForm from '../components/TodoForm'
import TodoItem from '../components/TodoItem'
import { useTodo } from '../context/TodoContext'

function TodoList() {
  const { todos } = useTodo()

  return (
    <div className="todo-container">
      <h1>My Todo List</h1>
      
      <TodoForm />

      <div className="todo-list">
        {todos.map(todo => (
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