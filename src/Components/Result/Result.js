import React from "react";
import { useNavigate } from "react-router-dom";
import "./result.css";

function Result({ score, totalQuestions }) {
  const navigate = useNavigate();

  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  const handleGenerateCertificate = () => {
    navigate("/certificate", { state: { score, totalQuestions, percentage } });
  };

  return (
    <div className="result-container">
      <h1 className="result-heading">Quiz Results</h1>

      <div className="result-score">
        <p>Correct Answers: {score}</p>
        <p>Total Questions: {totalQuestions}</p>
        <p>Percentage: {percentage}%</p>
      </div>

      <button className="certificate-btn" onClick={handleGenerateCertificate}>
        Get Certificate
      </button>
    </div>
  );
}

export default Result;
