"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const RecipesPage = () => {
  const searchParams = useSearchParams();
  const recipesQuery = searchParams.get("recipes");

  // Parse the recipes data
  const recipes = recipesQuery ? JSON.parse(decodeURIComponent(recipesQuery)) : [];

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              {recipe.name} - {recipe.calories} calories
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found. Please generate recipes from the home page.</p>
      )}
    </div>
  );
};

export default RecipesPage;
