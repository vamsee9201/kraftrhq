"use client";

import React, { useState } from 'react';
import {useRouter} from "next/navigation";

const Page = () => {
  const [timeframe, setTimeframe] = useState("day");
  const [calorieGoal, setCalorieGoal] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    // Redirect to the new page with query parameters
    router.push(`/recipes?timeframe=${timeframe}&calorieGoal=${calorieGoal}`);
  };
  return (
    <div>
      <h1>Generate recipes</h1>
      <div>
        <label htmlFor="timeframe">Time Frame:</label>
        <select
          id="timeframe"
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </div>
      <div>
        <label htmlFor="calorie_goal">Calorie Goal:</label>
        <input
          type="number"
          id="calorie_goal"
          value={calorieGoal}
          onChange={(e) => setCalorieGoal(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Page;
