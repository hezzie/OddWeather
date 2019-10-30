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
import defaultCity from "./helpers/defaultCity";
import currentLocation from "./helpers/currentLocation";

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
      serching: false
    };
  }

  options = {
    enableHighAccuracy: true,
    timeout: 5000
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
<<<<<<< HEAD
    this.setState({
      loading: false,
      error:
        "Geolocation is not supported, please change the browser or enable the port"
    });
=======
>>>>>>> - remove debugging consoles
    this.setState({ loading: false, searching: false });
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ city: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ searching: true }); // Make the spinner visible
    this.findCity();
  };

  /**
   * Get a weather forecast of a city
   * @return {data} - 40 days, - 3 hours forecast.
   * @return {error} if no result found.
   */
  findCity = async () => {
    const currentLoc = currentLocation(this.state);
    const { city, recentCities } = this.state;
    try {
      const { REACT_APP_API_KEY: Key, REACT_APP_URL: URL } = process.env;
      const url = `${URL}${currentLoc}&APPID=${Key}`;
      const result = await axios.get(url);
      this.setState({
        data: result.data,
        error: "",
        loading: false,
        searching: false
      });
      this.setState({
        recentCities: [city, ...recentCities]
      });
    } catch (error) {
      const { response } = error;
      const { message } = response === undefined ? "" : response.data;
      this.setState({
        data: "",
        searching: false,
        error: message
      });
    }
  };
  componentDidMount() {
    const { isVisited } = this.state;
    if (!isVisited) {
      defaultCity(this.geoSuccess, this.geoError);
      return this.setState({ isVisited: true });
    }
    this.findCity();
  }

  render() {
    const { loading, searching, data, recentCities, city, error } = this.state;
    const { updateCity, handleSubmit, handleChange } = this;
    if (loading) return <Loader />;

    const styles = {
      background: `url(${
        imageObject[!data.list ? undefined : data.list[0].weather[0].main]
      })`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%"
    };

    return (
      <div class="grid">
        {searching && <Loader />}
        <div class="left">
          <div style={styles}>
            {/* {
              this.state.data.length > 0  && <Titles detail={this.state}/>
            } */}
            <Titles titleState={this.state} />
          </div>
        </div>
        <div className="right">
          <div className="upper-side">
            <Form
              updateCity={updateCity}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              city={city}
              recentCities={recentCities}
            />
          </div>
          <div className="lower-side">
            {(data.length !== 0 || error) && <Details state={this.state} />}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
