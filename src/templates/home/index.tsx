'use client';
import { Overlay } from '@/components/molecules/overlay';
import { Navbar } from '../shared/navbar';
import * as S from './styles';

export const HomeTemplate = () => {
  return (
    <>
      <Overlay />
      <S.Home>Home</S.Home>
    </>
  );
};
