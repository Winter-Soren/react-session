import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const TodoContext = createContext()

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos')
        return savedTodos ? JSON.parse(savedTodos) : []
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = useCallback((text) => {
        setTodos(prev => [...prev, { id: Date.now(), text, completed: false }])
    }, [])

    const toggleTodo = useCallback((id) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }, [])

    const deleteTodo = useCallback((id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }, [])

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export function useTodo() {
    const context = useContext(TodoContext)
    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider')
    }
    return context
} 