import thanksIllustration from "../assets/illustration-thank-you.svg";
import "./ResultCard.css";

type ResultCardProps = {
  submittedRating: string;
};

export default function ResultCard({ submittedRating }: ResultCardProps) {
  return (
    <section className="card result-card">
      <img
        src={thanksIllustration}
        alt="Receipt being printed out of the mobile phone"
        width={162}
        height={108}
      />
      <p className="submit-info">You selected {submittedRating} out of 5</p>
      <h2>Thank you!</h2>
      <p className="description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </section>
  );
}
