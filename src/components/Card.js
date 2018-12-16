import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';


class Card extends Component {
  constructor(props){
    super(props)

  }


  render() {
    const deleteCard = () => {
        console.log(`This is the index from card props: ${this.props.index}`);
        console.log(`This is the id from card props: ${this.props.id}`);
        this.props.onDeleteCallback(this.props.index, this.props.id);
      }
    return (
      <div className="card">
        <div className="card__content">
          <p className="card__content-text">{this.props.text}</p>
          <p className="card__content-emoji">{emoji.getUnicode(`${this.props.emoji}`)}</p>
          <button onClick={deleteCard} className="card__delete">Delete</button>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  onDeleteCallback: PropTypes.func,
};

export default Card;
