
import { useSelector } from 'react-redux'
import './App.css'
import Task from './components/Task'
import TodoInput from './components/TodoInput'

function App() {
  const todos = useSelector((state)=> state.todo.todos)

  return (
    <>
      <TodoInput/>
      <div className='flex items-center flex-col'>
        {todos.length > 0 ?
        todos.map((task) => <Task 
        key={task.id} id={task.id} name={task.name}/>)
        :
        <p className='text-white'>No Work!!!</p>
        }
      </div>
    </>
  )
}

export default App
