import { FC } from 'react';
import * as S from './styles';
import { BoxProps } from './props';

export const Modal: FC<BoxProps> = ({ isOpen, className, children }) => {
  return (
    <S.Modal className={className} $isOpen={isOpen}>
      <S.Box>{children}</S.Box>
    </S.Modal>
  );
};
