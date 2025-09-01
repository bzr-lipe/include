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
  padding: 0 2rem;
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

export const AddItemContainer = styled.div`
  width: 100%;
  margin-top: auto;
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  position: relative;
  border-top: 0.1rem solid ${({ theme }) => theme.blackTransparent};

  @media (max-width: 580px) {
    padding: 1.3rem 3rem;
    margin-top: 3rem;
  }

  &::before {
    content: '+';
    position: absolute;
    font-size: 2.5rem;
    right: 2.5rem;

    @media (max-width: 580px) {
      font-size: 1.8rem;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.bangladeshGreen};
    color: ${({ theme }) => theme.white};
  }
`;

export const AddItemTitle = styled.p`
  font-size: 1.5rem;

  @media (max-width: 580px) {
    font-size: 1.25rem;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 1.7rem 1.5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.blackTransparent};

  @media (max-width: 580px) {
    padding: 1.3rem;
    font-size: 1.25rem;
  }
`;

export const ItemDate = styled.p<{ $isDelayed?: boolean; $isCompleted?: boolean }>`
  width: 12rem;
  display: flex;
  justify-content: space-between;
  color: ${({ $isCompleted, $isDelayed, theme }) =>
    $isCompleted ? theme.green : $isDelayed ? 'red' : theme.black};

  @media (max-width: 580px) {
    width: 11rem;
  }
`;

export const StatusIcon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
`;

export const ItemTitle = styled.p``;

export const ModalContainer = styled.div``;

export const ModalAddItemTitle = styled.p`
  font-size: 2.1rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.black};
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalInputLabel = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.black};
`;

export const ModalFormInput = styled.input`
  margin-bottom: 1rem;

  &[type='text'] {
    width: 20rem;
    height: 6rem;
  }
`;

export const ModalFormSubmit = styled.input`
  padding: 1rem 2rem !important;
  border-radius: 0.5rem;
  font-size: 1.3rem !important;
  text-transform: uppercase;
  width: fit-content;
  background-color: ${({ theme }) => theme.bangladeshGreen} !important;
  color: ${({ theme }) => theme.white} !important;
`;
