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
import formBG from './assets/images/formBG.svg'
import burgerIcon from './assets/icons/BurgerMenu.svg'
import { InterestItem } from './ui/InterestItem';
import { EducationItem } from './ui/EducationItem';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font-[Montserrat]'>
      <header>
        <div className=''></div>
        <div className="border-[#E5E7EB] border-b-1 mb-[27px] flex items-center justify-between w-full h-[64px]">
          <div className='flex'>
            <img className='pl-[16px]' src={Logo} alt="React Logo" /></div>

          <div className='flex-col hidden sm:block'>

            <a className='flex-initial'>Main</a>
            <a className='flex-initial'>About</a>
            <a className='flex-initial'>Get in touch</a>

          </div>
          <div className='pr-[14.8px] sm:hidden'><img src={burgerIcon} /></div>
        </div>

      </header>

      <main>
  <div className='pl-[16px]'>
        <div className='mb-[48px] relative w-full h-[440px] overflow-hidden'>
          <div className="flex flex-col gap-3 w-2/3">
            <span className="text-[24px] font-bold">Hey, I’m Nick</span>
            <span className='text-[14px] font-normal w-full text-[#696969] mb-[24px]'>Frontend developer
            </span>
            <hr className='mb-[24px] w-9 border-2 text-[#7E3AF2]'></hr>
            <span className='text-[14px] font-normal w-full text-[#696969]'>Help you to create high-quality digital products that your clients will love and let your business thrive
            </span>
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

          <section>
            <h2 className="mb-[36px] text-[24px] font-bold">About me</h2>
            <img className='mb-[36px] size-[326px] rounded-full object-cover' src={ManInCircle} />
            <hr className='mb-[24px] w-9 border-2 text-[#7E3AF2]'></hr>
            <p className='mb-[48px] text-[14px]'><b>Nick Richardson</b> - specialist in Frontend development. Clear code is my passion. Solving issues through negotiations </p>
          </section>

          <section className='flex flex-col'>
            <article className='mb-[29px] text-[29px] fint-'>
              Interests
            </article>
            <InterestItem className='pb-[25px]' icon={Music} title={"Music"} text={"Indie rock | Reggae"} />
            <InterestItem className='pb-[25px]' icon={Art} title={"Art"} text={"Edvard Munch | Frida Kahlo"} />
            <InterestItem className='pb-[25px]' icon={Photography} title={"Photography"} text={"Portraits"} />
          </section>

          <section className=''>

            <EducationItem className="" year={"2008 - Present"} profession={"Middle Frontend developer"} place={"Ozon"} />
            <br /> <hr className='text-[#E5E7EB]'/> <br />
            <EducationItem className="" year={"2006 - 2007"} profession={"Junior Frontend developer"} place={"Facebook"} />
            <br /> <hr className='text-[#E5E7EB]'/> <br />
            <EducationItem className="" year={"2000 - 2005"} profession={"Frontend developer"} place={"Stanford University"} />
            <br /> <hr className='text-[#E5E7EB]'/> <br />
            <Button text={"Get in touch"} />
          </section>

        </div>

        <div className='bg-[url(src/assets/images/unsplash.png)] px-4 bg-center'>123ssssssss


          <div className="">
            <form className="bg-white shadow-md rounded-3xl">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name_surname">
                  Your full name <span className='text-red-500'>*</span>
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Your email <span className='text-red-500'>*</span>
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="******************" />
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
              </div>
              <Button />
            </form>
          </div>
          <p className="text-center text-gray-500 text-xs">
            © 2022 JetRuby. All Rights Reserved
          </p>
        </div>
        </div>
      </main>
    </div>
  )
}

export default App
