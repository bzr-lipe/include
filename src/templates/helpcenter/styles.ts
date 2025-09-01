import styled from 'styled-components';

export const Helpcenter = styled.section`
  padding: 15rem 23rem;
  height: 100vh;

  @media (max-width: 580px) {
    padding: 7rem 3rem;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.black};
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 5rem;
  font-weight: 500;

  @media (max-width: 580px) {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 66.6rem;
  justify-content: space-between;

  @media (max-width: 580px) {
    flex-direction: column;
    gap: 4rem;
  }
`;
