import { FC } from 'react';
import * as S from './styles';
import UserListProps from './props';

export const List: FC<UserListProps> = ({ users, selectedUser, setSelectedIndex }) => {
  return (
    <S.ToDo>
      <S.List>
        {users.map((item, index) => {
          if (item.position === 'Administrador') return;

          return (
            <S.ListItem
              key={index}
              onClick={() => setSelectedIndex(index)}
              $isSelected={selectedUser === index}
            >
              <S.ItemTitle>{item.name}</S.ItemTitle>
            </S.ListItem>
          );
        })}
      </S.List>
    </S.ToDo>
  );
};
