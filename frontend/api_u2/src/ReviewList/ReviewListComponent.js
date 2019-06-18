import React, { Component } from 'react'
import style from './ReviewListComponent.module.css';
import { Link } from 'react-router-dom';
import thumbsup from '../thumbsup.png';
import thumbsdown from '../thumbsdown.png';

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
    return (
      <div className={style.reviews}>
          {this.state.reviews.map((review, index) => {
            return (
              <div className={`${style.reviewWrapper} ${(review.rating ? style.positive : style.negative)}`} key={index}>
                <div>
                  <div>
                    <h1>{review.title}</h1>
                    <p>{review.content}</p>
                  </div>
                  <div>
                    {review.rating ? <img src={thumbsup} alt="thumbs up" /> : <img src={thumbsdown} alt="thumbs down" />}
                  </div>
                </div>
                <div>
                <Link to={"/beverage/" + review.beverageId}>Till drycken</Link>
                <a onClick={() => this.deleteReview(review._id)}>Ta bort</a>
                <Link to={"/review/" + review.beverageId}>Redigera</Link>
                </div>
              </div>
            )
          })}
      </div>
    )
  }
}
