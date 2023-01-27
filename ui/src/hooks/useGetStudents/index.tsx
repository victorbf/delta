import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { GetStudentDTO } from 'src/DTO/StudentDTO';

export const useGetStudents = () => {
  const [students, setStudents] = useState<GetStudentDTO[]>([]);

  const getValues = useCallback(async () => {
    try {
      const result = await axios.get(`${import.meta.env.VITE_API_HOST}/students`);
      const studentsWithPhoto = result.data.map((student: GetStudentDTO) => ({
        ...student,
        photo: `${import.meta.env.VITE_API_HOST}/media/${student.photo}`
      }));
      setStudents(studentsWithPhoto);
    } catch (error) {
      toast.error('Ocorreu um erro ao carregar os estudantes');
    }
  }, []);

  useEffect(() => {
    getValues();
  }, [getValues]);

  return [students];
};
