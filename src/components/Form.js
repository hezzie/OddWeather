import React, { Component } from "react";

class Form extends Component {
  render() {
    const { handleSubmit, handleChange } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
      </form>
    );
  }
}

export default Form;
