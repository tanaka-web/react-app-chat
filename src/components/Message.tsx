import * as React from 'react';
import { IMessage } from '../types/message';
import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment/locale/ja';
import { useEffect } from 'react';

interface IProps {
  message: IMessage;
}

export const Message: React.SFC<IProps> = props => {
  useEffect((): void => {
    const element = document.documentElement;
    const bottom = element.scrollHeight - element.clientHeight;
    window.scroll(0, bottom);
  }, []);

  return (
    <Wrapper>
      <span className="name">{props.message.userName}</span>
      <div className="message">
        <p className="text">{props.message.text}</p>
        <Moment className="datetime" fromNow>
          {props.message.datetime}
        </Moment>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  padding: 0.6rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: left;
  font-size: 0.9rem;

  .name {
    width: 25%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    box-sizing: border-box;
    padding-right: 0.4rem;
  }

  .message {
    width: 100%;
  }

  .datetime {
    display: block;
    color: #888;
    font-size: 0.8rem;
    margin-top: 0.6rem;
    text-align: right;
  }
`;
