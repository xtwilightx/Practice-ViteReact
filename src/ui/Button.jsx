import Plane from '../assets/icons/Plane.svg';
export const Button = ({text}) => <button className='text-[14px]  flex gap-2 text-white bg-[#7E3AF2] py-2 px-4 rounded-full'>
<span>{text}</span>
<img className='' src={Plane} alt="React Logo" />
</button>