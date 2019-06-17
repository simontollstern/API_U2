import React, { Component, Fragment } from 'react'
import './StartScreenComponent.module.css';
import ReviewListComponent from '../ReviewList/ReviewListComponent'
import BeverageListComponent from '../BeverageList/BeverageListComponent';

export default class StartScreenComponent extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <h1>hursmakarden</h1>
        </header>
        <main>
          <ReviewListComponent />
          <BeverageListComponent />
        </main>
      </Fragment>
    )
  }
}
