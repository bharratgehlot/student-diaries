import { useState } from 'react'
import './App.css'
import ProblematicApp from './pages/problematic'

function App() {
const [showProblematic, setShowProblematic] = useState(false)

if (showProblematic) {
  return <ProblematicApp/>
}

  return (
    <>
    
      <h1>Student Diaries</h1>
     
      <p className="read-the-docs">
        Student Diaries is log and note taking App. Initial Stage <b>Version: 0.0.0 </b>
      </p>
      <a href='#' onClick={()=> setShowProblematic(true)}>access problematic early</a>
    </>
  )
}

export default App
