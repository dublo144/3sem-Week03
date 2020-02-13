import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import MovieContainer from "./containers/MovieContainer";
import NavigationBar from "./containers/NavigationBar";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container>
        <NavigationBar />
        <MovieContainer />
      </Container>
    );
  }
}

export default App;
