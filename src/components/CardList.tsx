import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

interface CardListProps {
  items: { name: string; description: string }[];
}

const CardList: React.FC<CardListProps> = ({ items }) => {
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    navigate(`/details/${index}`);
  };

  return (
    <div className="card-list">
      {items.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          description={item.description}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default CardList;
