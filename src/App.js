import React, { Component } from "react";
import dotenv from "dotenv";
import axios from "axios";
import "./App.css";
import Form from "./components/Form";

dotenv.config();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "kigali",
      data: [],
      error: ""
    };
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ city: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.findCity();
  };

  findCity = async () => {
    try {
      const { city } = this.state;
      const { REACT_APP_API_KEY: Key } = process.env;
      const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${Key}`;
      const result = await axios.get(url);
      this.setState({ data: result.data, error: "" });
    } catch (error) {
      const { response } = error;
      const { message } = response === undefined ? "" : response.data;
      this.setState({ data: "", error: message });
    }
  };

  componentDidMount() {
    this.findCity();
  }

  render() {
    return (
      <div>
        <Form
          updateCity={this.updateCity}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          state={this.state}
        />
      </div>
    );
  }
}

export default App;
