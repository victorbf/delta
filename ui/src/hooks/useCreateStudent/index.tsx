import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useCreateStudent = () => {
  const navigation = useNavigate();

  const handleSubmit = async (data: FormData) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_HOST}/student`, data);
      console.log('deu baum');
      toast.success(`Aluno(a) ${res.data.name} foi criado(a) com sucesso!`);
      console.log('deu melhor ainda');
      navigation('/');
    } catch (error) {
      const errorMessage = error as Error;
      toast.error(errorMessage.message);
    }
  };

  return { handleSubmit };
};
