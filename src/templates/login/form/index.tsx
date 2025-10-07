import { FC, FormEvent, useEffect, useState } from 'react';
import { overviewC as C } from './constants';
import * as S from './styles';
import { getPbis, Pbi } from '@/api/pbis';
import { Modal } from '@/components/atoms/modal';
import api from '@/api';
import { useUserContext } from '@/contexts/user';

export const Form: FC = () => {
  const [data, setData] = useState<Pbi[]>([]);
  const { loginHandler, error } = useUserContext();
  const [emptyField, setEmptyField] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const username = formData.get('username')?.toString();
    const password = formData.get('password')?.toString();

    if (!username || !password) {
      setEmptyField(true);
      return;
    }

    setEmptyField(false);
    loginHandler(username, password);
  };

  return (
    <S.Login>
      <S.Box>
        <S.FormContainer>
          <S.FormTitle>Insira seus dados</S.FormTitle>
          <S.Form onSubmit={handleSubmit}>
            <S.ModalFormInput type="text" name="username" id="username" placeholder="Usuário" />
            <S.ModalFormInput type="password" name="password" id="password" placeholder="senha" />
            {error && <S.Error>{error}</S.Error>}
            {emptyField && <S.Error>Preencha os Campos</S.Error>}
            <S.ModalFormSubmit type="submit" value="Entrar" />
          </S.Form>
        </S.FormContainer>
      </S.Box>
    </S.Login>
  );
};
