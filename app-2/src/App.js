import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      animals: ['dog', 'cat', 'mouse', 'horse', 'dolphin']
    }
  }

  render() {
  let danimals = this.state.animals.map((element, index) => {
    return <h2 key={index}>{element}</h2>
  })

    return (
      <div className="App">
       {danimals}
      </div>
    );
  }
}

export default App;
