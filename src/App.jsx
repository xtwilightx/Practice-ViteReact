import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './assets/icons/Logo.svg';

import manLookingAtTheCamera from './assets/images/man-looking-at-camera.png'
import bgForManLookingAtTheCamera from './assets/images/bg-for-man-looking-at-camera.jpg'
import ManRaisingUpLookingAtTheCamera from './assets/images/portrait-of-young-handsome-man-in-jean-shirt-raising-up-brow-looking-at-camera.png'
import { Button } from './ui/Button';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="mb-[83px] flex items-center justify-between w-full h-[64px] bg-[#FCFBFA]">
          <div className='flex'><img className='flex-none' src={Logo} alt="React Logo" /></div>

          <div className='flex gap-20'>
            <a className='flex-initial'>Main</a>
            <a className='flex-initial'>About</a>
            <a className='flex-initial'>Get in touch</a>

          </div>
        </div>

      </header>


      <div className=''>
        <div className="">
          <h2 className="text-[60px] font-[Montserrat]">Hey, I’m Nick</h2>
          <h3 className='text-[20px]'>Frontend developer</h3>

          <h3>Help you to create high-quality digital</h3>
          <h3>products that your clients will love and let</h3>
          <h3>your business thrive</h3>
          <button className='text-white w-[188px] h-[50px] bg-[#7E3AF2] py-2 px-4 rounded-full'>Get in touch</button>
        </div>

        <div className='hidden'>
          <img className='rounded-4xl rotate-200 w-[1478px] h-[864px]' src={bgForManLookingAtTheCamera} />
          <div className='absolute left-0 bottom-0'>
            <img className='w-[1070px] h-[689px]' src={manLookingAtTheCamera} />
          </div>
        </div>
      </div>

      <div className='flex'>

        <div className=''>About me</div>
        <img className='w-[364px] h-[364px] rounded-full object-cover' src={ManRaisingUpLookingAtTheCamera} />



      </div>
    </>
  )
}

export default App
