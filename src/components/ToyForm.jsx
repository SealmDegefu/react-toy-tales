import React, { Component } from "react";
import ToyCard from "./ToyCard";

class ToyForm extends Component {
  state = {
    name: "",
    image: "",
    likes: 0
  };
  newValue = (event) => {
    event.preventDefault();
    this.props.addToy(this.state)
  };

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleImage = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

  render() {
    return (
      <div className="container" >
        <form className="add-toy-form" onSubmit={this.newValue}>
          <h3>Create a toy!</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter a toy's name..."
            className="input-text"
            value={this.state.name}
            onChange={this.handleName}
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="Enter a toy's image URL..."
            className="input-text"
            value={this.state.image}
            onChange={this.handleImage}
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Create New Toy"
            className="submit"
          />
        </form>
      </div>
    );
  }
}

export default ToyForm;
