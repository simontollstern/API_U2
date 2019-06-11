import React, { Component } from 'react'
import style from './BeverageListComponent.module.css';
import { Link } from 'react-router-dom';

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
        <input type="text" placeholder="Sök.." />
        <ul>
          {this.state.beverages.map(beverage => {
            return <li key={beverage.id}><Link to={"/" + beverage.id + "+" + beverage.productNumber}><span>{beverage.nameBold}</span> {beverage.nameThin}</Link></li>
          })}
        </ul>
      </div>
    )
  }
}
