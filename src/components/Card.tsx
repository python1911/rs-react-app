import React from 'react';

interface CardProps {
  name: string;
  description: string;
}

class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Card;
