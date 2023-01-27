import { Minus, Plus } from 'phosphor-react';
import { PropsWithChildren } from 'react';

import { FloatButton } from 'src/components/Button/styles';

type PageContainerProps = PropsWithChildren<{
  isPlus?: boolean;
  title?: string;
  url: string;
}>;

export const PageContainer = ({ children, title, url, isPlus }: PageContainerProps) => {
  return (
    <div>
      {title && <h1>{title}</h1>}
      {children}
      <FloatButton to={url}>{isPlus ? <Plus alt="mais" size={32} /> : <Minus alt="menos" size={32} />}</FloatButton>
    </div>
  );
};

export default PageContainer;
