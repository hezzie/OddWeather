import React, { Component } from "react";
import dotenv from "dotenv";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import Form from "./components/Form";
import Loader from "./components/Loader";
import Details from "./components/Details";
import Titles from "./components/Title";
import imageObject from "./helpers/images";

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
      isVisited: false,
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
  
  /**
   * Get longitude and latitude of a default city
   * @returns {coordinate} long and lat in decimal.
   */
  defaultCity = () => {
    navigator.geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoError,
      this.options
    );
  }

  /**
   * Get a city or coordinate from a state.
   * @returns {city} forecast given city.
   */
  currentLocation = () => {
    return this.state.city === "" 
      ? `lat=${this.state.cord.lat}&lon=${this.state.cord.long}`
      : `q=${this.state.city}`;
  }

  /**
   * Get a weather forecast of a city
   * @return {data} - 40 days, - 3 hours forecast.
   * @return {error} if no result found.
   */
  findCity = async () => {
    const currentLoc = this.currentLocation();
    console.log(this.currentLocation);
    
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
      this.setState({ data: "", error: message, loading: false });
    }
  };

  componentDidMount() {
    if (!this.state.isVisited) {
      this.defaultCity();
      return this.setState({isVisited: true});
    }
    this.findCity();
  }

  render() {

    if (this.state.loading) return <Loader />;

    const styles = {
      background: `url(${imageObject[!this.state.data ? undefined : this.state.data.list[0].weather[0].main]})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
    };

    return (

      <div className="grid">
        <div className="left">
          <div style={styles}>
            <Titles titleState={this.state}/>
          </div>
        </div>
        <div className="right">
          <div className="upper-side">
            <Form
              updateCity={this.updateCity}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              city={this.state.city}
              recentCities={this.state.recentCities}
            />
          </div>
          <div className="lower-side">
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
