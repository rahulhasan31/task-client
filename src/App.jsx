import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Route/Router'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();

  return (
    <div className="">
     <RouterProvider router={router}>

     </RouterProvider>
    </div>
  )
}

export default App
