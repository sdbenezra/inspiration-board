import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    console.log("Component has mounted");
    const CARDS = this.props.url + this.props.boardName

    axios.get(CARDS)
    .then((response) => {
      this.setState({
        cards: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }





  render() {
    const cards = this.state.cards.map((card, i) => {
      return <Card key={i} text={card.card.text} emoji={card.card.emoji}
        />
    });

    return (
      <div>
        {cards}
      </div>
    )

  }
}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
};

export default Board;
