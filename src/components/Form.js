import React, { Component } from "react";

class Form extends Component {
  render() {

    const city = this.props.city;
    console.log("city",city);
    
    const { handleSubmit, handleChange } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type city name"
          value={city}
          onChange={handleChange}
        />
      </form>
    );
  }
}

export default Form;
