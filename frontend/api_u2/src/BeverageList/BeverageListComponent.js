import React, { Component } from 'react'
import style from './BeverageListComponent.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addBeverages } from '../actions';

class BeverageListComponent extends Component {
  componentDidMount(){
    fetch('http://localhost:3001/beverages')
      .then(res => res.json())
      .then(beverages => this.props.addBeverages(beverages));
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Sök.." />
        <ul>
          {this.props.beverages.map(beverage => {
            return <li key={beverage.id}><Link to={"/" + beverage.id}><span>{beverage.nameBold}</span> {beverage.nameThin}</Link></li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  beverages: state.root.beverages
})

const mapDispatchToProps = (dispatch) => ({
  addBeverages: (beverages) => dispatch(addBeverages(beverages))
})

export default connect(mapStateToProps, mapDispatchToProps)(BeverageListComponent);
