export const EducationItem = ({year, profession, place }) =>
    <article className="flex gap-8">
        <div>
            <p>{year}</p>
        </div>
        <div className="flex flex-col">
            <p><b>{profession}</b></p>
            <p>{place}</p>
        </div>
    </article>