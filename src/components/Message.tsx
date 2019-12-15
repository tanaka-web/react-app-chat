import * as React from "react";
import {IMessage} from '../types/message';
import styled from "styled-components";
import Moment from "react-moment";
import 'moment/locale/ja';

interface IProps {
  key: number;
  message: IMessage;
}

export default class Message extends React.Component<IProps, {}> {
  render() {
    return (
      <Wrapper>
        <span className="name">{this.props.message.userName}</span>
        <div className="message">
          <p className="text">{this.props.message.text}</p>
          <Moment className="datetime" fromNow>{this.props.message.datetime}</Moment>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.li` 
  padding: .6rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: left;
  font-size: .9rem;
  
  .name {
    width: 20%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    box-sizing: border-box;
    padding-right: .4rem;
  }
  
  .message {
    width: 100%;
  }
  
  .datetime {
    display: block;
    color: #888;
    font-size: .8rem;
    margin-top: .6rem;
    text-align: right;
  }
`;

