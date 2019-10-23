import React, { Component } from 'react';

class Details extends Component {

  render() {
    console.log('i am props', this.props);
    return (
      <div className="weather-details-container">
        <div className="weather-details">
          <p className="weather-detail-header">Weather Details</p>
          <div className="weather-detail-data">
            <p>Humidity</p>
            <p>10%</p>
          </div>
          <div className="weather-detail-data">
            <p>Humidity</p>
            <p>10%</p>
          </div>
          <div className="weather-detail-data">
            <p>Humidity</p>
            <p>10%</p>
          </div>
          <div className="weather-detail-data">
            <p>Humidity</p>
            <p>10%</p>
          </div>
          <div className="weather-detail-data">
            <p>Humidity</p>
            <p>10%</p>
          </div>
          <div className="weather-detail-data">
            <p>Humidity</p>
            <p>10%</p>
          </div>
          <div className="weather-detail-data">
            <p>Humidity</p>
            <p>10%</p>
          </div>
          <div className="weather-detail-data">
            <p>Humidity</p>
            <p>10%</p>
          </div>
          <div className="weather-detail-data">
            <p>Humidity</p>
            <p>10%</p>
          </div>
          <div className="weather-detail-data">
            <p>Humidity</p>
            <p>10%</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Details;
