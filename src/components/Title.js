import React from "react";
import Helper from "../helpers/Helpers";

const Helpers = new Helper();
class Titles extends React.Component {
  render() {
    const { error, data } = this.props.titleState;
    return (
      <div>
        <h6>Odd Weather</h6>
        {!error && (
          <div className="forecast">
            <div  className="forecast-header">
              <h3>Five day weather forecast</h3>
            </div>
            <div className="day">
              <div>Date</div>
              <div>Icon</div>
              <div>Condition</div>
              <div>Temperature</div>
            </div>
            <div className="day">
              <div>
                {data.list === undefined
                  ? ""
                  : Helpers.timeConverter(data.list[0].dt)}
              </div>
              <div>
                <img
                  alt=""
                  src={`http://openweathermap.org/img/w/${
                    data.list === undefined ? "" : data.list[0].weather[0].icon
                  }.png`}
                />
              </div>
              <div>
                {data.list === undefined ? "" : data.list[0].weather[0].main}
              </div>
              <div>
                {Helpers.convertDegrees(
                  data.list === undefined ? "" : data.list[0].main.temp
                )}
                &#176;C
              </div>
            </div>
            <div className="day">
              <div>
                {data.list === undefined
                  ? ""
                  : Helpers.timeConverter(data.list[8].dt)}
              </div>
              <div>
                <img
                  alt=""
                  src={`http://openweathermap.org/img/w/${
                    data.list === undefined ? "" : data.list[8].weather[0].icon
                  }.png`}
                />
              </div>
              <div>
                {data.list === undefined ? "" : data.list[8].weather[0].main}
              </div>
              <div>
                {Helpers.convertDegrees(
                  data.list === undefined ? "" : data.list[8].main.temp
                )}
                &#176;C
              </div>
            </div>
            <div className="day">
              <div>
                {data.list === undefined
                  ? ""
                  : Helpers.timeConverter(data.list[16].dt)}
              </div>
              <div>
                <img
                  alt=""
                  src={`http://openweathermap.org/img/w/${
                    data.list === undefined ? "" : data.list[16].weather[0].icon
                  }.png`}
                />
              </div>
              <div>
                {data.list === undefined ? "" : data.list[16].weather[0].main}
              </div>
              <div>
                {Helpers.convertDegrees(
                  data.list === undefined ? "" : data.list[16].main.temp
                )}
                &#176;C
              </div>
            </div>
            <div className="day">
              <div>
                {data.list === undefined
                  ? ""
                  : Helpers.timeConverter(data.list[24].dt)}
              </div>
              <div>
                <img
                  alt=""
                  src={`http://openweathermap.org/img/w/${
                    data.list === undefined ? "" : data.list[24].weather[0].icon
                  }.png`}
                />
              </div>
              <div>
                {data.list === undefined ? "" : data.list[24].weather[0].main}
              </div>
              <div>
                {Helpers.convertDegrees(
                  data.list === undefined ? "" : data.list[24].main.temp
                )}
                &#176;C
              </div>
            </div>
            <div className="day">
              <div>
                {data.list === undefined
                  ? ""
                  : Helpers.timeConverter(data.list[32].dt)}
              </div>
              <div>
                <img
                  alt=""
                  src={`http://openweathermap.org/img/w/${
                    data.list === undefined ? "" : data.list[32].weather[0].icon
                  }.png`}
                />
              </div>
              <div>
                {data.list === undefined ? "" : data.list[32].weather[0].main}
              </div>
              <div>
                {Helpers.convertDegrees(
                  data.list === undefined ? "" : data.list[32].main.temp
                )}
                &#176;C
              </div>
            </div>
          </div>
        )}
        {!error && (
          <div class="weatherGrid">
            <div class="degree-span-row-2">
              <h2>
                {Helpers.convertDegrees(
                  data.list === undefined ? "" : data.list[0].main.temp
                )}
                &#176;C
              </h2>
            </div>
            <div>
              <p id="city">{data.list === undefined ? "" : data.city.name}</p>
            </div>
            <div id="icon">
              <img
                alt=""
                src={`http://openweathermap.org/img/w/${
                  data.list === undefined ? "" : data.list[0].weather[0].icon
                }.png`}
              />
            </div>
            <div>
              <p id="date">
                {data.list === undefined ? "" : data.list[0].dt_txt}
              </p>
            </div>
            <div>
              <p>
                {data.list === undefined ? "" : data.list[0].weather[0].main}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Titles;
