'use client';
import { FC, useState } from 'react';
import { menuC as C } from './constants';
import * as S from './styles';
import { usePathname } from 'next/navigation';
import { useUserContext } from '@/contexts/user';

export const Menu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { logoutHandler } = useUserContext();
  const pathname = usePathname();

  return (
    <S.Menu $isOpen={isMenuOpen}>
      <S.CloseItem onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <S.MenuItemIconContainer>
          <S.ToggleBtn>
            <S.Hamburger $isActive={isMenuOpen} />
          </S.ToggleBtn>
        </S.MenuItemIconContainer>
        <S.MenuItemTitle>{C.closeTitle}</S.MenuItemTitle>
      </S.CloseItem>
      <S.MenuItems>
        {C.menuItems.map((item) => (
          <S.MenuItem
            key={item.key}
            $isCurrent={pathname === item.href}
            href={item.href}
            scroll={false}
          >
            <S.MenuItemIconContainer>
              <S.MenuItemIcon>{item.icon}</S.MenuItemIcon>
            </S.MenuItemIconContainer>
            <S.MenuItemTitle>{item.title}</S.MenuItemTitle>
          </S.MenuItem>
        ))}
      </S.MenuItems>
      <S.LogoutItem onClick={logoutHandler}>
        <S.MenuItemIconContainer>
          <S.MenuItemIcon>{C.logoutIcon.icon}</S.MenuItemIcon>
        </S.MenuItemIconContainer>
        <S.MenuItemTitle>{C.logoutIcon.title}</S.MenuItemTitle>
      </S.LogoutItem>
    </S.Menu>
  );
};
