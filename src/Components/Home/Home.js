import React from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="left-content">
        <h1>Welcome to the Quiz App!</h1>
        <p>
          Test your knowledge on various topics and see how much you can score!
        </p>
        <button onClick={() => navigate("/dashboard")} className="start-button">
          <FaPlay className="icon" /> Start Quiz
        </button>
      </div>

      <div className="right-content">
        <img
          src="https://cdn.dribbble.com/users/1259171/screenshots/4446879/quiz-game_by-cocoa.gif"
          alt="Quiz"
          className="quiz-image"
        />
      </div>
    </div>
  );
};

export default Home;
