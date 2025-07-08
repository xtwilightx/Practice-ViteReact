import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './assets/icons/Logo.svg';

import manLookingAtTheCamera from './assets/images/man-looking-at-camera.png'
import bgForManLookingATC from './assets/images/bg-for-man-looking-at-camera.jpg'
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


  <div className='flex'>
    <div className="w-full">
        <h2 className="text-[60px] font-[Montserrat]">Hey, I’m Nick</h2>
        <h3 className='text-[20px]'>Frontend developer</h3>

  <h3>Help you to create high-quality digital</h3>
  <h3>products that your clients will love and let</h3>
  <h3>your business thrive</h3>
    </div>

  <div className='relative'>
  <img className='rounded-[100px] rotate-250 w-[1478px] h-[864px]' src={bgForManLookingATC} />
  <div className='absolute'>
  <img className='w-[1070px] h-[689px]' src={manLookingAtTheCamera} />
  </div>
  </div>
  </div>

  <button className='text-white w-[188px] h-[50px] bg-[#7E3AF2] py-2 px-4 rounded-full'>Get in touch</button>
    </>
  )
}

export default App
