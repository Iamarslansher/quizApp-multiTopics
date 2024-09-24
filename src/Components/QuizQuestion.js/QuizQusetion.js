import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./quizQuestion.css";
import Result from "../Result/Result";

function QuizQuestion() {
  const location = useLocation();
  const [category, setCategory] = useState(null);
  const [questionData, setQuestionData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timer, setTimer] = useState(30); // 30-second timer
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (location.state && location.state.categoryId) {
      setCategory(location.state.categoryId);
    } else {
      console.error("Category ID not found in location state");
    }
  }, [location]);

  useEffect(() => {
    if (category) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://opentdb.com/api.php?amount=20&category=${category}&type=multiple`
          );
          setQuestionData(response.data.results);
          setIsLoading(false); // Data fetched, turn off loading
        } catch (error) {
          console.error("Error fetching the questions:", error);
        }
      };

      fetchData();
    }
  }, [category]);

  // Timer countdown
  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion();
      return;
    }

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  //  answer selection
  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  //  next question
  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }

    setSelectedAnswer(null);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTimer(30);
  };

  if (isLoading) {
    return <div>Loading questions...</div>;
  }

  if (currentIndex >= questionData.length) {
    return <Result score={score} totalQuestions={20} />;
  }

  const currentQuestion = questionData[currentIndex];
  const answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort();

  const progressPercentage = ((currentIndex + 1) / questionData.length) * 100;

  return (
    <div className="quiz-container">
      <nav className="quiz-navbar">
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="timer">Time left: {timer}s</div>
      </nav>

      <div className="question-card">
        <h2 className="question-text">{currentQuestion.question}</h2>
        <div className="answers-container">
          {answers.map((answer, index) => (
            <button
              key={index}
              className={`answer-btn ${
                selectedAnswer === answer ? "selected" : ""
              }`}
              onClick={() => handleAnswerSelection(answer)}
            >
              {answer}
            </button>
          ))}
        </div>
        <button
          className="next-btn"
          onClick={handleNextQuestion}
          disabled={!selectedAnswer}
        >
          Next Question
        </button>
      </div>

      <footer className="quiz-footer">
        <p>
          Score: {score}/{questionData.length}
        </p>
      </footer>
    </div>
  );
}

export default QuizQuestion;
