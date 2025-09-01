import { Box as _Box } from '@/components/atoms/box';
import { Box as BoxContainer } from '@/components/atoms/box/styles';
import styled from 'styled-components';

export const WeeklyView = styled.div`
  width: 100%;

  @media (max-width: 580px) {
    width: 100%;
  }
`;

export const Box = styled(_Box)`
  ${BoxContainer} {
    @media (max-width: 580px) {
      padding: 2rem 1rem;
    }
  }
`;

export const WeeklyViewContainer = styled.div``;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const InfoValue = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 4.8rem;
  font-weight: 600;

  @media (max-width: 580px) {
    font-size: 4rem;
  }
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  border-right: 0.1rem solid ${({ theme }) => theme.blackHalfTransparent};

  &:first-child {
    ${InfoValue} {
      color: ${({ theme }) => theme.denim};
    }
  }

  &:nth-child(2) {
    ${InfoValue} {
      color: ${({ theme }) => theme.bloodOrange};
    }
  }

  &:last-child {
    border-width: 0;

    ${InfoValue} {
      color: ${({ theme }) => theme.green};
    }
  }

  @media (max-width: 580px) {
    padding: 1rem 0;
    justify-content: center;
    width: 100%;
  }
`;

export const Icon = styled.img`
  width: 5rem;
  opacity: 0.8;
  height: 5rem;
  margin-right: 1.5rem;

  @media (max-width: 580px) {
    display: none;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

export const InfoTitle = styled.p`
  color: ${({ theme }) => theme.blackHalf};
  font-size: 1.4rem;

  @media (max-width: 580px) {
    color: ${({ theme }) => theme.davysGray};
    font-size: 1.2rem;
  }
`;
