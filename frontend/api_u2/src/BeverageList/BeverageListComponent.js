import React, { Component } from 'react'
import style from './BeverageListComponent.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addBeverages } from '../actions';
import ReviewListComponent from '../ReviewList/ReviewListComponent';

class BeverageListComponent extends Component {
  componentDidMount(){
    fetch('http://localhost:3001/beverages')
      .then(res => res.json())
      .then(beverages => this.props.addBeverages(beverages));
  }

  render() {
    return (
      <div className={style.beverages}>
        <input type="text" placeholder="Sök.." />
        <ul>
          {this.props.beverages.map((beverage) => {
            return (
              <div key={beverage.id} className={style.beverageWrapper}>
                <img src="https://icon2.kisspng.com/20180125/ejq/kisspng-beer-icon-design-icon-beer-5a6a18519fe249.7805303115169024816549.jpg" alt="Beer" height="60" />
                <div>
                  <Link to={"/" + beverage.id}>{beverage.nameBold}</Link>
                  <p>{beverage.nameThin}</p>
                </div>
              </div>
              // <li key={beverage.id}><Link to={"/" + beverage.id}><span>{beverage.nameBold}</span> {beverage.nameThin}</Link></li>
            )
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
