import React, { Component } from "react";
import Convert from "../helpers/converters";
import Forecast from "./Forecast";

class Titles extends Component {
  render() {
    const { REACT_APP_ICON_URL: ICON_URL } = process.env;
    const { list, city } = this.props.data;
    return (
      <div>
        <h6>Odd Weather</h6>
        <Forecast forecast={list} />

        <div className="weatherGrid">
          <div className="degree-span-row-2">
            <h2>
              {Convert.convertDegrees(!list ? "" : list[0].main.temp)}
              &#176;C
            </h2>
          </div>
          <div>
            <p id="city">{city.name}</p>
          </div>
          <div id="icon">
            <img
              alt=""
              src={`${ICON_URL}${!list ? "" : list[0].weather[0].icon}.png`}
            />
          </div>
          <div>
            <p id="date">{!list ? "" : list[0].dt_txt}</p>
          </div>
          <div>
            <p>{!list ? "" : list[0].weather[0].main}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Titles;
