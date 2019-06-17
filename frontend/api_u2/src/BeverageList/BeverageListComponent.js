import React, { Component } from 'react'
import style from './BeverageListComponent.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addBeverages } from '../actions';
import Pagination from "react-js-pagination";

class BeverageListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      activePageArray: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/beverages')
      .then(res => res.json())
      .then(beverages => {
        let beverageArray = [];
        let temp = [];
        let count = 1;
        for(let beverage of beverages){
          temp.push(beverage);
          if(count % 10 === 0){
            beverageArray.push(temp);
            temp = [];
          }
          count++;
        }
        beverageArray.push(temp);
        this.props.addBeverages(beverageArray);
        this.setState({activePageArray: this.props.beverages[this.state.activePage -1]});
      })
  }

  handlePageChange = (pageNumber) =>      {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
    this.setState({activePageArray: this.props.beverages[this.state.activePage -1]});
  }

  render() {

    console.log(this.state.activePageArray);

    return (
        <div className={style.beverages}>

          {this.state.activePageArray.map(beverage => {
            return <Link to={"/beverage/" + beverage.id} key={beverage.id}>
              <div className={style.beverageWrapper}>
                <h1>{beverage.nameBold}</h1>
                <h2>{beverage.nameThin}</h2>
              </div>
            </Link>
          })}

        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.props.beverages.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
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
