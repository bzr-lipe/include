'use client';
import * as S from './styles';
import { loginC as C } from './constants';
import { Form } from './form';

export const LoginTemplate = () => {
  return (
    <>
      <S.Helpcenter>
        <S.TitleContainer>
          <S.Logo {...C.logo} />
          <S.Title>{C.title}</S.Title>
        </S.TitleContainer>
        <S.Content>
          <Form />
        </S.Content>
      </S.Helpcenter>
    </>
  );
};
