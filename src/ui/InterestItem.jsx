import Ellipse from '../assets/icons/Ellipse.svg';

export const InterestItem = ({ icon, title, text }) => (
  <article className="flex gap-4 items-start pb-[25px] sm:pb-[44px] lg:pb-[48px]">

    <div className="relative flex-shrink-0">
      <img 
        src={Ellipse} 
        className="w-10 h-10 sm:w-12 sm:h-12" 
        alt=""
      />
      <img 
        src={icon} 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5"
        alt={title}
      />
    </div>


    <div className="flex flex-col">
      <p className="font-medium text-[14px] sm:text-2xl">{title}</p>
      <p className="text-gray-500 text-[14px] sm:text-2xl">{text}</p>
    </div>
  </article>
)