import './App.css'
import SpinningImage from './components/spinningImage'
import FadingImageAndText from './components/bottomText'
import { useEffect, useState } from 'react'

function App() {
  const [key, setKey] = useState(0)

  useEffect(()=>{
    const interval = setInterval(()=>{
      setKey(prevKey => prevKey + 1)
    }, 4500)

    return ()=> clearInterval(interval)
  })
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* The key is applied to this div to fully re-render both components together */}
      <div key={key} className="flex flex-col items-center">
        <SpinningImage />
        <FadingImageAndText />
      </div>
    </div>
  );
}

export default App
