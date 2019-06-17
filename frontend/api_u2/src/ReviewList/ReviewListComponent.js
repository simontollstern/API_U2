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
    }).then(() => this.getReviews())
  }

  componentDidMount() {
    this.getReviews();
  }

  render() {
    console.log(this.state.reviews)
    return (
      <div className={style.reviews}>
        <p>Review List</p>
          {this.state.reviews.map((review, index) => {
            return (
              <div className={style.reviewWrapper} key={index}>
                <h3>{review.title}</h3>
                <p>{review.content}</p>
                <Link to={"/beverage/" + review.beverageId} className={style.link}>Till drycken här</Link>
                <button onClick={() => this.deleteReview(review._id)}>Delete</button>
                <button><Link to={"/review/" + review.beverageId}>Edit</Link></button>
              </div>
            )
          })}
      </div>
    )
  }
}