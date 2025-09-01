import styled from 'styled-components';

export const Navbar = styled.nav`
  background-color: ${({ theme }) => theme.white};
  display: flex;
  width: 100%;
  height: fit-content;
  position: relative;
  justify-content: center;
  padding: 1rem 5rem;
  pointer-events: all;

  @media (max-width: 580px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  gap: 1rem;
`;

export const Logo = styled.img`
  width: 3.6rem;
`;

export const LogoName = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.bangladeshGreen};
`;

export const ProfileContainer = styled.div`
  display: flex;
  margin-left: auto;
  gap: 1.3rem;
  align-items: center;
`;

export const ProfileName = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.bangladeshGreen};
`;

export const ProfileImage = styled.img`
  width: 3.4rem;
  height: 3.4rem;
`;
