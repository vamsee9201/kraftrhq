"use client";

import React, { useState } from 'react';
import axios from "axios";
import {useRouter} from "next/navigation";

const Page = () => {
  const [timeframe, setTimeframe] = useState("day");
  const [calorieGoal, setCalorieGoal] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      // Send a POST request to the Flask server
      const response = await axios.post("http://127.0.0.1:5000/generate", {
        timeframe,
        calorieGoal,
      });

      // Pass the data as query parameters to the recipes page
      const { recipes } = response.data;
      const query = JSON.stringify(recipes); // Convert recipes to a string
      router.push(`/recipes?recipes=${encodeURIComponent(query)}`);
    } catch (error) {
      console.error("Error generating recipes:", error);
    }
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
