import { ITrailerPropsType } from "../../componentsTypes/propsTypes"

const Trailer = ({ trailerKey }: ITrailerPropsType) => {
  return (
    <div>
      <iframe
        width="500"
        height="300"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        title="..."
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default Trailer