import { useState } from "react";
import WeatherInfo from "./WeatherInfo";

function WeatherApp() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);

  const changeCityInput = (e) => {
    setCityName(e.target.value);
  };

  const fetchWeatherAPI = async () => {
    // const API_KEY = '3e8e37f9b3ff3b37dfeb2af7260f71d6'; // Replace with your actual API key
    // const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;

    try {
      const resp = await fetch(APIurl);
      if (!resp.ok) {
        throw new Error(`Error: ${resp.statusText}`);
      }
      const respJson = await resp.json();
      setWeatherData(respJson);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleBlur = (e) => {
    if (cityName) {
      fetchWeatherAPI();
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3 className="text-center text-success">React Weather App</h3>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City Name"
                onChange={changeCityInput}
                onBlur={handleBlur}
                value={cityName}
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <WeatherInfo cityName={cityName} weatherData={weatherData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
