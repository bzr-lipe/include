import styled from 'styled-components';

export const MenuItemIconContainer = styled.div`
  width: 8.4rem;
  height: fit-content;
  display: flex;
  transition: width 0.2s ease-in-out;
  justify-content: center;
  align-items: center;
`;

export const MenuItemTitle = styled.div`
  position: absolute;
  left: 6rem;
  font-size: 1.4rem;
  font-weight: 500;
  transition: opacity 0.3s ease;
  text-transform: uppercase;
  color: ${({ theme }) => theme.bangladeshGreen};
`;

export const Menu = styled.div<{ $isOpen: boolean }>`
  background-color: ${({ theme }) => theme.white};
  height: 100vh;
  width: ${({ $isOpen }) => ($isOpen ? '20.7rem' : '8.4rem')};
  transition: width 0.2s ease;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0 4rem;
  overflow: hidden;

  ${MenuItemIconContainer} {
    width: ${({ $isOpen }) => ($isOpen ? '6rem' : '8.4rem')};
  }

  ${MenuItemTitle} {
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  }
`;

export const ToggleBtn = styled.button`
  width: 3.5rem;
  height: 2.2rem;
`;

export const Hamburger = styled.div<{ $isActive: boolean }>`
  position: relative;
  width: 100%;
  height: 0.2rem;
  transition: background-color 0.1s ease;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.transparent : theme.bangladeshGreen};

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 0.2rem;
    transition: transform 0.2s ease;
    background-color: ${({ theme }) => theme.bangladeshGreen};
  }

  &::before {
    transform: ${({ $isActive }) =>
      $isActive ? 'translateY(0) rotate(-45deg)' : 'translateY(-1rem)'};
  }

  &::after {
    transform: ${({ $isActive }) =>
      $isActive ? 'translateY(0) rotate(45deg)' : 'translateY(1rem)'};
  }
`;

export const MenuItems = styled.div`
  width: 100%;
`;

export const MenuItem = styled.div`
  height: 6.5rem;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

export const MenuItemIcon = styled.div``;
