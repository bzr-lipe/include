import styled from 'styled-components';

export const Chat = styled.div`
  width: 72.4rem;
  height: 100%;
  position: relative;
  padding: 5rem 3rem 2.5rem;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  border-radius: 2rem;
  box-shadow: 0 0 0.2rem 0.1rem ${({ theme }) => theme.blackTransparent};
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 580px) {
    width: 100%;
    padding: 3rem 1.4rem 2rem;
  }
`;

export const Title = styled.p`
  position: absolute;
  font-size: 2.4rem;
  top: 20rem;
  display: flex;
  justify-content: center;
  font-weight: 300;

  @media (max-width: 580px) {
    font-size: 1.5rem;
    top: 8rem;
    font-weight: 400;
  }

  &::before {
    content: '';
    width: 3.7rem;
    height: 3.7rem;
    top: -8rem;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('./svgs/help-center/chat-icon.svg');

    @media (max-width: 580px) {
      top: -4rem;
      background-repeat: no-repeat;
      width: 2.9rem;
      height: 2.9rem;
    }
  }
`;

export const MessagesContainer = styled.div`
  width: 100%;
`;

export const MessageTitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.blackHalf};

  @media (max-width: 580px) {
    font-size: 1rem;
  }
`;

export const MessageContainer = styled.div<{ $from: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $from }) => ($from === 'me' ? 'flex-end' : 'flex-start')};
  width: fit-content;
  margin: ${({ $from }) => ($from === 'me' ? '0 0 0 auto' : '0 auto 0 0')};

  ${MessageTitle} {
    margin: ${({ $from }) => ($from === 'me' ? '0 1rem 0.5rem 0' : '0 0 0.5rem 7rem')};
  }
`;

export const Message = styled.div<{ $from: string }>`
  padding: 1.6rem;
  position: relative;
  font-size: 1.6rem;
  border-radius: ${({ $from }) =>
    $from === 'me' ? '2.5rem 2.5rem 0 2.5rem' : '2.5rem 2.5rem 2.5rem 0'};
  margin-left: ${({ $from }) => ($from === 'me' ? '0' : '6rem')};
  background-color: ${({ $from, theme }) => ($from === 'me' ? theme.bangladeshGreen : theme.gray)};
  color: ${({ $from, theme }) => ($from === 'me' ? theme.white : theme.black)};

  @media (max-width: 580px) {
    font-size: 1.2rem;
    padding: ${({ $from }) =>
      $from === 'me' ? '1.2rem 2rem 1.2rem 2rem' : '1.2rem 1.5rem 1.2rem 1.7rem'};
  }

  &::before {
    content: '';
    position: absolute;
    left: -5rem;
    top: 1rem;
    width: 4rem;
    height: 4rem;
    background-image: url('./svgs/profile-icon.svg');
    background-repeat: no-repeat;
    background-size: cover;
    display: ${({ $from }) => ($from === 'me' ? 'none' : 'block')};

    @media (max-width: 580px) {
      top: 0.5rem;
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`;

export const MessageStatus = styled.img`
  display: block;

  @media (max-width: 580px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3rem;
  gap: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  outline: none;
  border-width: 0.1rem;
  border-radius: 2rem;

  @media (max-width: 580px) {
    padding: 1.2rem 1.6rem;
    height: fit-content;
    font-size: 1.2rem;
  }

  &:focus {
    border-color: ${({ theme }) => theme.blackHalf};
    box-shadow: 0 0 0.8rem 0.1rem ${({ theme }) => theme.blackTransparent};
  }
`;

export const SendButton = styled.button`
  width: 4.3rem;
  height: 4.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bangladeshGreen};
  border-radius: 50%;
  flex-shrink: 0;

  @media (max-width: 580px) {
    width: 3.7rem;
    height: 3.7rem;
  }
`;

export const SendIcon = styled.img`
  @media (max-width: 580px) {
    width: 1.7rem;
    height: auto;
  }
`;
