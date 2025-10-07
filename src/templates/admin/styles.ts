import styled from 'styled-components';

export const Home = styled.section`
  padding: 15rem 20rem;
  height: 100vh;

  @media (max-width: 580px) {
    padding: 4rem 3rem;
  }
`;

export const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  gap: 5rem;

  @media (max-width: 580px) {
    flex-direction: column;
    margin-top: 2rem;
    gap: 2rem;
  }
`;

export const Column = styled.div`
  width: fit-content;

  &:last-child {
    width: 100%;

    @media (max-width: 580px) {
      width: 100%;
    }
  }
`;
