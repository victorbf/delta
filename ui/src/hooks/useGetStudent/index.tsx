import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GetStudentDTO } from 'src/DTO/StudentDTO';

export const useGetStudent = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const [student, setStudent] = useState<GetStudentDTO>();
  const [loading, setLoading] = useState(false);

  const getStudent = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_HOST}/students/${id}`);
      setStudent({ ...res.data, photo: `${import.meta.env.VITE_API_HOST}/media/${res.data.photo}` });
    } catch (error) {
      toast.error('Não foi possível carregar o estudante');
      navigation('/');
    }
    setLoading(false);
  }, [id, navigation]);

  useEffect(() => {
    getStudent();
  }, [getStudent]);

  return { student, loading };
};
