import EmptyState from 'src/components/EmptyState';
import PageContainer from 'src/components/PageContainer';
import StudentCard from 'src/components/StudentCard';
import { useGetStudents } from 'src/hooks/useGetStudents';
import { StudentsListContent } from 'src/pages/StudentsList/styles';

const StudentsList = () => {
  const [students] = useGetStudents();

  return (
    <div>
      <PageContainer title="Estudantes" url="/create" isPlus>
        {!students.length && <EmptyState />}
        <StudentsListContent>
          {students.map((student) => (
            <StudentCard data={student} key={student.id} />
          ))}
        </StudentsListContent>
      </PageContainer>
    </div>
  );
};

export default StudentsList;
