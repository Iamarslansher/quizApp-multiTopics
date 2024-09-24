import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode, FaCalculator, FaDesktop, FaGlobe } from "react-icons/fa";
import { SiEngadget } from "react-icons/si";
import { MdScience } from "react-icons/md";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">QuizApp</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#quizzes">Quizzes</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Dashboard Content */}
      <div className="dashboard-container">
        <h1 className="dashboard-heading">Select a Quiz Category</h1>

        <div className="grid-container">
          <div
            onClick={() =>
              navigate("/quizQuestions", {
                state: {
                  categoryId: 18,
                },
              })
            }
            className="grid-item it-category"
          >
            <FaLaptopCode className="category-icon" />
            <h2>Information Technology</h2>
          </div>

          <div
            className="grid-item math-category"
            onClick={() =>
              navigate("/quizQuestions", {
                state: {
                  categoryId: 19,
                },
              })
            }
          >
            <FaCalculator className="category-icon" />
            <h2>Mathematics</h2>
          </div>

          <div
            className="grid-item computer-category"
            onClick={() =>
              navigate("/quizQuestions", {
                state: {
                  categoryId: 18,
                },
              })
            }
          >
            <FaDesktop className="category-icon" />
            <h2>Computer Science</h2>
          </div>

          <div
            className="grid-item gk-category"
            onClick={() =>
              navigate("/quizQuestions", {
                state: {
                  categoryId: 9,
                },
              })
            }
          >
            <FaGlobe className="category-icon" />
            <h2>General Knowledge</h2>
          </div>

          <div
            className="grid-item science-category"
            onClick={() =>
              navigate("/quizQuestions", {
                state: {
                  categoryId: 13,
                },
              })
            }
          >
            <MdScience className="category-icon" />
            <h2>Musicals & Theatres</h2>
          </div>

          <div
            className="grid-item english-category"
            onClick={() =>
              navigate("/quizQuestions", {
                state: {
                  categoryId: 17,
                },
              })
            }
          >
            <SiEngadget className="category-icon" />
            <h2>Science & Nature</h2>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 QuizApp. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Dashboard;
