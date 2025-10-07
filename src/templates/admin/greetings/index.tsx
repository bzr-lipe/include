'use client';
import { FC } from 'react';
import { greetingsC as C } from './constants';
import * as S from './styles';
import { useUserContext } from '@/contexts/user';

export const Greetings: FC = () => {
  const { user } = useUserContext();

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
        <span>{user.name}</span>
      </S.Title>
      <S.Profile {...C.profileImg} />
    </S.Greetings>
  );
};
