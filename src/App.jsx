import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>Student Diaries</h1>
     
      <p className="read-the-docs">
        Student Diaries is log and note taking App. Initial stage Version: 0.0.0 
      </p>
    </>
  )
}

export default App
