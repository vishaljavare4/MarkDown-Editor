import { useState } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/Navbar'
import Editor from './Components/Editor/Editor'
import EditorMarkDown from './Components/Editor/EditorMarkDown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex  gap-2'>
      <Router>
        
        <NavBar/>
        <Routes>
          <Route path='/texteditor' element= {<Editor/>}/>
          <Route path='/markdown' element = {<EditorMarkDown/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App