import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaTrophy, FaRedo } from "react-icons/fa";
import "./niceTry.css";

const NiceTry = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const percentage = (score / totalQuestions) * 100;
  let message = "";
  let icon = null;

  if (percentage >= 80) {
    message = "Excellent job!";
    icon = <FaTrophy className="trophy-icon" />;
  } else if (percentage >= 60) {
    message = "Good effort!";
  } else {
    message = "Nice try!";
  }

  useEffect(() => {
    if (location.state) {
      setScore(location.state.score);
      setTotalQuestions(location.state.question);
    } else {
      console.error("Category ID not found in location state");
    }
  }, [location]);

  return (
    <div className="game-over-container">
      <div className="game-over-content">
        <h1 className="game-over-title">
          {icon} {message}
        </h1>
        <p className="final-score">
          Your final score is:
          <span className="score-highlight">
            {score}/{totalQuestions}
          </span>
        </p>
        <div className="quote-container">
          <p className="quote">
            "Don't lose hope. Try again until you succeed."
          </p>
          <p className="quote-author">- Anonymous</p>
        </div>
        <button
          className="restart-button"
          onClick={() => navigate("/dashboard")}
        >
          <FaRedo className="restart-icon" /> Play Again
        </button>
        <button className="home-button" onClick={() => navigate("/dashboard")}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default NiceTry;
