import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../Search';

describe('Search Component', () => {
  test('renders search input and button', () => {
    render(<Search onSearch={() => {}} />);

    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button', { name: /search/i });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('updates input value correctly', () => {
    render(<Search onSearch={() => {}} />);
    const inputElement = screen.getByRole('textbox');

    fireEvent.change(inputElement, { target: { value: 'Pikachu' } });

    expect(inputElement).toHaveValue('Pikachu');
  });
});
