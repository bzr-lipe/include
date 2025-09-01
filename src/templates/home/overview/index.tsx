import { FC } from 'react';
import { overviewC as C } from './constants';
import * as S from './styles';
import { Box } from '@/components/atoms/box';

export const Overview: FC = () => {
  const getDifferencePercentage = (n1: number, n2: number): string => {
    if (n1 === 0 || n2 === 0) return '0';

    const difference = ((n1 - n2) / n2) * 100;

    return difference.toFixed();
  };

  return (
    <S.Overview>
      <Box title={C.title}>
        <S.GraphsContainer>
          <S.GhaphsList>
            {C.months.map((item, index) => (
              <S.MonthContainer key={index}>
                <S.CandleContainer $isCurrent={item.current}>
                  <S.Candle $value={item.value} $isCurrent={item.current}>
                    {item.current && (
                      <S.PercentageBallon>
                        <S.ChartIcon
                          src={
                            Number(
                              getDifferencePercentage(item.value, C.months[index - 1].value)
                            ) >= 0
                              ? C.icons.chartUp
                              : C.icons.chartDown
                          }
                        />
                        {`${getDifferencePercentage(item.value, C.months[index - 1].value)}%`}
                      </S.PercentageBallon>
                    )}
                  </S.Candle>
                </S.CandleContainer>
                <S.MonthTitle>{item.month}</S.MonthTitle>
              </S.MonthContainer>
            ))}
          </S.GhaphsList>
        </S.GraphsContainer>
      </Box>
    </S.Overview>
  );
};
