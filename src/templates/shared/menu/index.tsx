'use client';
import { FC, useState } from 'react';
import { menuC as C } from './constants';
import * as S from './styles';

export const Menu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <S.Menu $isOpen={isMenuOpen}>
      <S.MenuItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <S.MenuItemIconContainer>
          <S.ToggleBtn>
            <S.Hamburger $isActive={isMenuOpen} />
          </S.ToggleBtn>
        </S.MenuItemIconContainer>
        <S.MenuItemTitle>{C.closeTitle}</S.MenuItemTitle>
      </S.MenuItem>
      <S.MenuItems>
        {C.menuItems.map((item) => (
          <S.MenuItem key={item.key}>
            <S.MenuItemIconContainer>
              <S.MenuItemIcon>{item.icon}</S.MenuItemIcon>
            </S.MenuItemIconContainer>
            <S.MenuItemTitle>{item.title}</S.MenuItemTitle>
          </S.MenuItem>
        ))}
      </S.MenuItems>
      <S.MenuItem>
        <S.MenuItemIconContainer>
          <S.MenuItemIcon>{C.logoutIcon.icon}</S.MenuItemIcon>
        </S.MenuItemIconContainer>
        <S.MenuItemTitle>{C.logoutIcon.title}</S.MenuItemTitle>
      </S.MenuItem>
    </S.Menu>
  );
};
