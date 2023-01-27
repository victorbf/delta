import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useGetStudents } from 'src/hooks/useGetStudents';
import { studentMock, studentsMock } from 'src/mocks/StudentsMocks';

import StudentsList from 'src/pages/StudentsList';

describe('Page: StudentsList', () => {
  vi.mock('src/hooks/useGetStudents');
  const useGetStudentsMocked = vi.mocked(useGetStudents);

  it('should render empty state if has no student', () => {
    const students: never[] = [];
    useGetStudentsMocked.mockReturnValueOnce([students]);
    render(
      <BrowserRouter>
        <StudentsList />
      </BrowserRouter>
    );

    const emptyMessage = screen.getByText('Ops. Você não criou nenhum estudante');
    expect(emptyMessage).toBeInTheDocument();
  });

  it('should render student card if has students', () => {
    useGetStudentsMocked.mockReturnValueOnce([studentsMock]);
    render(
      <BrowserRouter>
        <StudentsList />
      </BrowserRouter>
    );

    const studentName = screen.getByText(studentMock.name);
    const studentAddress = screen.getByText(studentMock.address);
    const studentCellphone = screen.getByText(studentMock.cellphone);
    expect(studentName).toBeInTheDocument();
    expect(studentAddress).toBeInTheDocument();
    expect(studentCellphone).toBeInTheDocument();
  });
});
