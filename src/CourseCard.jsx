// CourseCard.jsx
import React from "react";

const CourseCard = ({ course, onClick }) => (
  <div className="course" onClick={onClick}>
    <h4>{course.title}</h4>
  </div>
);

export default CourseCard;
