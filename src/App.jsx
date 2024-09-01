import { useState, useEffect } from 'react'
import PomodoroTimer from './components/Timer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="App">
        <PomodoroTimer />
    </div>
    </>
  )
}

export default App
