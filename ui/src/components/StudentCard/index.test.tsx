import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import StudentCard from 'src/components/StudentCard';

describe('Component: StudentCard', () => {
  it('should render component successfully', () => {
    const data = {
      id: 1,
      name: 'Victor Fernandes',
      photo: 'https://i.picsum.photos/id/888/200/300.jpg?hmac=WJcjbSQSOOzfBpPsUKZHZzjBCJjDv43RwJ8P8Ag2xj4',
      cellphone: '9 9999-9999',
      address: 'Av Teste novo, 9999, Teste velho'
    };

    render(
      <BrowserRouter>
        <StudentCard data={data} />
      </BrowserRouter>
    );

    const name = screen.getByText(data.name);
    const address = screen.getByText(data.address);
    const cellphone = screen.getByText(data.cellphone);
    const userImage = screen.getByRole('img', { name: 'foto do(a) estudante' });

    expect(name).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(cellphone).toBeInTheDocument();
    expect(userImage).toHaveAttribute('src', data.photo);
  });
});
