'use client';
import { FC, useState } from 'react';
import { questionsC as C } from './constants';
import * as S from './styles';

export const Questions: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <S.Questions>
      <S.Accordion>
        <S.Items>
          {C.questions.map((item, index) => (
            <S.Item key={item.key}>
              <S.ItemHeader
                $isActive={index === activeIndex}
                onClick={() => {
                  setActiveIndex(activeIndex === index ? null : index);
                }}
              >
                <S.ItemTitle>{item.title}</S.ItemTitle>
                <S.ToggleBtn />
              </S.ItemHeader>
              <S.ItemContentContainer $isActive={index === activeIndex}>
                <S.ItemContent>
                  <S.ItemText>{item.content}</S.ItemText>
                </S.ItemContent>
              </S.ItemContentContainer>
            </S.Item>
          ))}
        </S.Items>
      </S.Accordion>
    </S.Questions>
  );
};
