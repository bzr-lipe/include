import Link from 'next/link';
import styled, { css } from 'styled-components';

export const MenuItemIconContainer = styled.div`
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
  transition:
    opacity 0.3s ease,
    color 0.3s ease;
  text-transform: uppercase;
  color: ${({ theme }) => theme.bangladeshGreen};

  @media (max-width: 580px) {
    position: static;
    text-transform: none;
    font-size: 1.2;
  }
`;

export const Menu = styled.div<{ $isOpen: boolean }>`
  background-color: ${({ theme }) => theme.white};
  flex-shrink: 0;
  height: 100vh;
  width: ${({ $isOpen }) => ($isOpen ? '20.7rem' : '8.4rem')};
  transition: width 0.3s ease;
  display: flex;
  align-items: center;
  pointer-events: all;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0 4rem;
  overflow: hidden;
  z-index: 4;

  @media (max-width: 580px) {
    box-shadow: 0 3rem 6rem 1rem ${({ theme }) => theme.blackHalfTransparent};
    width: 100%;
    padding: 1.4rem 3.2rem;
    height: fit-content;
    position: fixed;
    bottom: 0;
  }

  ${MenuItemIconContainer} {
    width: ${({ $isOpen }) => ($isOpen ? '6rem' : '8.4rem')};

    @media (max-width: 580px) {
      width: 2.5rem;
    }
  }

  ${MenuItemTitle} {
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};

    @media (max-width: 580px) {
      opacity: 1;
    }
  }
`;

export const ToggleBtn = styled.div`
  width: 3rem;
  height: 0;
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
      $isActive ? 'translateY(0) rotate(-45deg)' : 'translateY(-0.85rem)'};
  }

  &::after {
    transform: ${({ $isActive }) =>
      $isActive ? 'translateY(0) rotate(45deg)' : 'translateY(0.85rem)'};
  }
`;

export const MenuItems = styled.div`
  width: 100%;

  @media (max-width: 580px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MenuItemIcon = styled.div`
  width: 3rem;

  @media (max-width: 580px) {
    width: 6.5rem;
  }

  svg {
    width: 100%;

    @media (max-width: 580px) {
      height: 100%;
    }
  }

  path {
    transition: fill 0.3s ease;
  }
`;

export const MenuItemStyle = css<{ $isCurrent?: boolean }>`
  height: 6.5rem;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  transition: background-color 0.3s ease;
  cursor: ${({ $isCurrent }) => ($isCurrent ? 'default' : 'pointer')};
  align-items: center;

  @media (max-width: 580px) {
    width: fit-content;
    flex-shrink: 1;
    height: fit-content;
    border-radius: 1.2rem;
    height: 5rem;
    gap: 1.2rem;
    padding: ${({ $isCurrent }) => ($isCurrent ? '0 1.6rem 0 1.4rem' : '0 1rem')};
    background-color: ${({ $isCurrent, theme }) => ($isCurrent ? theme.nyanza : 'none')};
  }

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.bangladeshGreen};
    position: absolute;
    right: 1rem;
    opacity: ${({ $isCurrent }) => ($isCurrent ? 1 : 0)};

    @media (max-width: 580px) {
      display: none;
    }
  }

  ${MenuItemTitle} {
    @media (max-width: 580px) {
      display: ${({ $isCurrent }) => ($isCurrent ? 'block' : 'none')};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.bangladeshGreen};

    @media (max-width: 580px) {
      background-color: ${({ $isCurrent, theme }) => ($isCurrent ? theme.nyanza : 'inherit')};
    }

    &::before {
      background-color: ${({ theme }) => theme.white};
    }

    ${MenuItemTitle} {
      color: ${({ theme }) => theme.white};

      @media (max-width: 580px) {
        color: ${({ theme }) => theme.bangladeshGreen};
      }
    }

    ${MenuItemIcon} {
      path {
        fill: ${({ theme }) => theme.white};

        @media (max-width: 580px) {
          fill: ${({ theme }) => theme.bangladeshGreen};
        }
      }
    }
  }
`;

export const MenuItem = styled(Link)<{ $isCurrent?: boolean }>`
  ${MenuItemStyle}
`;

export const CloseItem = styled.button<{ $isCurrent?: boolean }>`
  ${MenuItemStyle}

  @media (max-width: 580px) {
    display: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.white};

    ${MenuItemTitle} {
      color: ${({ theme }) => theme.bangladeshGreen};
    }

    ${MenuItemIcon} {
      height: 6.5rem;
    }
  }
`;

export const LogoutItem = styled.button<{ $isCurrent?: boolean }>`
  ${MenuItemStyle}

  @media (max-width: 580px) {
    display: none;
  }
`;
