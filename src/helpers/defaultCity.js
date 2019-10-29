/**
 * Get longitude and latitude of a default city
 * @returns {coordinate} long and lat in decimal.
 */

const options = {
    enableHighAccuracy: true,
    timeout: 5000
  };

const defaultCity = (geoSuccess, geoError) => {
    navigator.geolocation.getCurrentPosition(
      geoSuccess,
      geoError,
      options
    );
  };

export default defaultCity;
