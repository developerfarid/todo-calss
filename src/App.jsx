import { useState } from 'react'
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
