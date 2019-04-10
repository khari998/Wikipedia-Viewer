import React, { Component } from 'react'

export default class RandomArticleButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomClicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.state.randomClicked = true;
    if (this.state.randomClicked) {
      // render random article
      window.open('https://en.wikipedia.org/wiki/Special:Random');
      // reset state
      this.state.randomClicked = false;
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Random Article?
        </button>

      </div>
    )
  }
}