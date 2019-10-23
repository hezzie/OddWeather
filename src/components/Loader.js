import React from "react";
import Loader from "react-loader-spinner";

const spin = () => {
  return (
    <div className="overlay">
      <div className="loader">
        <Loader
          type="Puff"
          color="#A4B5A5"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    </div>
  );
};

export default spin;
