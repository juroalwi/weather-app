import { useState } from "react";
import { Route } from "react-router-dom";
import { Cards } from "./components/Cards.jsx";
import { Nav } from "./components/Nav.jsx";
import { About } from "./components/About";
import { City } from "./components/City";
import "./index.css";

export const App = () => {
  const [cities, setCities] = useState([]);

  const handleClose = (id) => {
    setCities(cities.filter((city) => city.id !== id));
  };

  const searchCity = (cityName) => {
    const API_KEY = "4ae2636d8dfbdc3044bede63951a019b";

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`,
    )
      .then((data) => data.json())
      .then((cityData) => {
        if (cityData.main !== undefined) {
          const city = {
            name: cityData.name,
            temperature: cityData.main.temp,
            min: cityData.main.temp_min,
            max: cityData.main.temp_max,
            img: cityData.weather[0].icon,
            id: cityData.id,
            weather: cityData.weather[0].main,
            wind: cityData.wind.speed,
            clouds: cityData.clouds.all,
            latitude: cityData.coord.lat,
            longitude: cityData.coord.lon,
          };
          setCities([...cities, city]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  };

  return (
    <div className="App">
      <Route path="/">
        <Nav searchCity={searchCity} />
      </Route>

      <Route exact path="/">
        <Cards cities={cities} onClose={handleClose} />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route exact path="/city/:id">
        <City cities={cities} />
      </Route>
    </div>
  );
};
