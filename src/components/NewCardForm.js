import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  static propTypes = {
    addCardCallback: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      cards:[{
        cardID: {
          card: {text: '', emoji: '',}
        }
      }]
    }
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newState = {};
    newState[field] = value;
    this.setState(newState)
  }

  resetState = () => {
    this.setState({
      cards:[{cardID: {card: {text: '', emoji: '',}}}]
    });
  }


  onFormSubmit = (event) => {
    event.preventDefault();

    const card = {
      text: this.state.message,
      emoji: this.state.emoji,
    }
    this.resetState();
    this.props.addCardCallback(card)
  }

  render() {
    const emojiList =  EMOJI_LIST.map((item, i) => {
        return <option key={i} value={item}>{item}</option>
      });

    return(
      <form onSubmit={this.onFormSubmit} className="new-card-form" >
        <header className="new-card-form__header">
          Add a New Card!
        </header>
        <p></p>
        <section>
          <label htmlFor="message" className="new-card-form__form-label">Your Message</label>
          <input name="message" type="text" value={this.state.message} onChange={this.onInputChange} className="new-card-form__form-textarea"/>
            <select onChange={this.onInputChange} name="emoji" className="new-card-form__form-select">
              {emojiList}
            </select>
        </section>
        <p></p>
        <input type="submit" value="Add message" className="new-card-form__form-button" />
      </form>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func,
};

export default NewCardForm;
