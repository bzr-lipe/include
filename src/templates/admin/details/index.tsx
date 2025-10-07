import { FC } from 'react';
import { weeklyViewC as C } from './constants';
import * as S from './styles';
import { User } from '@/api/users';

type DetailsProps = {
  user?: User;
};

export const Details: FC<DetailsProps> = ({ user }) => {
  const getDate = (ISODate: string): string => {
    const date = new Date(ISODate);
    const formattedDate = date
      .toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
      .replace(/de /g, '')
      .replace(/\b\w/g, (c) => c.toUpperCase());

    return formattedDate;
  };

  const getIsDelayed = (date: string): boolean => {
    const targetDate = new Date(date);
    const currentDate = new Date();

    return targetDate < currentDate;
  };

  function getCount(status: string) {
    if (!user || !user.pbis) return;
    return user.pbis.filter((item) => item.status === status).length;
  }

  return (
    <S.Details>
      <S.DetailsContainer>
        {user ? (
          <>
            <S.PersonalInfos>
              <S.PersonalInfo>
                <S.PersonalInfoTitle>Nome</S.PersonalInfoTitle>
                <S.PersonalInfoValue>{user.name}</S.PersonalInfoValue>
              </S.PersonalInfo>
              <S.PersonalInfo>
                <S.PersonalInfoTitle>Cargo</S.PersonalInfoTitle>
                <S.PersonalInfoValue>{user.position}</S.PersonalInfoValue>
              </S.PersonalInfo>
            </S.PersonalInfos>
            <S.Tickets>
              {user.pbis &&
                user.pbis.map((item, index) => (
                  <S.ListItem key={index}>
                    <S.ItemDate
                      $isCompleted={item.status === 'completed'}
                      $isDelayed={item.status !== 'completed' && getIsDelayed(item.targetDate)}
                    >
                      {getDate(item.targetDate)}
                      {item.status === 'completed' && (
                        <S.StatusIcon src={C.completedIcon} aria-hidden />
                      )}
                      {item.status !== 'completed' && getIsDelayed(item.targetDate) && (
                        <S.StatusIcon src={C.warningIcon} aria-hidden />
                      )}
                    </S.ItemDate>
                    <S.ItemTitle>{C.itemTitle(item.id)}</S.ItemTitle>
                  </S.ListItem>
                ))}
            </S.Tickets>
            <S.Infos>
              {C.list.map((item, index) => (
                <S.Info key={index}>
                  <S.Icon src={item.icon} />
                  <S.InfoContainer>
                    <S.InfoTitle>{item.title}</S.InfoTitle>
                    <S.InfoValue>{getCount(item.status)}</S.InfoValue>
                  </S.InfoContainer>
                </S.Info>
              ))}
            </S.Infos>
          </>
        ) : (
          <S.Empty>Selecione um colaborador</S.Empty>
        )}
      </S.DetailsContainer>
    </S.Details>
  );
};
