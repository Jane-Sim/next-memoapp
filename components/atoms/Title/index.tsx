import { ReactNode } from 'react';
import { MainTitle, SubTitle } from './styles';

interface TitleProps {
  styleType: string;
  children: ReactNode;
}

const Title = ({ styleType, children }: TitleProps) => {
  if (styleType === 'MainTitle') return <MainTitle>{children}</MainTitle>;
  else if (styleType === 'SubTitle') return <SubTitle>{children}</SubTitle>;
  else return <></>;
};

export default Title;
