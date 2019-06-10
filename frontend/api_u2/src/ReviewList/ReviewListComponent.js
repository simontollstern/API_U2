import React, { Component } from 'react'
import style from './ReviewListComponent.module.css';

export default class ReviewListComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/reviews')
      .then(res => res.json())
      .then(data => this.setState({reviews: data}))
  }

  render() {
    return (
      <div>
        <p>Review List</p>
        <ul>
          {this.state.reviews.map((reviews, index) => {
            return (
              <div className={style.reviewWrapper}>
                <h1>{reviews.name}</h1>
                <br></br>
                <p>{reviews.content}</p>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}
