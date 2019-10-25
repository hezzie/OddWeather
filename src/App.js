import React, { Component } from "react";
import dotenv from "dotenv";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import Form from "./components/Form";
import Loader from "./components/Loader";
import Details from "./components/Details";
import Titles from "./components/Title";
import imageObject from "./images";

dotenv.config();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cord: "",
      city: "",
      data: [],
      recentCities: [],
      error: "",
      loading: true,
    };
  }

  options = {
    enableHighAccuracy: true,
    timeout: 5000
  };
  sleep = ms => {
    return new Promise(resolve => setInterval(resolve, ms));
  };

  geoSuccess = position => {
    const cordinates = position.coords;
    this.setState({
      cord: {
        lat: cordinates.latitude,
        long: cordinates.longitude,
        accuracy: cordinates.accuracy
      }
    });
    this.findCity();
  };

  geoError = err => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    this.setState({ loading: false });
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ city: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true }); // Make the spinner visible
    await this.sleep(3000);
    this.findCity();
  };

  findCity = async () => {
    navigator.geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoError,
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
      this.setState({ data: result.data, error: "", loading: false });
      this.setState({
        recentCities: [this.state.city, ...this.state.recentCities]
      });
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
    if (this.state.loading) return <Loader />;
    console.log("default",this.state.data.list);
    
    const styles = {
      background: `url(${imageObject[!this.state.data ? undefined : this.state.data.list[0].weather[0].main]})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
    };

    console.log('our state', this.state);
    return (
      
      <div class="grid">
        <div class="left">
          <div style={styles}>
            {/* {
              this.state.data.length > 0  && <Titles detail={this.state}/>
            } */}
            <Titles titleState={this.state}/>
          </div>
        </div>
        <div className="right">
          <div>
            <Form
              updateCity={this.updateCity}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              city={this.state.city}
              recentCities={this.state.recentCities}
            />
          </div>
          <div>
            {(this.state.data.length !== 0 || this.state.error) && (
              <Details state={this.state} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
