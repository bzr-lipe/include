import styled from 'styled-components';

export const Details = styled.div`
  width: 100%;
  height: 60vh;
  border-radius: 5rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.white};

  @media (max-width: 580px) {
    width: 100%;
  }
`;

export const Empty = styled.div`
  text-align: center;
  font-size: 5rem;
  height: 100%;
  display: flex;
  justify-content: center;
  opacity: 0.4;
  align-items: center;
  font-weight: 500;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem 9rem;
  background-color: ${({ theme }) => theme.white};

  @media (max-width: 580px) {
    width: 100%;
  }
`;

export const PersonalInfos = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 5rem;
`;

export const PersonalInfo = styled.div``;

export const PersonalInfoTitle = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const PersonalInfoValue = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 2rem;
  font-weight: 400;
`;

export const Tickets = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 5rem;
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

export const Infos = styled.div`
  display: flex;
  margin-top: auto;
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
