import React from "react";
import "./App.css";

import Header from "./components/Header";
import ToyForm from "./components/ToyForm";
import ToyContainer from "./components/ToyContainer";

class App extends React.Component {
  state = {
    toys: [],
    display: false,
  };
  componentDidMount() {
    fetch(" http://localhost:3000/toys")
      .then((res) => res.json())
      .then((toysData) =>
        this.setState({
          toys: toysData,
        })
      );
  }

  addToy = (newToy) => {
    console.log(newToy);
    let postOPtion = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(newToy),
    };

    fetch(" http://localhost:3000/toys", postOPtion)
      .then((res) => res.json())
      .then((addedToy) =>
        this.setState({ toys: [...this.state.toys, addedToy] })
      );
  };

  // like = (newLike) => {
    
  //   let patchOPtion = {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accepts: "application/json",
  //     },
  //     body: JSON.stringify(newLike),
  //   };

  //   fetch(" http://localhost:3000/toys/" + newLike.id, patchOPtion)
     
  // };

//   handleLikeClick = (event) =>{
//     let likeIndex = event.parentNode.id - 1
//    let newLikes = [...this.state.toys]

//    let toyLikes = (newLikes[likeIndex])
//    ++toyLikes.likes

// this.like(toyLikes)

//    newLikes = toyLikes
//     console.log(newLikes)
    
//     this.setState(newLikes = toyLikes)
//   }

handleLikeClick = (toyObject) =>{
let updatedLikes = {
  ...toyObject, likes: toyObject.likes + 1
}
let patchOPtion = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
    Accepts: "application/json",
  },
  body: JSON.stringify(updatedLikes)
}

fetch(" http://localhost:3000/toys/" + toyObject.id, patchOPtion)
.then(res => res.json())
.then(updatedToy => {
  let newToyArray = this.state.toys.map(toy => toy.id === toyObject.id ? toy = updatedLikes : toy)
  this.setState({toys: newToyArray})
})
}

  deleteToy = (id) => {
    fetch(" http://localhost:3000/toys/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((newToy) =>
        this.setState({
          toys: this.state.toys.filter((toy) => toy.id !== id),
        })
      );
  };

  handleClick = () => {
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };

  render() {
    return (
      <>
        <Header />
        {this.state.display ? <ToyForm addToy={this.addToy} /> : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
          toys={this.state.toys}
          delete={this.deleteToy}
          handleLikeClick={this.handleLikeClick}
        />
      </>
    );
  }
}

export default App;
