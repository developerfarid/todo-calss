import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskBoard from './component/TaskBoard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TaskBoard />
    </>
  )
}

export default App
