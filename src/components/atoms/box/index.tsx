import { FC } from 'react';
import * as S from './styles';
import { BoxProps } from './props';

export const Box: FC<BoxProps> = ({ title, className, children }) => {
  return (
    <S.BoxContainer className={className}>
      {title && <S.Title>{title}</S.Title>}
      <S.Box>{children}</S.Box>
    </S.BoxContainer>
  );
};
