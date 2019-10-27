import React, { Component } from "react";
import img from "../images/search.png";

class Form extends Component {
  render() {
    const city = this.props.city;
    const {
      handleSubmit,
      handleChange,
      handlePredictCity,
      recentCities
    } = this.props;
    const newRecentCity = new Set(recentCities);
    const result = [...newRecentCity];

    return (
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type city name"
            value={
              this.props.updatedRelatedCities === ""
                ? city
                : this.props.updatedRelatedCities
            }
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>
            <img src={img} alt="searchbtn" />
          </button>
        </form>
        <div className="predict-searches">
          {this.props.relatedCities.map((item, index) => {
            return (
              <div className="predict-data" key={index}>
                <button value={item} onClick={handlePredictCity}>
                  {item}
                </button>
              </div>
            );
          })}
        </div>
        <div className="popular-searches">
          {result.map((item, index) => {
            return (
              <div className="popular-data" key={index}>
                <button value={item} onClick={handlePredictCity}>
                  {item}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Form;
