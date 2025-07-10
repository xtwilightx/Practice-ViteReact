import Ellipse from '../assets/icons/Ellipse.svg'
export const InterestItem = ({ icon, title, text }) =>
    <article className="flex gap-2 pb-[25px]">
        <div className='relative'>
            <img src={Ellipse

            } />
            <img className='absolute inset-0 translate-3' src={icon} />
        </div>
        <div className="flex flex-col">
            <p>{title}</p>
            <p>{text}</p>
        </div>
    </article>