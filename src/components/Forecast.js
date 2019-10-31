import React, { Component } from "react";
import Convert from "../helpers/converters";

class Forecast extends Component {
  render() {
    const { REACT_APP_ICON_URL: ICON_URL } = process.env;
    const { forecast } = this.props;
    return (
      <div className="forecast">
        <div className="forecast-header">
          <h3>Five day weather forecast</h3>
        </div>
        <div className="day">
          <div>Date</div>
          <div>Icon</div>
          <div>Condition</div>
          <div>Temperature</div>-
        </div>
        {forecast.map((item, index) => {
          return index === 0 ||
            index === 8 ||
            index === 16 ||
            index === 24 ||
            index === 32 ? (
            <div className="day" key={index}>
              <div>
                {Convert.timeConverter(!forecast ? "" : forecast[index].dt)}
              </div>
              <div>
                <img
                  alt="icon"
                  src={`${ICON_URL}${
                    !forecast ? "" : forecast[index].weather[0].icon
                  }.png`}
                />
              </div>
              <div>{!forecast ? "" : forecast[index].weather[0].main}</div>
              <div>
                {Convert.convertDegrees(
                  !forecast ? "" : forecast[index].main.temp
                )}
                &#176;C
              </div>
            </div>
          ) : null;
        })}
      </div>
    );
  }
}

export default Forecast;
