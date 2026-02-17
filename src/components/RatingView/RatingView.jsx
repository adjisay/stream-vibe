import "./RatingView.scss"

import starsUnfilledImgSrc from "@/assets/images/rating/stars_unfilled.svg"
import starsFilledImgSrc from "@/assets/images/rating/stars_filled.svg"

const RatingView = (props) => {
  const { value, label } = props
  const airaLabel = `Rating: ${value} stars`

  return (
    <div
      className="rating-view"
      aria-label={airaLabel}
      title={airaLabel}
      style={{ "--ratingViewValue": value }}
    >
      <div className="rating-view__stars">
        <img
          width={98}
          height={18}
          src={starsUnfilledImgSrc}
          alt=""
          className="rating-view__stars-unfilled"
        />
        <img
          width={98}
          height={18}
          src={starsFilledImgSrc}
          alt=""
          className="rating-view__stars-filled"
        />
      </div>
      {label && <div className="rating-view__label">{label}</div>}
    </div>
  )
}

export default RatingView
