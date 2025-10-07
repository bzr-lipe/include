import styled from 'styled-components';
import { Box as _Box } from '@/components/atoms/box';
import { Box as BoxContainer } from '@/components/atoms/box/styles';

export const Login = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled(_Box)`
  height: fit-content;
  width: fit-content;

  ${BoxContainer} {
    display: flex;
    width: fit-content;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-between;
    padding: 4rem 6rem;
    height: 100%;

    @media (max-width: 580px) {
      padding-top: 1rem;
    }
  }
`;

export const StatusIcon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
`;

export const ItemTitle = styled.p``;

export const FormContainer = styled.div`
  width: fit-content;
`;

export const FormTitle = styled.p`
  font-size: 2.1rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.black};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ModalFormInput = styled.input`
  margin-bottom: 1rem;

  &[type='text'],
  &[type='password'] {
    width: 25rem;
    font-size: 1.5rem;
    padding: 1rem 1rem;

    &::placeholder {
      text-transform: uppercase;
    }
  }
`;

export const Error = styled.p`
  border-radius: 0.5rem;
  position: absolute;
  bottom: 4.1rem;
  font-size: 1.3rem !important;
  text-transform: uppercase;
  color: ${({ theme }) => theme.bloodOrange};
`;

export const ModalFormSubmit = styled.input`
  padding: 1rem 2rem !important;
  margin-top: 1.7rem;
  border-radius: 0.5rem;
  font-size: 1.3rem !important;
  text-transform: uppercase;
  width: 100%;
  background-color: ${({ theme }) => theme.bangladeshGreen} !important;
  color: ${({ theme }) => theme.white} !important;
`;
