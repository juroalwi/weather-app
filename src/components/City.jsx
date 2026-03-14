import { useParams, NavLink } from "react-router-dom";
import { card, name, button, weatherImage, details } from "./City.module.css";

export const City = (props) => {
  const params = useParams();
  const city = props.cities.filter((city) => city.id === Number(params.id))[0];

  if (city === undefined) {
    return (
      <div
        style={{
          color: "white",
          fontSize: "20pt",
          textAlign: "left",
          margin: "20px",
        }}
      >
        404 ERROR: CITY NOT FOUND.
      </div>
    );
  }

  return (
    <div className={card}>
      <NavLink to="/" className={button}>
        X
      </NavLink>

      <h2 className={name}>
        {city.name.length > 26 ? city.name.slice(0, 22) + "..." : city.name}
      </h2>

      <img
        src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
        className={weatherImage}
      />

      <ul className={details}>
        <li> Temperature: {Math.round(city.temperature)}°C </li>
        <li> Weather: {city.weather} </li>
        <li> Wind: {city.wind} </li>
        <li> Amount of clouds: {city.clouds} </li>
        <li> Latitude: {city.latitude} </li>
        <li> Longitude: {city.longitude} </li>
      </ul>
    </div>
  );
};
