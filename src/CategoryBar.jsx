//Category bar

import React from "react";

const categories = ["Wszystkie", "Programowanie", "Design", "Marketing", "Języki", "Biznes", "Muzyka", "Fotografia"];

const CategoryBar = ({ onSelectCategory }) => (
  <div className="category-bar">
    {categories.map(cat => (
      <button key={cat} onClick={() => onSelectCategory(cat === "Wszystkie" ? "" : cat)}>{cat}</button>
    ))}
  </div>
);

export default CategoryBar;
