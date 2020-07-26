import React from 'react';
import styled from 'styled-components';
import { IMessage } from '../types/message';
import { Message } from './Message';

interface IProps {
  messages: IMessage[];
}

export const MessageList = ({ messages }: IProps) => {
  return (
    <Wrapper>
      {messages.map((message, idx) => (
        <Message key={idx} message={message} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 91px 0 59.38px;
`;
