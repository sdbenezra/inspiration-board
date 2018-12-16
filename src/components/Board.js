import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

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

  addCardCallback = (cardInfo) => {
    // console.log("Board message - addCardCallback triggered");
    axios.post('https://inspiration-board.herokuapp.com/boards/sig/cards', cardInfo)
    .then((response) => {
      let updatedCards = this.state.cards;
      updatedCards.push({card: {id:response.data.card.id, text: cardInfo.text, emoji: cardInfo.emoji}});
      this.setState({cards: updatedCards});

    })
    .catch((error) => {
      this.setState({error: error.message });
    });
  }

  onDeleteCallback = (index, id) => {
    // console.log("Board Message - onDeleteCallback");
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${id}`)
    .then((response) => {
      console.log(`Card ${id} deleted`);
      console.log(response);
      console.log(this.state.cards);
      const newState = this.state.cards;
      newState.splice(index, 1);
      this.setState({cards: newState});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const cards = this.state.cards.map((card, i) => {
      if (!card.card) {
        return <Card key={i} text={card.text} emoji={card.emoji} index={i} id={card.id} onDeleteCallback={this.onDeleteCallback} />
      } else {
        return <Card key={i} text={card.card.text} emoji={card.card.emoji} index={i} id={card.card.id}
          onDeleteCallback={this.onDeleteCallback}
        />
    }
  });


    return (
      <div className="new-card-form">
        <NewCardForm addCardCallback={this.addCardCallback}/>
        {cards}
      </div>
    )

  }
}

Board.propTypes = {
  url: PropTypes.string,
  boardName: PropTypes.string,
  id: PropTypes.string
};

export default Board;
