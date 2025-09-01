'use client';
import { Overlay } from '@/components/molecules/overlay';
import * as S from './styles';
import { helpcenterC as C } from './constants';
import { Questions } from './questions';
import { Chat } from './chat';

export const HelpCenterTemplate = () => {
  return (
    <>
      <Overlay />
      <S.Helpcenter>
        <S.Title>{C.title}</S.Title>
        <S.Content>
          <Questions />
          <Chat />
        </S.Content>
      </S.Helpcenter>
    </>
  );
};
