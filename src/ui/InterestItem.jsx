import Ellipse from '../assets/icons/Ellipse.svg'
export const InterestItem = ({ icon, title, text }) =>
    <article className="flex gap-2 pb-[25px]">
        <div className='relative'>
            <img src={Ellipse

            } />
            <img className='absolute top-6/13 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={icon} />
        </div>
        <div className="flex flex-col">
            <p>{title}</p>
            <p>{text}</p>
        </div>
    </article>