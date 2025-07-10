export const EducationItem = ({year, profession, place }) =>
    <article className="flex justify-between">
        <div>
            <p>{year}</p>
        </div>
        <div className="flex flex-col">
            <p>{profession}</p>
            <p>{place}</p>
        </div>
    </article>