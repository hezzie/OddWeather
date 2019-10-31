import React, { Component } from "react";
import img from "../images/search.png";

class Form extends Component {
  render() {
    const city = this.props.city;
    const recentCities = this.props.recentCities;
    const { handleSubmit, handleChange } = this.props;
    const newRecentCity = new Set(recentCities);
    const result = [...newRecentCity];
    return (
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            pattern="[A-Za-z0-9]{1,}"
            placeholder="Type city name"
            value={city}
            onChange={handleChange}
            
          />
          <button type="submit"  ><img src={img} alt="searchbtn" /></button>
        </form>
        <div className="popular-searches">
          {result.map((item, index) => {
            return (
              <div className="popular-data" key={index}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Form;
