import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TodoProvider } from './context/TodoContext'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import TodoList from './pages/TodoList'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <TodoProvider>
      <Router>
        <div className="app">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<TodoList />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </TodoProvider>
  )
}

export default App
