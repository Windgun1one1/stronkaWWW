import React, { useState } from "react";
import Header from "./Head";
import Hero from "./Hero";
import CategoryBar from "./CategoryBar";
import Courses from "./Courses";
import CourseDetail from "./CourseDetail";
import PopupForm from "./PopupForm";
import Footer from "./Footer";
import "./style.css";


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);
  const [currentView, setCurrentView] = useState("title"); // "title" | "home" | "form"

  const courses = [
    { title: "Python od podstaw", category: "Programowanie" },
    { title: "JavaScript zaawansowany", category: "Programowanie" },
    { title: "Git i GitHub", category: "Programowanie" },
    { title: "Photoshop dla początkujących", category: "Design" },
    { title: "UX/UI Design", category: "Design" },
    { title: "Marketing internetowy", category: "Marketing" },
    { title: "Angielski B2", category: "Języki" },
    { title: "Excel w praktyce", category: "Biznes" },
    { title: "Pianino od podstaw", category: "Muzyka" },
    { title: "Teoria muzyki", category: "Muzyka" },
    { title: "Fotografia portretowa", category: "Fotografia" },
    { title: "Edycja zdjęć w Lightroomie", category: "Fotografia" },
  ];

  const filteredCourses = selectedCategory
    ? courses.filter(c => c.category === selectedCategory)
    : courses;

  const handleCourseClick = course => {
    setSelectedCourse(course);
  };

  const handleEnroll = () => {
    setCurrentView("form");
  };

  const handleCloseForm = () => {
    setCurrentView("home");
    setSelectedCourse(null);
  };

  return (
    <div data-theme={darkTheme ? "dark" : "light"}>
      <Header onToggleTheme={() => setDarkTheme(!darkTheme)} />
      <main className="main">
        {currentView === "title" && (
          <>
            <Hero onClick={() => setCurrentView("home")} />
          </>
        )}

        {currentView === "home" && (
          <>
            <CategoryBar onSelectCategory={setSelectedCategory} />
            <Courses
              courses={filteredCourses}
              onCourseClick={handleCourseClick}
            />
          </>
        )}

        {currentView === "detail" && selectedCourse && (
          <CourseDetail
            course={selectedCourse}
            onClose={() => setCurrentView("home")}
            onEnroll={handleEnroll}
          />
        )}

        {currentView === "form" && (
          <PopupForm onClose={handleCloseForm} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
