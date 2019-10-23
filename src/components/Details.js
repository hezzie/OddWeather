import React, { Component } from 'react';

class Details extends Component {

  convertKelvinCelcius = Kelvin => Math.ceil(Kelvin - 273.15);

  render() {
    const { error, data } = this.props.state;
    return (
      <div className="weather-details-container">
        <div className="weather-details">
        {
          error ? <p className="weather-detail-header">{ error }</p>
          :
          <React.Fragment>
            <p className="weather-detail-header">Weather Details</p>
            <div className="weather-detail-data">
              <p>Clouds</p>
              <p>{data.list[0].clouds.all}%</p>
            </div>
            <div className="weather-detail-data">
              <p>Wind</p>
              <p>{data.list[0].wind.speed}km/h</p>
            </div>
            <div className="weather-detail-data">
              <p>Humidity</p>
              <p>{data.list[0].main.humidity}%</p>
            </div>
            <div className="weather-detail-data">
              <p>Temp</p>
              <p>{this.convertKelvinCelcius(data.list[0].main.temp)}°C</p>
            </div>
            <div className="weather-detail-data">
              <p>Max temp</p>
              <p>{this.convertKelvinCelcius(data.list[0].main.temp_max)}°C</p>
            </div>
            <div className="weather-detail-data">
              <p>Max temp</p>
              <p>{this.convertKelvinCelcius(data.list[0].main.temp_min)}°C</p>
            </div>
          </React.Fragment>
        }
        </div>
      </div>
    )
  }
}

export default Details;
