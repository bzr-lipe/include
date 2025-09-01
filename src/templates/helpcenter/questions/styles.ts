import styled from 'styled-components';

export const Questions = styled.div`
  @media (max-width: 580px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Accordion = styled.div`
  width: 64.7rem;

  @media (max-width: 580px) {
    width: 100%;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 580px) {
    gap: 2rem;
  }
`;

export const Item = styled.div`
  border-radius: 0.8rem;
  overflow: hidden;
`;

export const ItemTitle = styled.div`
  font-size: 2rem;
  transition: color 0.3s ease;
  font-weight: 500;

  @media (max-width: 580px) {
    font-size: 1.4rem;
  }
`;

export const ToggleBtn = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  transition: transform 0.3s ease;
  position: relative;

  @media (max-width: 580px) {
    width: 1.3rem;
    height: 1.3rem;
  }

  &::before {
    content: '';
    transform: rotate(45deg);
    width: 1.2rem;
    transition: border-color 0.3s ease;
    height: 1.2rem;
    position: absolute;
    border: solid ${({ theme }) => theme.bangladeshGreen};
    border-width: 0 0.2rem 0.2rem 0;

    @media (max-width: 580px) {
      width: 0.9rem;
      height: 0.9rem;
    }
  }
`;

export const ItemHeader = styled.div<{ $isActive: boolean }>`
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.bangladeshGreen : theme.white)};
  display: flex;
  cursor: pointer;
  align-items: center;
  transition: background-color 0.3s ease;
  justify-content: space-between;
  padding: 2rem 2rem 2rem 3rem;

  @media (max-width: 580px) {
    padding: 1.7rem 2rem 1.7rem 2rem;
  }

  ${ItemTitle} {
    color: ${({ $isActive, theme }) => ($isActive ? theme.white : theme.bangladeshGreen)};
  }

  ${ToggleBtn} {
    transform: rotate(${({ $isActive }) => ($isActive ? '180deg' : '0')});

    &::before {
      border-color: ${({ $isActive, theme }) => ($isActive ? theme.white : theme.bangladeshGreen)};
    }
  }
`;

export const ItemContentContainer = styled.div<{ $isActive: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isActive }) => ($isActive ? '1fr' : '0fr')};
  box-sizing: border-box;
  transition:
    grid-template-rows 0.3s ease,
    padding 0.3s ease;
  background-color: ${({ theme }) => theme.white};
`;

export const ItemContent = styled.div`
  overflow: hidden;
`;

export const ItemText = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 1.6rem;
  padding: 2rem 3rem;
  font-weight: 400;

  @media (max-width: 580px) {
    padding: 1.5rem 2rem 2rem;
    font-size: 1.3rem;
  }
`;
