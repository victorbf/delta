import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useUpdateStudent = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const handleSubmit = async (data: FormData) => {
    try {
      const res = await axios.patch(`${import.meta.env.VITE_API_HOST}/student/${id}`, data);
      toast.success(`Aluno(a) ${res.data.name} foi alterado(a) com sucesso!`);
      navigation('/');
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar o formulário');
    }
  };
  return { handleSubmit };
};
