import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import EmptyState from 'src/components/EmptyState';

describe('Component: EmptyState', () => {
  it('should render component successfully', () => {
    render(
      <BrowserRouter>
        <EmptyState />
      </BrowserRouter>
    );
    const MessageText = screen.getByText('Ops. Você não criou nenhum estudante');
    const CallbackMessage = screen.getByRole('link', { name: 'Crie um novo agora!' });
    expect(CallbackMessage).toBeInTheDocument();
    expect(MessageText).toBeInTheDocument();
  });
});
