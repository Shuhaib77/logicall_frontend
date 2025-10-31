import { useState } from 'react'

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
