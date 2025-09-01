import styled from 'styled-components';

export const Overview = styled.div`
  width: fit-content;
  margin-top: 4rem;

  @media (max-width: 580px) {
    margin-top: 2rem;
    width: 100%;
  }
`;

export const GraphsContainer = styled.div`
  padding-right: 1.5rem;

  @media (max-width: 580px) {
    padding-right: 0rem;
    padding-top: 2rem;
  }
`;

export const GhaphsList = styled.div`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 580px) {
    gap: 1.8rem;
    width: 100%;
    justify-content: center;
  }
`;

export const MonthContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CandleContainer = styled.div<{ $isCurrent?: boolean }>`
  width: ${({ $isCurrent }) => ($isCurrent ? '3.6rem' : '3.1rem')};
  display: flex;
  position: relative;
  align-items: flex-end;
  height: 22rem;

  @media (max-width: 580px) {
    height: 10rem;
    width: ${({ $isCurrent }) => ($isCurrent ? '2.3rem' : '2rem')};
  }
`;

export const Candle = styled.div<{ $value: number; $isCurrent?: boolean }>`
  width: 100%;
  border-radius: 0.9rem;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${({ $isCurrent, theme }) => ($isCurrent ? theme.green : theme.aeroBlue)};
  height: ${({ $value }) => `${$value * 10}%`};
  box-shadow: ${({ $isCurrent, theme }) =>
    $isCurrent ? `0 0 0.2rem 0.1rem ${theme.blackHalfTransparent}` : 'none'};

  @media (max-width: 580px) {
    border-radius: 0.4rem;
  }
`;

export const PercentageBallon = styled.div`
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  position: absolute;
  font-size: 1.4rem;
  border-radius: 0.8rem;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  top: -5rem;
  padding: 1rem;

  @media (max-width: 580px) {
    padding: 0.8rem;
    top: -4.5rem;
    font-size: 1.2rem;
  }

  &::before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;
    transform: rotate(45deg);
    background-color: ${({ theme }) => theme.black};
    position: absolute;
    bottom: -0.4rem;
  }
`;

export const ChartIcon = styled.img`
  width: 1.5rem;

  @media (max-width: 580px) {
    width: 1.3rem;
  }
`;

export const MonthTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 1rem;
  color: ${({ theme }) => theme.darkLiver};

  @media (max-width: 580px) {
    font-size: 1rem;
  }
`;
