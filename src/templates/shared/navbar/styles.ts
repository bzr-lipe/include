import styled from 'styled-components';

export const Navbar = styled.nav`
  background-color: ${({ theme }) => theme.white};
  display: flex;
  width: 100%;
  height: 7.7rem;
  position: relative;
  justify-content: center;
  padding: 1.5rem 5rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  gap: 2rem;
`;

export const Logo = styled.img`
  width: 4.8rem;
`;

export const LogoName = styled.p`
  font-size: 3.2rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.bangladeshGreen};
`;

export const ProfileContainer = styled.div`
  display: flex;
  margin-left: auto;
  gap: 2rem;
  align-items: center;
`;

export const ProfileName = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.bangladeshGreen};
`;

export const ProfileImage = styled.img`
  width: 4.2rem;
  height: 4.2rem;
`;
