import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import StudentForm from 'src/components/StudentForm';

describe('Component: StudentForm', () => {
  it('should render component successfully', async () => {
    const handleSubmit = vi.fn();
    render(
      <BrowserRouter>
        <StudentForm title="Add Student" onSubmit={handleSubmit} />
      </BrowserRouter>
    );

    const submitButton = screen.getByRole('button', { name: 'Add Student' });
    const title = screen.getByRole('heading', { name: 'Add Student' });
    const userImage = screen.getByRole('img');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
    });
    expect(title).toBeInTheDocument();
    expect(userImage).toHaveAttribute('src', '/src/assets/default-img.png');
  });
});
