import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import CourseDetail from "./CourseDetail";

const Courses = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const itemsPerGroup = 4;

  // Oblicz indeks kursu w aktualnej (przefiltrowanej) liście
  const selectedIndex = selectedCourse
    ? courses.findIndex((c) => c.title === selectedCourse.title)
    : null;

  const handleCourseClick = (course) => () => {
    setSelectedCourse((prev) =>
      prev && prev.title === course.title ? null : course
    );
  };

  const handleCloseDetail = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="courses">
      {courses.map((course, index) => {
        const isLastInGroup = (index + 1) % itemsPerGroup === 0;
        const isSelectedInGroup =
          selectedIndex !== null &&
          Math.floor(index / itemsPerGroup) === Math.floor(selectedIndex / itemsPerGroup);

        return (
          <React.Fragment key={course.title}>
            <CourseCard course={course} onClick={handleCourseClick(course)} />
            {isLastInGroup && isSelectedInGroup && (
              <CourseDetail
                course={selectedCourse}
                onClose={handleCloseDetail}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Courses;
