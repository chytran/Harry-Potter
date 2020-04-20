import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import Characters from './components/Characters';

class App extends Component {
  state = {
    characters: [],
    isLoading: true
  }

  getCharacter = async (e) => {
    e.preventDefault();
    fetch(`http://hp-api.herokuapp.com/api/characters`)
      .then(response => response.json())
      .then(data => 
        this.setState({ 
          characters: data
        })
      )
      .catch(error => this.setState({ error, isLoading: false}));
  }

  render() { 
    return ( 
      <div className="App">

        <div className="layout-container">
          <header className="App-header">
            <h1 className="App-title">Harry Potter Characters</h1>
          </header>
          <Form getCharacter = {this.getCharacter} />
          <Characters characters= {this.state.characters} />
        </div>

        <div className="footer-container">
          <footer>Kevin Tran @2020</footer>
        </div>

      </div>
    );
  }
}
 
export default App;