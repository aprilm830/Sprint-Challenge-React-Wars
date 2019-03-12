import React, { Component } from 'react';
import './App.css';

import { Card,  CardTitle, CardText, CardGroup } from 'reactstrap';


class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount()
  {
    this.getCharacters( 'https://swapi.co/api/people' );
  }

  getCharacters = URL =>
  {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch( URL )
      .then( res =>
      {
        return res.json();
      } )
      .then( data =>
      {
        this.setState( { starwarsChars: data.results } );
      } )
      .catch( err =>
      {
        throw new Error( err );
      } );
  };

  render()
  {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {this.state.starwarsChars.map( starwarchar =>
        {
          return (

            <div key={starwarchar.name}>
              <div className="stylesforContent">
                <CardGroup>
                  {/* <Col sm = "8"> */}
                  <Card body>
                    <CardTitle> {starwarchar.name}</CardTitle>
                    <CardText> {starwarchar.birth_year}</CardText>
                    <CardText> {starwarchar.created}</CardText>
                    <CardText> {starwarchar.eyecolor} </CardText>
                    <CardText> {starwarchar.gender} </CardText>
                    <CardText> {starwarchar.hair_color} </CardText>
                    <CardText> {starwarchar.skin_color} </CardText>
                  </Card>
                  {/* </Col> */}
                </CardGroup>
              </div>


            </div>
          );
        } )};
      </div>
    );
  }
}


export default App;
