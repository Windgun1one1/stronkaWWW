
import React from "react";

const CourseDetail = ({ course, onClose, onEnroll }) => (
  <div className="course-detail-panel" style={{ display: "block" }}>
    <span className="close-detail" onClick={onClose}>&times;</span>
    <div className="course-detail-content">
      <img src="placegolder.png" alt="Course" className="course-detail-image" />
      <div className="course-detail-info">
        <h2>{course.title}</h2>
        <div className="course-detail-meta">
          <p><strong>Czas trwania:</strong> 10h</p>
          <p><strong>Poziom:</strong> Średni</p>
          <p><strong>Cena:</strong> 199 zł</p>
        </div>
        <p>Opis kursu: naucz się podstaw oraz zaawansowanych zagadnień w wybranym temacie.</p>
        <div className="buttonContainer"><button className="enroll" onClick={onEnroll}>Zapisz się</button></div>
      </div>
    </div>
  </div>
);

export default CourseDetail;
