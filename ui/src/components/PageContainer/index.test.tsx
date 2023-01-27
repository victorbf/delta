import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import PageContainer from 'src/components/PageContainer';

describe('Component: PageContainer', () => {
  it('should render component successfully default', () => {
    render(
      <BrowserRouter>
        <PageContainer url="/" />
      </BrowserRouter>
    );

    const link = screen.getByRole('link');
    const minusIcon = screen.getByTitle('menos');
    expect(link).toBeInTheDocument();
    expect(minusIcon).toBeInTheDocument();
  });

  it('should render title', () => {
    render(
      <BrowserRouter>
        <PageContainer url="/" title="Page" />
      </BrowserRouter>
    );

    const title = screen.getByRole('heading', { name: 'Page' });
    expect(title).toBeInTheDocument();
  });

  it('should render plus icon', () => {
    render(
      <BrowserRouter>
        <PageContainer url="/" isPlus />
      </BrowserRouter>
    );

    const plusIcon = screen.getByTitle('mais');
    expect(plusIcon).toBeInTheDocument();
  });
});
