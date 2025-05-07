import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Count from './component/count'
import Practice from './component/Practice'
import Colors from './component/colors'
import Text from './component/text'
import ShowTypedColor from './component/showTypedColor'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Count/> */}
      {/* <Practice/> */}
      {/* <Colors/> */}
     {/* <Text/> */}
     <ShowTypedColor/>
    </>
  )
}

export default App
