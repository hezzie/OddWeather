/**
 * Get a city or coordinate from a state.
 * @returns {city} forecast given city.
 */
const currentLocation = ({city, cord}) => {
    return city === "" 
      ? `lat=${cord.lat}&lon=${cord.long}`
      : `q=${city}`;
  };

export default currentLocation;
