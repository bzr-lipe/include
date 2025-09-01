import styled from 'styled-components';
import { Box as _Box } from '../box';

export const Modal = styled.div<{ $isOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.blackHalf};
  z-index: 10;
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const Box = styled(_Box)`
  width: fit-content;
`;
