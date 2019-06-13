import React, { Component } from 'react'
import style from './ReviewListComponent.module.css';
import { Link } from 'react-router-dom';

export default class ReviewListComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  getReviews = () => {
    fetch('http://localhost:3001/reviews')
      .then(res => res.json())
      .then(data => this.setState({reviews: data}))
  }

  deleteReview = (id) => {
    fetch('http://localhost:3001/reviews/' + id, {
      method: 'DELETE'
    })
  }

  componentDidMount() {
    this.getReviews();
  }

  render() {
    return (
      <div className={style.reviews}>
        <p>Review List</p>
          {this.state.reviews.map((reviews, index) => {
            return (
              <div className={style.reviewWrapper} key={index}>
                <h3>{reviews.title}</h3>
                <p>{reviews.content}</p>
                <Link to={"/" + reviews.beverageId} className={style.link}>Till drycken här</Link>
                <button onClick={() => this.deleteReview(reviews._id)}>Delete</button>
              </div>
            )
          })}
      </div>
    )
  }
}
