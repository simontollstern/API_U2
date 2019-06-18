import React, { Component } from 'react'
import style from './ReviewComponent.module.css';
import thumbsup from '../thumbsup.png';
import thumbsdown from '../thumbsdown.png';

export default class ReviewComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      beverage: {},
      review: {},
      textarea: ''
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

  editReview = (e, review) => {
    e.preventDefault();

    const getRating = () => {
      for(let radio of e.target.children[2].children){
        if(radio.checked === true){
          return radio.value
        }
      }
    }

    review = {
      beverageId: this.state.review.beverageId,
      title: e.target.children[0].value,
      content: this.state.textarea,
      rating: getRating()
    }

    fetch('http://localhost:3001/reviews/' + this.state.review._id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(review)
    }).then(() => this.props.history.push('/'))
  }

  componentDidMount() {
    fetch('http://localhost:3001/beverages/' + this.props.match.params.id)
    .then(res => res.json())
    .then(beverage => this.setState({beverage}))
    
    fetch('http://localhost:3001/reviews/' + this.props.match.params.id)
    .then(res => res.json())
    .then(review => this.setState({review}))
    .then(() => {
      const labels = document.querySelectorAll('form div label');
      if(this.state.review.rating){
        labels[0].children[1].checked = true;
      }else{
        labels[1].children[1].checked = true;
      }
    })
    .then(() => this.setState({textarea: this.state.review.content}))
    .then(() => this.setRadioColor())
  }

  handleChange = (e) => {
    this.setState({textarea: e.target.value});
  }

  render() {
    return (
      <div className={style.reviewContent}>
        <p>{this.state.beverage.nameBold}</p>
        <form onSubmit={this.editReview}>
          <input type="text" defaultValue={this.state.review.title} />
          <textarea value={this.state.textarea} onChange={this.handleChange}></textarea>
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
    )
  }
}
