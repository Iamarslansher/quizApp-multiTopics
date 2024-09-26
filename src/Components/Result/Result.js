import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "./result.css"; // Import the CSS file

const Result = () => {
  const location = useLocation();
  const [showConfetti, setShowConfetti] = useState(true);
  const [topic, setTopic] = useState("");
  const certificateRef = useRef(null);

  useEffect(() => {
    setTopic(location.state.topic);
  }, []);

  const handleDownload = async () => {
    const certificate = certificateRef.current;
    const canvas = await html2canvas(certificate);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("certificate.pdf");
  };

  return (
    <div className="certificate-page">
      {showConfetti && (
        <Confetti
          recycle={false}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
      <div className="certificate-container">
        <div ref={certificateRef} className="certificate">
          <img
            src="https://static.vecteezy.com/system/resources/previews/018/107/049/non_2x/gold-badges-seal-quality-labels-sale-medal-badge-stamp-golden-genuine-free-png.png"
            alt="Logo"
            className="logo"
          />
          <div className="certificate-content">
            <h1>Certificate of Achievement</h1>
            <p>This certifies that</p>
            <p className="name">Mr. / Mrs.</p>
            <p>has successfully completed the course</p>
            <p className="course">{topic}</p>
            <p className="date">Date: {new Date().toLocaleDateString()}</p>
            <p className="signature">Arsalan Sher</p>
            <p>Course Instructor</p>
          </div>
        </div>
        <button onClick={handleDownload} className="download-button">
          Download Certificate
        </button>
      </div>
    </div>
  );
};

export default Result;
