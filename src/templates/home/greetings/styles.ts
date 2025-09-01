import styled from 'styled-components';

export const Greetings = styled.div`
  @media (max-width: 580px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Title = styled.p`
  font-size: 2.4rem;
  font-weight: 300;
  color: ${({ theme }) => theme.blackHalf};

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
  }
`;

export const Profile = styled.img`
  height: 5.5rem;
  width: 5.5rem;
  display: none;

  @media (max-width: 580px) {
    display: block;
  }
`;
