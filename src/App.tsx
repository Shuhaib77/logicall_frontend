import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserRoute from './routes/route'
import { Toaster } from "sonner";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Toaster position="top-center" richColors />
     <UserRoute/>
    </>
  )
}

export default App
