'use client';
import { FC } from 'react';
import * as S from './styles';
import { Navbar } from '@/templates/shared/navbar';
import { Menu } from '@/templates/shared/menu';

export const Overlay: FC = () => {
  return (
    <S.Overlay>
      <Menu />
      <Navbar />
    </S.Overlay>
  );
};
