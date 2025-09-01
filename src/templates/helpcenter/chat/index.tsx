'use client';
import { FC } from 'react';
import { chatC as C } from './constants';
import * as S from './styles';

export const Chat: FC = () => {
  return (
    <S.Chat>
      <S.Title>{C.title.text}</S.Title>
      <S.MessagesContainer>
        {C.messages.map((item) => (
          <S.MessageContainer $from={item.from} key={item.key}>
            <S.MessageTitle>{item.title}</S.MessageTitle>
            <S.Message $from={item.from}>{item.message}</S.Message>
            {item.statusIcon && <S.MessageStatus src={item.statusIcon} />}
          </S.MessageContainer>
        ))}
      </S.MessagesContainer>
      <S.InputsContainer>
        <S.Input placeholder={C.input.placeholder} type="text" />
        <S.SendButton>
          <S.SendIcon src={C.sendIcon} />
        </S.SendButton>
      </S.InputsContainer>
    </S.Chat>
  );
};
