import styled from 'styled-components';
import { Box as _Box } from '@/components/atoms/box';
import { Box as BoxContainer } from '@/components/atoms/box/styles';

export const ToDo = styled.div`
  width: 100%;
  height: 100%;
`;

export const Box = styled(_Box)`
  height: 100%;

  ${BoxContainer} {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem 0 0;
    height: 100%;

    @media (max-width: 580px) {
      padding-top: 1rem;
    }
  }
`;

export const List = styled.div`
  display: flex;
  width: 40rem;
  gap: 1.6rem;
  flex-direction: column;

  @media (max-width: 580px) {
    height: 15rem;
    overflow: auto;
    padding: 0 1rem 0 2rem;
    margin-right: 1rem;

    &::-webkit-scrollbar {
      background-color: ${({ theme }) => theme.nyanza};
      margin-left: 1rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.bangladeshGreen};
    }
  }
`;

export const ListItem = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  width: 100%;
  border-radius: 0.5rem;
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.bangladeshGreen : theme.white};
  color: ${({ $isSelected, theme }) => ($isSelected ? theme.white : theme.black)};
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.9rem;
  font-weight: 500;
  padding: 2rem 2.5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.blackTransparent};

  @media (max-width: 580px) {
    padding: 1.3rem;
    font-size: 1.25rem;
  }
`;

export const ItemTitle = styled.p``;
