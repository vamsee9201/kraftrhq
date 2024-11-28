"use client";

import React, { useState } from 'react';
import axios from "axios";
import {useRouter} from "next/navigation";

const Page = () => {
  const [timeframe, setTimeframe] = useState("day");
  const [calorieGoal, setCalorieGoal] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true); // Start loading
    try {
      // Make a POST request to the Flask server
      const response = await axios.post("http://127.0.0.1:5000/generate", {
        timeframe,
        calorieGoal,
      });

      // Extract the data from the response
      const { timeframe: serverTimeframe, calorieGoal: serverCalorieGoal, recipe } = response.data;

      // Serialize the data to pass as query parameters
      const query = new URLSearchParams({
        timeframe: serverTimeframe,
        calorieGoal: serverCalorieGoal,
        recipe,
      }).toString();

      // Navigate to the recipes page
      router.push(`/recipes?${query}`);
    } catch (error) {
      console.error("Error generating recipe:", error);
      alert("Failed to generate recipes. Please try again.");
    } finally {
      setLoading(false); // Stop loading
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
      {loading && <p>Loading your recipes, please wait...</p>}
    </div>
  );
};

export default Page;
