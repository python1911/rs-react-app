import React from 'react';

interface CardProps {
  name: string;
  description: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ name, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
