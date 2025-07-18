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
        <div className='pl-4 sm:pl-10 lg:pl-20'>
          <div className='mb-[48px] relative w-full h-[440px]'>
            <div className="flex flex-col gap-3 w-2/3">
              <h1 className="text-[24px] font-bold text-[#27272A] hidden sm:block sm:text-6xl lg:text-6xl">Hey, I’m Nick</h1>
              <h3 className="text-2xl font-bold text-[#27272A] sm:hidden">Hey, I’m Nick</h3>
              <span className='text-[14px] font-normal w-full text-[#696969] mb-[24px] sm:text-2xl'>Frontend developer
              </span>
              <hr className='mb-[24px] w-9 border-2 text-[#7E3AF2]'></hr>
              <span className='mb-[24px] text-[14px] font-normal w-full text-[#696969] sm:text-2xl'>Help you to create high-quality digital products that your clients will love and let your business thrive
              </span>
              <div>
                <Button text={"Get in touch"} />
              </div>
            </div>


            <div className='-z-10 absolute right-0 top-[207px] sm:bottom-21'>
              <img className='rounded-l-4xl sm:hidden' src={bgMobile} />
              <img className='rounded-l-4xl hidden sm:block sm:h-[360px]' src={bgTablet} />
            </div>
          </div>


          <section className='pt-[55px]'>
            <div className='sm:flex flex-row gap-11'>
              <div className='sm:w-[calc(40%-1.5rem)]'>
              <h2 className="mb-[36px] text-2xl sm:text-3xl sm:font-bold font-semibold text-[#27272A]">About me</h2>
              <img className='pl-0 mb-[36px] w-full px-4 rounded-full object-cover' src={ManInCircle} />
            </div>
            
            <div className=''>
              <hr className='mb-[24px] w-9 border-2 text-[#7E3AF2]'></hr>
              <p className='mb-[48px] text-[14px] sm:text-2xl font-normal text-[#696969]'><span className='font-semibold text-[#000000]'>Nick Richardson</span> - specialist in Frontend development. Clear code is my passion.<br /> Solving issues through negotiations </p>
              {/* <Button text={"Get in touch"} /> */}
            </div>
            </div>
          </section>

        <div className='flex flex-col sm:pr-48 justify-between sm:flex-row'>
          <section className='flex flex-col mb-12'>
            <article className='mb-[29px] text-[20px] sm:text-2xl font-semibold text-[#27272A]'>
              Interests
            </article>
            <InterestItem className='pb-[25px]' icon={Music} title={"Music"} text={"Indie rock | Reggae"} />
            <InterestItem className='pb-[25px]' icon={Art} title={"Art"} text={"Edvard Munch | Frida Kahlo"} />
            <InterestItem className='pb-[25px]' icon={Photography} title={"Photography"} text={"Portraits"} />
          </section>

          <section>
          <div className='mb-[100px]'>
            <div className="text-[20px] sm:text-2xl mb-7 font-semibold text-[#27272A]">Education & Experience</div>
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
 
  <form className="pt-[48px] bg-white shadow-md rounded-[16px] max-w-4xl mx-auto">
    <div className='px-8'>
      <h2 className='text-center font-semibold text-[20px] text-[#27272A] mb-8'>
        Let’s discuss your project
      </h2>

      <div className='flex flex-col sm:flex-row sm:gap-8'>

        <div className="mb-6 flex-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Your full name <span className='text-red-500'>*</span>
          </label>
          <div className='relative'>
            <img className='absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5' src={User} alt="User icon" />
            <input 
              className="w-full py-4 pl-11 pr-4 border border-[#E5E7EB] rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
              id="name" 
              type="text" 
              placeholder="Username" 
            />
          </div>
        </div>


        <div className="mb-6 flex-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Your email <span className='text-[#E02424]'>*</span>
          </label>
          <div className='relative'>
            <img className='absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5' src={Exclamation} alt="Warning icon" />
            <input 
              className="w-full py-4 pl-11 pr-4 border border-[#E5E7EB] rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
              id="email" 
              type="email" 
              placeholder="name@example.com" 
            />
          </div>
          <p className="text-red-500 text-xs mt-1 font-semibold">
            Please fill this mandatory field
          </p>
        </div>
      </div>


      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="project">
          Tell me about your project
        </label>
        <textarea 
          className="w-full min-h-[150px] py-4 px-4 border border-[#E5E7EB] rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
          id="project" 
          placeholder="Add here a general description of your idea and target aim" 
        />
      </div>


      <div className='mb-[48px]'>
        <Button text="Get in touch" className="w-full" />
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
