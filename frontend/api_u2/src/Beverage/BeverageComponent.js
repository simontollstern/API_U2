import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class BeverageComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      beverage: {}
    }
  }

  addReview = (e, review) => {
    e.preventDefault();

    const getRating = () => {
      for(let radio of e.target.children[2].children){
        if(radio.checked === true){
          return radio.value
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
    // for(let beverageArray of this.props.beverages){
    //   for(let beverage of beverageArray){
    //     if(beverage.id === this.props.match.params.id){
    //       this.setState({beverage})
    //     }
    //   }
    // }

    fetch('http://localhost:3001/beverages/' + this.props.match.params.id)
      .then(res => res.json())
      .then(beverage => this.setState({beverage}))
  }

  render() {
    return (
      <Fragment>
        <p>{this.state.beverage.nameBold}</p>
        <form onSubmit={this.addReview}>
          <input type="text" />
          <textarea></textarea>
          <div>
            <input type="radio" name="rating" value="1" />
            <input type="radio" name="rating" value="0" />
          </div>
          <input type="submit" value="SUBMIT" />
        </form>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  beverages: state.root.beverages
})

export default connect(mapStateToProps)(BeverageComponent);
