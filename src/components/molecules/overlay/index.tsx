'use client';
import { FC } from 'react';
import * as S from './styles';
import { Navbar } from '@/templates/shared/navbar';
import { Menu } from '@/templates/shared/menu';
import { useUserContext } from '@/contexts/user';

export const Overlay: FC = () => {
  const { user } = useUserContext();

  return (
    <S.Overlay>
      {user.position !== 'Administrador' && <Menu />}
      <Navbar />
    </S.Overlay>
  );
};
