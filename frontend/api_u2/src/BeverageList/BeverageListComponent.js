import React, { Component } from 'react'
import style from './BeverageListComponent.module.css';

export default class BeverageListComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      beverages: []
    };
  }

  componentDidMount(){
    fetch('http://localhost:3001/beverages')
      .then(res => res.json())
      .then(beverages => this.setState({beverages: beverages}));
  }

  render() {
    return (
      <div>
        <h2>Nån sökfunktion här</h2>
        <ul>
          {this.state.beverages.map(beverage => {
            return <li key={beverage.id}><a href="">{beverage.nameBold}</a></li>
          })}
        </ul>
      </div>
    )
  }
}
