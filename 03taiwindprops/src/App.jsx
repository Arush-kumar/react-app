import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [username, setUsername] = useState('')
  // let myObj = {
  //         username: "arush",
  //         age:22,
  //       }
  
        // let arr = [1, 2, 3, 4]
  return (
    <>
      <h1 className='bg-green-400 text-black font-bold p-4 rounded-xl'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="arush" />
    </>
  )
}

export default App
