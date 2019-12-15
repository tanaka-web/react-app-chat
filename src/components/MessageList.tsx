import * as React from 'react';
import { IMessage } from '../types/message';
import { Message } from './Message';
import styled from 'styled-components';

interface IProps {
  messages: IMessage[];
}

export const MessageList: React.SFC<IProps> = props => {
  return (
    <Wrapper>
      {props.messages.map((message: IMessage, index: number) => {
        return <Message key={index} message={message} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 91px 0 59.38px;
`;
