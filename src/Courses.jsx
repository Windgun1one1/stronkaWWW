import React, { useState } from "react";
import CourseCard from "./CourseCard";
import CourseDetail from "./CourseDetail";

const Courses = ({ courses, selectedCourse, onCourseSelect }) => {
  const itemsPerGroup = 4;

  // Oblicz indeks kursu w aktualnej (przefiltrowanej) liście
  const selectedIndex = selectedCourse
    ? courses.findIndex((c) => c.title === selectedCourse.title)
    : null;

  const handleCourseClick = (course) => () => {
    onCourseSelect(course);
  };

  const handleCloseDetail = () => {
    onCourseSelect(null);
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
