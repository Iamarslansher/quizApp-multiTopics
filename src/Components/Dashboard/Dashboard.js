import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode, FaCalculator, FaDesktop, FaGlobe } from "react-icons/fa";
import { SiAnimalplanet } from "react-icons/si";
import { FaMusic } from "react-icons/fa6";
import { MdScience, MdSportsEsports } from "react-icons/md";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 18,
      topic: "Information Technology",
      icon: FaLaptopCode,
      className: "it-category",
    },
    {
      id: 19,
      topic: "Mathematics",
      icon: FaCalculator,
      className: "math-category",
    },
    {
      id: 18,
      topic: "Computer Science",
      icon: FaDesktop,
      className: "computer-category",
    },
    {
      id: 9,
      topic: "General Knowledge",
      icon: FaGlobe,
      className: "gk-category",
    },
    {
      id: 13,
      topic: "Musicals & Theatres",
      icon: FaMusic,
      className: "music-category",
    },
    {
      id: 17,
      topic: "Science & Nature",
      icon: MdScience,
      className: "science-category",
    },
    {
      id: 21,
      topic: "Sports",
      icon: MdSportsEsports,
      className: "sports",
    },
    {
      id: 27,
      topic: "Animals",
      icon: SiAnimalplanet,
      className: "animals",
    },
  ];

  return (
    <div className="dashboard-layout">
      <nav className="navbar">
        <div className="logo">QuizApp</div>
      </nav>

      <main className="dashboard-content">
        <h1 className="dashboard-heading">Select a Quiz Category</h1>

        <div className="category-grid">
          {categories.map((category) => (
            <div
              key={category.topic}
              onClick={() =>
                navigate("/quizQuestions", {
                  state: {
                    categoryId: category.id,
                    topic: category.topic,
                  },
                })
              }
              className={`category-item ${category.className}`}
            >
              <category.icon className="category-icon" />
              <h2>{category.topic}</h2>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 QuizApp. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
