import { FC, FormEvent, useEffect, useState } from 'react';
import { overviewC as C } from './constants';
import * as S from './styles';
import { getPbis, Pbi } from '@/api/pbis';
import { Modal } from '@/components/atoms/modal';
import api from '@/api';
import { useUserContext } from '@/contexts/user';

export const ToDo: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { user } = useUserContext();
  const [data, setData] = useState<Pbi[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPbis();
      setData(response);
    };

    fetchData();

    const interval = setInterval(fetchData, 100);
    return () => clearInterval(interval);
  }, []);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const targetDate = formData.get('target-date') as string;
    const description = formData.get('description') as string;
    setIsModalOpen(false);

    const ids = data ? Object.values(data).map((pbi) => pbi.id) : [];
    const keys = Object.keys(data).map((k) => Number(k));
    const nextIndex = keys.length > 0 ? Math.max(...keys) + 1 : 0;
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;

    const newPbi: Pbi = {
      id: maxId + 1,
      targetDate: new Date(targetDate).toISOString(),
      description,
      status: 'pending',
    };

    try {
      await api.put(`/pbis/${nextIndex}.json`, newPbi);
    } catch (error) {
      console.error('Erro ao cadastrar PBI:', error);
    }
  };

  return (
    <S.ToDo>
      <Modal isOpen={isModalOpen}>
        <S.ModalContainer>
          <S.ModalAddItemTitle>Adicionar PBI</S.ModalAddItemTitle>
          <S.ModalForm onSubmit={handleSubmit}>
            <S.ModalInputLabel>Data alvo</S.ModalInputLabel>
            <S.ModalFormInput type="date" name="target-date" id="target-date" />
            <S.ModalInputLabel>Descrição</S.ModalInputLabel>
            <S.ModalFormInput type="text" name="description" id="description" />
            <S.ModalFormSubmit type="submit" value="Cadastrar" />
          </S.ModalForm>
        </S.ModalContainer>
      </Modal>
      <S.Box title={C.title}>
        <S.List>
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
        </S.List>
        <S.AddItemContainer onClick={() => setIsModalOpen(true)}>
          <S.AddItemTitle>{C.addItemTitle}</S.AddItemTitle>
        </S.AddItemContainer>
      </S.Box>
    </S.ToDo>
  );
};
