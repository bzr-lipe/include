import { FC, useEffect, useState } from 'react';
import { weeklyViewC as C } from './constants';
import * as S from './styles';
import { getPbis, Pbi } from '@/api/pbis';

export const WeeklyView: FC = () => {
  const [data, setData] = useState<Pbi[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPbis();
      setData(response);
    };

    fetchData();

    const interval = setInterval(fetchData, 100); // a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  function getCount(status: string) {
    return data.filter((item) => item.status === status).length;
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
