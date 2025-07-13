import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './assets/icons/Logo.svg';
import BurgerMenu from './assets/icons/BurgerMenu.svg';
import Plane from './assets/icons/Plane.svg';
import User from './assets/icons/User.svg';
import Exclamation from './assets/icons/Exclamation.svg'

import manLookingAtTheCamera from './assets/images/man-looking-at-camera.png';
import bgForManLookingAtTheCamera from './assets/images/bg.jpg';
import bgMobile from './assets/images/bgMobile.png';
import bgTablet from './assets/images/bgTablet.png';
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

          <div className='text-[#696969] font-semibold flex-row gap-3 hidden sm:flex sm:pr-5'>

            <a className='text-[#7E3AF2] flex-initial'>Main</a>
            <a className='flex-initial'>About</a>
            <a className='flex-initial'>Get in touch</a>

          </div>
          <div className='pr-[14.8px] sm:hidden'><img src={burgerIcon} /></div>
        </div>

      </header>

      <main>
  <div className='pl-[16px]'>
        <div className='mb-[48px] relative w-full h-[440px]'>
          <div className="flex flex-col gap-3 w-2/3">
            <h3 className="text-[24px] font-bold text-[#27272A] sm:text-[60px]">Hey, I’m Nick</h3>
            <span className='text-[14px] font-normal w-full text-[#696969] mb-[24px] sm:text-[20px]'>Frontend developer
            </span>
            <hr className='mb-[24px] w-9 border-2 text-[#7E3AF2]'></hr>
            <span className='mb-[24px] text-[14px] font-normal w-full text-[#696969] sm:text-[20px]'>Help you to create high-quality digital products that your clients will love and let your business thrive
            </span>
            <div>
              <Button text={"Get in touch"} />
            </div>
          </div>


          <div className='-z-10 absolute right-0 bottom-0 sm:bottom-21'>
            <img className='rounded-l-4xl sm:hidden' src={bgMobile} />
            <img className='rounded-l-4xl hidden sm:block sm:h-[360px]' src={bgTablet} />
          </div>
        </div>

        <div className='flex flex-col'>

          <section>
            <h2 className="mb-[36px] text-[24px] font-semibold text-[#27272A]">About me</h2>
            <img className='pl-0 mb-[36px] w-full px-4 rounded-full object-cover' src={ManInCircle} />
            <hr className='mb-[24px] w-9 border-2 text-[#7E3AF2]'></hr>
            <p className='mb-[48px] text-[14px] font-normal text-[#696969]'><span className='text-[14px] font-semibold text-[#000000] '>Nick Richardson</span> - specialist in Frontend development. Clear code is my passion.<br /> Solving issues through negotiations </p>
          </section>

          <section className='flex flex-col mb-[49px]'>
            <article className='mb-[29px] text-[20px] font-semibold text-[#27272A]'>
              Interests
            </article>
            <InterestItem className='pb-[25px]' icon={Music} title={"Music"} text={"Indie rock | Reggae"} />
            <InterestItem className='pb-[25px]' icon={Art} title={"Art"} text={"Edvard Munch | Frida Kahlo"} />
            <InterestItem className='pb-[25px]' icon={Photography} title={"Photography"} text={"Portraits"} />
          </section>

          <section>
          <div className='mb-[100px]'>
            <div className="text-[20px] mb-[28px] font-semibold text-[#27272A]">Education & Experience</div>
            <EducationItem className="" year={"2008 - Present"} profession={"Middle Frontend developer"} place={"Ozon"} />
            <br /> <hr className='text-[#E5E7EB]'/> <br />
            <EducationItem className="" year={"2006 - 2007"} profession={"Junior Frontend developer"} place={"Facebook"} />
            <br /> <hr className='text-[#E5E7EB]'/> <br />
            <EducationItem className="" year={"2000 - 2005"} profession={"Frontend developer"} place={"Stanford University"} />
            <br /> <hr className='text-[#E5E7EB] mb-[57px]'/>
            <Button text={"Get in touch"} />
            </div>
          </section>

        </div>
        </div>
        <div className='bg-[url(src/assets/images/unsplash.png)] pt-[64px] px-4 bg-center pb-14'>


            <form className="pt-[48px] flex flex-col flex-wrap gap-1 bg-white shadow-md rounded-[16px]">
              <div className='px-[30px]'>
              <span className='text-center font-semibold text-[20px] text-[#27272A]'>
                Let’s discuss your project
                </span>


              <div className='flex flex-col'>
              <div className="mb-4 mt-[48px]">
                <label className="block text-gray-700 text-sm font-bold mb-2 radius-16" htmlFor="name_surname">
                  Your full name <span className='text-red-500'>*</span>
                </label>
              
                <div className='flex items-center'>
                <img className='absolute px-4' src={User}></img>
                <input className="w-full py-4 px-11  shadow appearance-none border border-[#E5E7EB] rounded-2xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Your email <span className='text-[#E02424]'>*</span>
                </label>
                <div className='flex items-center'>
                <img className='absolute py-2 px-4' src={Exclamation}></img>
                <input className="w-full py-4 px-11  shadow appearance-none border border-[#E5E7EB] rounded-2xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="name@example.com" />
                </div>
                <p className="text-red-500 text-[12px] font-[Inter] font-semibold">Please fill this mandatory field</p>
              </div>
              </div>
              <label className="block text-gray-700 text-sm font-bold mb-2 radius-16" htmlFor="name_surname">
                Tell me about your project
              </label>
              <div className=''>
                <textarea className="w-full py-6 mb-[45px]  w-72 pl-4 shadow appearance-none border border-[#E5E7EB] rounded-2xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Add here a general description of your idea and target aim" />
              </div>
              
              <div className='mb-[48px]'>
              <Button text={"Get in touch"} />
              </div>
              </div>
            </form>

        </div>
        
        <div className='mt-10 mb-10'>
        <p className="text-center text-gray-500 text-xs">
            © 2022 JetRuby. All Rights Reserved
          </p>
          </div>
      </main>      
    </div>
  )
}

export default App
