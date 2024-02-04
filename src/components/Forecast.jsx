import React from "react";
import CardData from "./CardData";

const Forecast = ({ data }) => {
  const { daily_units, daily } = data;
  const dailyData = daily;
  const unit = daily_units.temperature_2m_max;
  const dateArr = dailyData.time;
  const weatherCodeArr = dailyData.weathercode;
  const tempMinArr = dailyData.temperature_2m_min;
  const tempMaxArr = dailyData.temperature_2m_max;

  const selectedDays = [];

  for (let i = 0; i < dateArr.length; i++) {
    const obj = {
      date: dateArr[i],
      weatherCode: weatherCodeArr[i],
      tempMin: tempMinArr[i],
      tempMax: tempMaxArr[i],
    };
    selectedDays.push(obj);
  }
  return (
    <div>
      <h3>Forecast</h3>
      <div className="cards">
        {selectedDays.map((day) => (
          <CardData key={day.date} data={day} unit={unit} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
