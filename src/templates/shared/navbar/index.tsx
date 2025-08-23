'use client';
import { FC } from 'react';
import { navbarC as C } from './constants';
import * as S from './styles';

export const Navbar: FC = () => {
  return (
    <S.Navbar>
      <S.LogoContainer>
        <S.Logo {...C.logo} />
        <S.LogoName>{C.logoTitle}</S.LogoName>
      </S.LogoContainer>
      <S.ProfileContainer>
        <S.ProfileName>{C.profileTitle}</S.ProfileName>
        <S.ProfileImage {...C.profileImg} />
      </S.ProfileContainer>
    </S.Navbar>
  );
};
