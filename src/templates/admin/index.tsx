'use client';
import { Overlay } from '@/components/molecules/overlay';
import * as S from './styles';
import { Greetings } from './greetings';
import { Details } from './details';
import { List } from './list';
import { useEffect, useState } from 'react';
import { getUsers, UserData } from '@/api/users';

export const AdminTemplate = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsers();
      setUsers(response);
    };

    fetchData();
  }, []);

  return (
    <>
      <Overlay />
      <S.Home>
        <Greetings />
        <S.Columns>
          <S.Column>
            <List users={users} setSelectedIndex={setSelectedIndex} selectedUser={selectedIndex} />
          </S.Column>
          <S.Column>
            <Details user={selectedIndex ? users[selectedIndex] : undefined} />
          </S.Column>
        </S.Columns>
      </S.Home>
    </>
  );
};
