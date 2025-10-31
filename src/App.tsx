

import './App.css'
import UserRoute from './routes/route'
import { Toaster } from "sonner";


function App() {


  return (
    <>
          <Toaster position="top-center" richColors />
     <UserRoute/>
    </>
  )
}

export default App
