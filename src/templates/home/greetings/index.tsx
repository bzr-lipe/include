'use client';
import { FC } from 'react';
import { greetingsC as C } from './constants';
import * as S from './styles';

export const Greetings: FC = () => {
  const userName = 'Felipe';

  const getHour = (): string => {
    const hours = new Date().getHours();

    if (hours >= 5 && hours <= 12) {
      return C.goodMorning;
    }

    if (hours > 12 && hours <= 18) {
      return C.goodAfternoon;
    }

    return C.goodEvening;
  };

  return (
    <S.Greetings>
      <S.Title>
        {getHour()}, <br />
        <span>{userName}</span>
      </S.Title>
      <S.Profile {...C.profileImg} />
    </S.Greetings>
  );
};
