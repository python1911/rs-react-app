import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardList from '../CardList';

const mockItems = [
  { name: 'Bulbasaur', description: 'Grass/Poison Pokémon' },
  { name: 'Charmander', description: 'Fire-type Pokémon' },
];

describe('CardList Component', () => {
  test('renders list of items', () => {
    render(
      <MemoryRouter>
        <CardList items={mockItems} />
      </MemoryRouter>
    );

    const firstItem = screen.getByText(/Bulbasaur/i);
    const secondItem = screen.getByText(/Charmander/i);

    expect(firstItem).toBeInTheDocument();
    expect(secondItem).toBeInTheDocument();
  });

  test('displays correct descriptions', () => {
    render(
      <MemoryRouter>
        <CardList items={mockItems} />
      </MemoryRouter>
    );

    const firstDescription = screen.getByText(/Grass\/Poison Pokémon/i);
    const secondDescription = screen.getByText(/Fire-type Pokémon/i);

    expect(firstDescription).toBeInTheDocument();
    expect(secondDescription).toBeInTheDocument();
  });
});
