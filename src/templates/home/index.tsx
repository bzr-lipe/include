'use client';
import { Overlay } from '@/components/molecules/overlay';
import * as S from './styles';
import { Greetings } from './greetings';
import { Overview } from './overview';
import { WeeklyView } from './weekly-view';
import { ToDo } from './list';

export const HomeTemplate = () => {
  return (
    <>
      <Overlay />
      <S.Home>
        <Greetings />
        <S.Columns>
          <S.Column>
            <WeeklyView />
            <Overview />
          </S.Column>
          <S.Column>
            <ToDo />
          </S.Column>
        </S.Columns>
      </S.Home>
    </>
  );
};
