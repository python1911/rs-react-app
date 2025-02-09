import React, { Component } from 'react';
import Card from './Card';

interface CardListProps {
  items: { name: string; description: string }[];
}

class CardList extends Component<CardListProps> {
  render() {
    return (
      <div className="card-list">
        {this.props.items.map((item, index) => (
          <Card key={index} name={item.name} description={item.description} />
        ))}
      </div>
    );
  }
}

export default CardList;
