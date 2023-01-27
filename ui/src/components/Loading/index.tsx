import { CircleNotch } from 'phosphor-react';
import { LoadingContainer } from 'src/components/Loading/styles';

const Loading = () => {
  return (
    <LoadingContainer>
      <CircleNotch alt="loading" size={32} />
    </LoadingContainer>
  );
};

export default Loading;
