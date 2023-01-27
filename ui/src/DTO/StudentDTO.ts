export type StudentDTO = {
  id: number;
  name: string;
  address: string;
  cellphone: string;
  photo: File | null;
};

export type GetStudentDTO = Omit<StudentDTO, 'photo'> & { photo: string };
