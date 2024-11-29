"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { marked } from "marked";


const RecipesPage = () => {
  const searchParams = useSearchParams();

  // Retrieve query parameters
  const timeframe = searchParams.get("timeframe");
  const calorieGoal = searchParams.get("calorieGoal");
  const recipe = searchParams.get("recipe");

  const recipeHtml = recipe ? marked(recipe) : "";

  return (
    <div>
      <h1>Recipes</h1>
      <p>
        <strong>Time Frame:</strong> {timeframe}
      </p>
      <p>
        <strong>Calorie Goal:</strong> {calorieGoal}
      </p>
      <div>
        <strong>Recipe Status:</strong> 
        <div dangerouslySetInnerHTML={{ __html: recipeHtml }} />
      </div>
    </div>
  );
};

export default RecipesPage;
