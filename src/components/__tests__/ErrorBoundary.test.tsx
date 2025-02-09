import { render } from '@testing-library/react';
import ErrorBoundary from '../../components/ErrorBoundary';

describe('ErrorBoundary Component', () => {
  test('renders fallback UI when error occurs', () => {
    const ThrowError = () => {
      throw new Error('Test error');
    };

    const { getByText } = render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(getByText(/Something went wrong/i)).toBeInTheDocument();
  });
});
