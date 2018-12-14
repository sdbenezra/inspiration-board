import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(`Text is: ${this.props.text}`);
    console.log(`Emoji is: ${this.props.emoji}`);

    return (
      <div className="card">
        <div className="card__content">
          <p>{this.props.text}</p>
          <p>{emoji.getUnicode(`${this.props.emoji}`)}</p>
          </div>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.text,
  emoji: PropTypes.text,
};

export default Card;
