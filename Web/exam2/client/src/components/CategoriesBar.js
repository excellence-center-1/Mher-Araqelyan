// CategoriesBar.js

import React, { useContext } from "react";
import { Context } from "../index";
import "./styles/CategoriesBar.css"; 
import { observer } from "mobx-react-lite";

const CategoryCard = ({ name, onClick, isSelected }) => (
  <div
    className={`category-card ${isSelected ? "selected" : ""}`}
    onClick={onClick}
  >
    {name}
  </div>
);

const CategoriesBar = observer(() => {
  const { video } = useContext(Context);

  return (
    <div className="categories-bar">
      {video.categories.map((category) => (
        <CategoryCard
          key={category.id}
          name={category.name}
          onClick={() => video.setSelectedCategory(category)}
          isSelected={category.id === video.selectedCategory.id}
        />
      ))}
    </div>
  );
});

export default CategoriesBar;
