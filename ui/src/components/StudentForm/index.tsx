import { Camera } from 'phosphor-react';
import { useEffect, useState } from 'react';

import defaultImage from 'src/assets/default-img.png';
import { Button } from 'src/components/Button/styles';
import {
  StudentFormContainer,
  StudentFormContent,
  StudentFormImage,
  StudentFormImageContainer,
  StudentFormInput
} from 'src/components/StudentForm/styles';
import { GetStudentDTO } from 'src/DTO/StudentDTO';

type StudentFormTypes = {
  data?: GetStudentDTO;
  title: string;
  onSubmit: (data: FormData) => Promise<void>;
  removeStudent?: () => void;
};

const StudentForm = ({ title, data, onSubmit, removeStudent }: StudentFormTypes) => {
  const [name, setName] = useState<string>(data?.name || '');
  const [address, setAddress] = useState<string>(data?.address || '');
  const [cellphone, setCellphone] = useState<string>(data?.cellphone || '');
  const [photo, setPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (!photo) {
      setPreview('');
      return;
    }

    const objectUrl = URL.createObjectURL(photo);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [photo]);

  const handleSubmit = async () => {
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = new FormData();
    data.append('name', name);
    data.append('address', address);
    data.append('cellphone', cellphone);
    data.append('photo', photo);
    await onSubmit(data);
    setLoading(false);
  };

  return (
    <StudentFormContainer>
      <h1>{title}</h1>
      <StudentFormContent>
        <StudentFormImageContainer>
          <Camera />
          <StudentFormImage src={preview || data?.photo || defaultImage} alt="preview da imagem" />
          <input
            placeholder="img"
            type="file"
            id="photo"
            onChange={(e) => setPhoto(e.target.files && e.target.files[0])}
            disabled={loading}
          />
        </StudentFormImageContainer>
        <StudentFormInput
          required
          placeholder="Nome"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />
        <StudentFormInput
          required
          placeholder="Endereço"
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          disabled={loading}
        />
        <StudentFormInput
          required
          placeholder="Celular"
          type="text"
          id="cellphone"
          value={cellphone}
          onChange={(e) => setCellphone(e.target.value)}
          disabled={loading}
        />
      </StudentFormContent>
      <Button disabled={loading} type="button" title="enviar" onClick={handleSubmit}>
        {loading ? 'Carregando...' : title}
      </Button>
      {removeStudent && (
        <Button aria-details="danger" disabled={loading} type="button" onClick={removeStudent} name="remover">
          {loading ? 'Carregando...' : 'Remover estudante'}
        </Button>
      )}
    </StudentFormContainer>
  );
};

export default StudentForm;
