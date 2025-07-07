import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './icons/Logo.svg';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
    <div className="flex items-center justify-between w-full h-[64px] bg-[#FCFBFA]">
    <div className='flex'><img className='flex-none' src={Logo} alt="React Logo" /></div>
    
    <div className='flex gap-20'>
    <a className='flex-initial'>Main</a>
    <a className='flex-initial'>About</a>
    <a className='flex-initial'>Get in touch</a>
    
    </div>
    </div>

    </header>

    <div className="w-full">
        <h2 className="text-[60px]">Hey, I’m Nick</h2>
        <h3 className='text-[20px]'>Frontend developer</h3>
  <h3>Help you to create high-quality digital</h3>
  <h3>products that your clients will love and let</h3>
  <h3>your business thrive</h3>
    </div>

    </>
  )
}

export default App
