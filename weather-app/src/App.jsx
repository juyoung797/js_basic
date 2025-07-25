import { useEffect, useState } from "react";
import axios from "axios";
import { LiaSnowmanSolid, LiaCloudSolid } from "react-icons/lia";
import { CiSun, CiCloudSun } from "react-icons/ci";
import { BsCloudsFill } from "react-icons/bs";
import { FaCloudShowersHeavy } from "react-icons/fa6";
import { GiThunderStruck } from "react-icons/gi";
import { WiDust } from "react-icons/wi";

const weatherIcons = {
  "01": <CiSun size={60} color="orange" />,
  "02": <CiCloudSun size={60} color="orange" />,
  "03": <LiaCloudSolid size={60} color="gray" />,
  "04": <BsCloudsFill size={60} color="gray" />,
  "09": <FaCloudShowersHeavy size={60} color="skyblue" />,
  10: <FaCloudShowersHeavy size={60} color="skyblue" />,
  11: <GiThunderStruck size={60} color="yellow" />,
  13: <LiaSnowmanSolid size={60} color="white" />,
  50: <WiDust size={60} color="white" />,
};

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherByLocation = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=71e358f644f9601c7dc5f3a6c92cfa12`
        );

        if (response.status !== 200) {
          throw new Error("Unbale to fetch weather data");
        }

        setWeatherData(response.data);
      } catch (error) {
        setWeatherData(null);
      }
    };

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;

          fetchWeatherByLocation(latitude, longitude);
        });
      }
    };

    getUserLocation();
  }, []);

  useEffect(() => console.log(weatherData), [weatherData]);

  return weatherData ? (
    <div>
      <h2>{weatherData.name}</h2>
      <div>{weatherIcons[weatherData.weather[0].icon.substring(0, 2)]}</div>
      <p>{weatherData.weather[0].description}</p>
      <p>Temp: {weatherData.main.temp}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
    </div>
  ) : (
    <div>Loding...</div>
  );
}

export default App;