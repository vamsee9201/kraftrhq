"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const RecipesPage = () => {
  const searchParams = useSearchParams();
  const timeframe = searchParams.get("timeframe");
  const calorieGoal = searchParams.get("calorieGoal");

  return (
    <div>
      <h1>Recipes</h1>
      <p>Time Frame: {timeframe}</p>
      <p>Calorie Goal: {calorieGoal}</p>
    </div>
  );
};

export default RecipesPage;
