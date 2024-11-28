"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const RecipesPage = () => {
  const searchParams = useSearchParams();

  // Retrieve query parameters
  const timeframe = searchParams.get("timeframe");
  const calorieGoal = searchParams.get("calorieGoal");
  const recipe = searchParams.get("recipe");

  return (
    <div>
      <h1>Recipes</h1>
      <p>
        <strong>Time Frame:</strong> {timeframe}
      </p>
      <p>
        <strong>Calorie Goal:</strong> {calorieGoal}
      </p>
      <p>
        <strong>Recipe Status:</strong> {recipe}
      </p>
    </div>
  );
};

export default RecipesPage;
