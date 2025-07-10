import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './assets/icons/Logo.svg';
import BurgerMenu from './assets/icons/BurgerMenu.svg';
import Plane from './assets/icons/Plane.svg';

import manLookingAtTheCamera from './assets/images/man-looking-at-camera.png';
import bgForManLookingAtTheCamera from './assets/images/bg.jpg';
import bgMobile from './assets/images/bgMobile.png';
import ManInCircle from './assets/images/ManInCircle.png';
import { Button } from './ui/Button';
import Music from './assets/icons/Music.svg'
import Art from './assets/icons/Art.svg'
import Photography from './assets/icons/Photography.svg'
import { InterestItem } from './ui/InterestItem';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className=''></div>
        <div className="mb-[83px] flex items-center justify-between w-full h-[64px] bg-[#FCFBFA]">
          <div className='flex'><img className='flex-none' src={Logo} alt="React Logo" /></div>

          <div className='flex-col hidden sm:block'>

            <a className='flex-initial'>Main</a>
            <a className='flex-initial'>About</a>
            <a className='flex-initial'>Get in touch</a>

          </div>
          <div className=' sm:hidden'><div>-</div>-<div></div>-<div></div> </div>
        </div>

      </header>


      <div className='relative w-full h-[300px] overflow-hidden'>
        <div className="flex flex-col gap-3 w-2/3">
          <h2 className="text-[24px] font-bold font-[Montserrat]">Hey, I’m Nick</h2>
          <div className='text-[14px] w-full'>Frontend developer Help you to create high-quality digital products that your clients will love and let your business thrive
          </div>
          <div>
            <Button text={"Get in touch"} />
          </div>
        </div>


        <div className='-z-10 absolute right-0 bottom-0'>
          <img className='rounded-4xl sm:hidden' src={bgMobile} />
          {/* <div className='absolute left-0 bottom-0'>
            <img className='' src={manLookingAtTheCamera} />
          </div> */}
        </div>
      </div>

      <div className='flex-col'>

        <h2 className="text-[24px] font-bold font-[Montserrat]">About me</h2>
        <img className='w-[364px] h-[364px] rounded-full object-cover' src={ManInCircle} />
        <section className='flex flex-col'>
          <article className=''>
            Interests
          </article>
          <InterestItem icon={Music} title={"Music"} text={"Indie rock | Reggae"} />
          <br />
          <InterestItem icon={Art} title={"Art"} text={"Edvard Munch | Frida Kahlo"} />
          <br />
          <InterestItem icon={Music} title={"Photography"} text={"Portraits"} />
        </section>

        <section>


        </section>
      
      </div>
    </>
  )
}

export default App
