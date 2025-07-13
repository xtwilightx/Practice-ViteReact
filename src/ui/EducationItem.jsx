export const EducationItem = ({ year, profession, place }) => (
    <article className="flex gap-8 text-[14px] sm:text-2xl">
      <div className="w-1/4">
        <p className="text-gray-500">{year}</p>
      </div>
      <div className="flex-1"> 
        <p className="font-semibold text-[#27272A]">{profession}</p>
        <p className="text-gray-500 mt-1">{place}</p>
      </div>
    </article>
  )