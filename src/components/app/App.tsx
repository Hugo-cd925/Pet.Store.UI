import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LandingPage from '../landing-page/LandingPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <LandingPage />
    </div>
  )
}

export default App
