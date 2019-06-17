import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './BeverageComponent.module.css';
import thumbsup from '../thumbsup.png';
import thumbsdown from '../thumbsdown.png';

class BeverageComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      beverage: {},
      reviews: []
    }
  }

  setRadioColor = () => {
    for(let label of document.querySelectorAll('form div label')){
      if(label.children[1].checked){
        label.children[0].style.opacity = '1';
      }else{
        label.children[0].style.opacity = '0.25';
      }
    }
  }

  addReview = (e, review) => {
    e.preventDefault();

    const getRating = () => {
      for(let label of document.querySelectorAll('form div label')){
        if(label.children[1].checked === true){
          return label.children[1].value
        }
      }
    }

    review = {
      beverageId: this.state.beverage.id,
      title: e.target.children[0].value,
      content: e.target.children[1].value,
      rating: getRating()
    }

    fetch('http://localhost:3001/reviews', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(review)
    }).then(() => this.props.history.push('/'))
  }

  componentDidMount(){
    fetch('http://localhost:3001/beverages/' + this.props.match.params.id)
      .then(res => res.json())
      .then(beverage => this.setState({beverage}))


    fetch('http://localhost:3001/beverage/' + this.props.match.params.id + '/reviews')
      .then(res => res.json())
      .then(reviews => this.setState({reviews}))
  }

  render() {
    return (
      <div className={style.beverageContent}>
        <div>
          <p>{this.state.beverage.nameBold}</p>
          <form onSubmit={this.addReview}>
            <input type="text" placeholder="Namn..." />
            <textarea placeholder="Skriv en recenssion..."></textarea>
            <div>
              <label>
                <img src={thumbsup} alt="thumbs up" />
                <input type="radio" name="rating" value="1" onChange={this.setRadioColor} />
              </label>
              <label>
                <img src={thumbsdown} alt="thumbs down" />
                <input type="radio" name="rating" value="0" onChange={this.setRadioColor} />
              </label>
            </div>
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
        {this.state.reviews.map((review, index) => {
          return (
            <div key={index} className={style.beverageReviews}>
              <p>{review.title}</p>
              <p>{review.content}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  beverages: state.root.beverages
})

export default connect(mapStateToProps)(BeverageComponent);
