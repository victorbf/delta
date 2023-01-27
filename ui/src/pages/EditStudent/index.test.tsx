import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import * as useGetStudent from 'src/hooks/useGetStudent';
import * as useUpdateStudent from 'src/hooks/useUpdateStudent';
import { studentMock } from 'src/mocks/StudentsMocks';
import EditStudent from 'src/pages/EditStudent';

describe('Page: EditStudent', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should show only Loading if loading is true', () => {
    vi.spyOn(useGetStudent, 'useGetStudent').mockReturnValueOnce({ student: undefined, loading: true });
    render(
      <BrowserRouter>
        <EditStudent />
      </BrowserRouter>
    );
    const emptyMessage = screen.getByTitle('loading');
    expect(emptyMessage).toBeInTheDocument();
  });

  it('should show only Loading if loading is true even if has student', () => {
    vi.spyOn(useGetStudent, 'useGetStudent').mockReturnValueOnce({ student: studentMock, loading: true });
    render(
      <BrowserRouter>
        <EditStudent />
      </BrowserRouter>
    );

    const emptyMessage = screen.getByTitle('loading');
    expect(emptyMessage).toBeInTheDocument();
  });

  it('should load student in input if loading is false and has student', () => {
    vi.spyOn(useGetStudent, 'useGetStudent').mockReturnValueOnce({ student: studentMock, loading: false });
    render(
      <BrowserRouter>
        <EditStudent />
      </BrowserRouter>
    );

    const inputName = screen.getByPlaceholderText('Nome');
    const inputAddress = screen.getByPlaceholderText('Endereço');
    const inputCellphone = screen.getByPlaceholderText('Celular');
    expect(inputName).toHaveAttribute('defaultvalue', studentMock.name);
    expect(inputAddress).toHaveAttribute('defaultvalue', studentMock.address);
    expect(inputCellphone).toHaveAttribute('defaultvalue', studentMock.cellphone);
  });

  it('should call handleSubmit when click in edit student', async () => {
    const handleSubmit = vi.fn();

    vi.spyOn(useGetStudent, 'useGetStudent').mockReturnValueOnce({ student: studentMock, loading: false });
    vi.spyOn(useUpdateStudent, 'useUpdateStudent').mockReturnValueOnce({ handleSubmit });
    render(
      <BrowserRouter>
        <EditStudent />
      </BrowserRouter>
    );

    const submitButton = screen.getByRole('button', { name: 'Editar estudante' });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
    });
  });

  it('should call handleSubmit when click in edit student', async () => {
    const handleSubmit = vi.fn();

    vi.spyOn(useGetStudent, 'useGetStudent').mockReturnValueOnce({ student: studentMock, loading: false });
    vi.spyOn(useUpdateStudent, 'useUpdateStudent').mockReturnValueOnce({ handleSubmit });
    render(
      <BrowserRouter>
        <EditStudent />
      </BrowserRouter>
    );

    const removeStudentButton = screen.getByRole('button', { name: 'Remover estudante' });
    fireEvent.click(removeStudentButton);

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
    });
  });
});
