import iconStar from "../assets/icon-star.svg";
import { generateBtnArr } from "../helpers";
import "./RatingCard.css";

type RatingCardProps = {
  setIsSubmitted: (value: boolean) => void;
  setSubmittedRating: (value: string) => void;
  submittedRating: string;
  ratingRange: number;
};

export default function RatingCard({
  setIsSubmitted,
  setSubmittedRating,
  submittedRating,
  ratingRange,
}: RatingCardProps) {
  const btnArray = generateBtnArr(ratingRange);
  return (
    <section className="card">
      <div className="container-circle">
        <img src={iconStar} alt="Yellow star icon" />
      </div>
      <h2>How did we do?</h2>
      <p className="description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="ratings-container">
        {btnArray.map((btnNum) => (
          <button
            className={`rating-btn ${
              submittedRating === btnNum ? "selected-btn" : ""
            }`}
            onClick={() => setSubmittedRating(btnNum)}
          >
            {btnNum}
          </button>
        ))}
      </div>
      <button
        className="submit-btn"
        type="button"
        onClick={() => setIsSubmitted(true)}
      >
        Submit
      </button>
    </section>
  );
}
