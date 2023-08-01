import { Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './components/index'
import Success from './components/success'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/success' element={<Success/>} />
    </Routes>

  )
}

export default App
