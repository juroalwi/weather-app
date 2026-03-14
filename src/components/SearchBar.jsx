import { useState } from "react";
import { form, input, button } from "./SearchBar.module.css";

export const SearchBar = (props) => {
  const [cityName, setCityName] = useState("");

  return (
    <form className={form}>
      <input
        className={input}
        type="text"
        placeholder="Search city"
        value={cityName}
        onChange={(event) => {
          setCityName(event.target.value);
        }}
      />

      <button
        className={button}
        onClick={(event) => {
          event.preventDefault();
          cityName !== "" && props.searchCity(cityName);
          setCityName("");
        }}
      >
        Search
      </button>
    </form>
  );
};
