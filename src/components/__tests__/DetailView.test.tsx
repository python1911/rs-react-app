import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DetailView from '../../components/DetailView';

describe('DetailView Component', () => {
  test('renders DetailView component with a placeholder message', () => {
    render(
      <BrowserRouter>
        <DetailView />
      </BrowserRouter>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
