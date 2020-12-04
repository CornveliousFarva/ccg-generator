import React, { Component } from 'react';
import QuoteAndAuthor from './components/CardGenerator';
import Yellow from './YellowDB';
import White  from './WhiteDB';
export default class App extends Component {

  //state
  state = {
    cards: cards[0].cards,
    yellow: Yellow[0].yellow,
    white: White[0].white
  }

  //generate diffrent quote function
  generateRandomCard = (arr) => {
    //get random numbers

    let num = Math.floor(Math.random() * cards.length)

    let newCard = cards[num];

    //update state
    this.setState({
      quote: newCard.quote,
      author: newCard.author
    })

    this.shuffleCards(cards)

  }

  //shuufle quotes function
  shuffleCards = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Catholic Card Game Generator</h1>
        <QuoteAndAuthor
          generateRandomQuote={this.generateRandomQuote}
          quote={this.state}
        />
      </div>
    )
  }
}

