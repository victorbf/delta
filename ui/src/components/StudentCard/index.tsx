import { GetStudentDTO } from 'src/DTO/StudentDTO';

import {
  StudentCardContainer,
  StudentCardContent,
  StudentCardFirstLetter,
  StudentCardImage,
  StudentCardName,
  StudentCardValue
} from './styles';

interface StudentCardProps {
  data: GetStudentDTO;
}

const StudentCard = ({ data }: StudentCardProps) => {
  return (
    <StudentCardContainer to={`/student/${data.id}`}>
      <StudentCardImage src={data.photo} alt="foto do(a) estudante" />
      <StudentCardFirstLetter>{data.name[0]}</StudentCardFirstLetter>
      <StudentCardContent>
        <StudentCardName>{data.name}</StudentCardName>
        <StudentCardValue>
          <p>{data.cellphone}</p>
        </StudentCardValue>
        <StudentCardValue>
          <p>{data.address}</p>
        </StudentCardValue>
      </StudentCardContent>
    </StudentCardContainer>
  );
};

export default StudentCard;
