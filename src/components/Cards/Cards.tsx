import React, { Component } from 'react';

import { songsData } from '../../assets/songs-data/songs';
import { Card } from './Card/Card';
import { ICard } from '../../interfaces/interfaces';

import styles from './Cards.module.css';

interface CardsState {
  cards: ICard[];
}

export class Cards extends Component {
  state: CardsState = {
    cards: [],
  };

  componentDidMount = () => {
    this.setState({ cards: songsData });
  };

  render = () => {
    const cardsLayout = this.state.cards.map((card) => <Card key={card.id} card={card} />);

    return (
      <div className={styles.wrapper} data-testid="cards">
        {cardsLayout}
      </div>
    );
  };
}
