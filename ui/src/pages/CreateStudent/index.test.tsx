import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { useCreateStudent } from 'src/hooks/useCreateStudent';
import CreateStudent from 'src/pages/CreateStudent';

vi.mock('src/hooks/useCreateStudent');

describe('Page: CreateStudent', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  const useCreateStudentMocked = vi.mocked(useCreateStudent);
  it('it should call handleSubmit on click', async () => {
    const handleSubmit = vi.fn();
    useCreateStudentMocked.mockReturnValueOnce({ handleSubmit });
    render(
      <BrowserRouter>
        <CreateStudent />
      </BrowserRouter>
    );
    const submitButton = screen.getByRole('button', { name: 'Criar estudante' });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
    });
  });
});
