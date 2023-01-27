import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Loading from 'src/components/Loading';

describe('Component: EmptyState', () => {
  it('should render component successfully', () => {
    render(
      <BrowserRouter>
        <Loading />
      </BrowserRouter>
    );
    const loading = screen.getByTitle('loading');
    expect(loading).toBeInTheDocument();
  });
});
