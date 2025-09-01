import styled from 'styled-components';

export const BoxContainer = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  font-size: 2.1rem;
  font-weight: 500;
  margin-left: 1rem;
  color: ${({ theme }) => theme.black};

  @media (max-width: 580px) {
    font-size: 1.6rem;
  }

  span {
    font-size: 4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.black};

    @media (max-width: 580px) {
      font-size: 2.4rem;
    }
  }

  @media (max-width: 580px) {
    width: fit-content;
    margin-left: 0;
  }
`;

export const Box = styled.div`
  padding: 3rem;
  margin-top: 1.5rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 0.77rem 0.1rem ${({ theme }) => theme.blackTransparent};

  @media (max-width: 580px) {
    padding: 2rem 1rem;
    width: 100%;
  }
`;
