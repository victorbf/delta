import { GetStudentDTO } from 'src/DTO/StudentDTO';

export const studentMock: GetStudentDTO = {
  id: 1,
  address: 'QE 11 Área Especial C, 71020631, Guará I',
  cellphone: '(11) 95171-9704',
  name: 'Goels Enmin Bexye',
  photo: 'url'
};
export const studentsMock: GetStudentDTO[] = [studentMock];
