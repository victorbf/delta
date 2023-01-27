import { SmileyXEyes } from 'phosphor-react';

import { EmptyStateContainer } from 'src/components/EmptyState/styles';
import { Link } from 'src/components/Link/styles';

const EmptyState = () => {
  return (
    <EmptyStateContainer>
      <SmileyXEyes size={82} />
      <p>Ops. Você não criou nenhum estudante</p>
      <Link to="/create">Crie um novo agora!</Link>
    </EmptyStateContainer>
  );
};

export default EmptyState;
