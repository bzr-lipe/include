import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  gap: 2rem;
  z-index: 4;
  pointer-events: none;

  @media (max-width: 580px) {
    height: fit-content;
    pointer-events: all;
  }
`;
