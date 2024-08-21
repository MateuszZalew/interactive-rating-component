import { useState } from "react";
import "./App.css";
import RatingCard from "./components/RatingCard";
import ResultCard from "./components/ResultCard";

type AppProps = {
  ratingRange: number;
};

function App({ ratingRange }: AppProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedRating, setSubmittedRating] = useState("");

  return (
    <main>
      {isSubmitted ? (
        <ResultCard submittedRating={submittedRating} />
      ) : (
        <RatingCard
          ratingRange={ratingRange}
          submittedRating={submittedRating}
          setIsSubmitted={setIsSubmitted}
          setSubmittedRating={setSubmittedRating}
        />
      )}
    </main>
  );
}

export default App;
