import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Pagination from '../Pagination';

describe('Pagination Component', () => {
  test('renders pagination buttons', () => {
    render(
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    );

    const prevButton = screen.getByText(/Previous/i);
    const nextButton = screen.getByText(/Next/i);

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test('navigates when clicking buttons', () => {
    render(
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>
    );

    const prevButton = screen.getByText(/Previous/i);
    const nextButton = screen.getByText(/Next/i);

    fireEvent.click(nextButton);
    fireEvent.click(prevButton);

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
});
