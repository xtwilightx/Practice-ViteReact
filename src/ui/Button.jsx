import Plane from '../assets/icons/Plane.svg';
export const Button = ({text}) => <button className='items-center font-[Montserrat] font-semibold w-[139px] h-[39px] text-[14px] flex justify-center gap-2 text-white bg-[#7E3AF2] rounded-full
sm:w-[188px] sm:h-[50px] sm:text-[16px] sm:py-3'>
<span>{text}</span>
<img className='h-5' src={Plane} alt="Plane Icon" />
</button>