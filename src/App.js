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
      cord: "",
      city: "",
      data: [],
      error: ""
    };
  }

  options = {
    enableHighAccuracy: true,
    timeout: 5000
  };

  success = pos => {
    const crd = pos.coords;
    this.setState({
      cord: {
        lat: crd.latitude,
        long: crd.longitude,
        accuracy: crd.accuracy
      }
    });
    this.findCity();
  };

  error = err => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ city: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.findCity();
  };

  findCity = async () => {
    navigator.geolocation.getCurrentPosition(
      this.success,
      this.error,
      this.options
    );
    const currentLoc =
      this.state.city === ""
        ? `lat=${this.state.cord.lat}&lon=${this.state.cord.long}`
        : `q=${this.state.city}`;

    try {
      const { REACT_APP_API_KEY: Key, REACT_APP_URL: URL } = process.env;
      const url = `${URL}${currentLoc}&APPID=${Key}`;
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
