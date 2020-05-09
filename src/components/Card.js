import React, { Component } from 'react'

class Card extends Component {

  componentDidMount() {
    this.setState({nombre: "Malena"})
  }
  
  render() {
    
    console.log(this.state)

    return(
      <div>{this.props.info}</div>
    )
  }
}

export default Card;
