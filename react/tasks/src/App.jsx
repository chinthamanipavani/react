import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TypedValue from './componemt/TypedValue'
import ShowTypedColor from './componemt/ShowTypedColor'
import Name from './componemt/name'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <TypedValue/> */}
      <ShowTypedColor/>
      {/* <Name/> */}
    </>
  )
}

export default App
