import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {
const pass = 'Gisan babu'
  return (
    <>

      <Navbar pass={pass}/>
      <Outlet pass={pass} />
    </>
  )
}

export default App
