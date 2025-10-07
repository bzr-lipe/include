import { FC } from 'react';
import { weeklyViewC as C } from './constants';
import * as S from './styles';
import { useUserContext } from '@/contexts/user';

export const WeeklyView: FC = () => {
  const { user } = useUserContext();

  function getCount(status: string) {
    if (!user.pbis) return;
    return user.pbis.filter((item) => item.status === status).length;
  }

  return (
    <S.WeeklyView>
      <S.Box title={C.title}>
        <S.WeeklyViewContainer>
          <S.Infos>
            {C.list.map((item, index) => (
              <S.Info key={index}>
                <S.Icon src={item.icon} />
                <S.InfoContainer>
                  <S.InfoTitle>{item.title}</S.InfoTitle>
                  <S.InfoValue>{getCount(item.status)}</S.InfoValue>
                </S.InfoContainer>
              </S.Info>
            ))}
          </S.Infos>
        </S.WeeklyViewContainer>
      </S.Box>
    </S.WeeklyView>
  );
};
