import Loading from 'src/components/Loading';
import PageContainer from 'src/components/PageContainer';
import StudentForm from 'src/components/StudentForm';
import { useGetStudent } from 'src/hooks/useGetStudent';
import { useUpdateStudent } from 'src/hooks/useUpdateStudent';

const EditStudent = () => {
  const { student, loading } = useGetStudent();
  const { handleSubmit } = useUpdateStudent();

  const handleRemoveStudent = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const deleteFormData: any = new FormData();
    deleteFormData.append('deletedAt', new Date());
    handleSubmit(deleteFormData);
  };

  return (
    <PageContainer url="/">
      {loading && <Loading />}
      {student && !loading && (
        <StudentForm
          title="Editar estudante"
          data={student}
          onSubmit={handleSubmit}
          removeStudent={handleRemoveStudent}
        />
      )}
    </PageContainer>
  );
};

export default EditStudent;
