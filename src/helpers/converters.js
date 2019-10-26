class Converters {
  /**
   * UNIX time converter
   */
  timeConverter = UNIX_timestamp => {
    var time = new Date(UNIX_timestamp * 1000);

    return String(time).slice(0, 15);
  };
  /**
   * Kelvin to degree converter
   */
  convertDegrees = Kelvin => Math.ceil(Kelvin - 273.15);
}

export default new Converters();
