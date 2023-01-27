import PageContainer from 'src/components/PageContainer';
import StudentForm from 'src/components/StudentForm';
import { useCreateStudent } from 'src/hooks/useCreateStudent';

const CreateStudent = () => {
  const { handleSubmit } = useCreateStudent();

  return (
    <PageContainer url="/">
      <StudentForm title="Criar estudante" onSubmit={handleSubmit} />
    </PageContainer>
  );
};

export default CreateStudent;
