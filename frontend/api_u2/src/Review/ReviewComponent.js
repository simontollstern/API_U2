import React, { Component } from 'react'

export default class ReviewComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      beverage: {},
      review: {},
      textarea: ''
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
      for(let radio of document.querySelector('form div').children){
        if(radio.value == this.state.review.rating){
          radio.checked = true;
        }
      }
    })
    .then(() => this.setState({textarea: this.state.review.content}))
  }

  handleChange = (e) => {
    this.setState({textarea: e.target.value});
  }

  render() {
    return (
      <div>
        <p>{this.state.beverage.nameBold}</p>
        <form onSubmit={this.editReview}>
          <input type="text" defaultValue={this.state.review.title} />
          <textarea value={this.state.textarea} onChange={this.handleChange}></textarea>
          <div>
            <input type="radio" name="rating" value="1" />
            <input type="radio" name="rating" value="0" />
          </div>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    )
  }
}
