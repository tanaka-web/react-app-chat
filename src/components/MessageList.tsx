import * as React from "react";
import {IMessage} from '../types/message';
import Message from "./Message";
import styled from "styled-components";

interface IProps {
  messages: IMessage[];
}

export default class MessageList extends React.Component<IProps, {}> {
  render() {
    return (
      <Wrapper>
        {this.props.messages.map((message: IMessage, index: number) => {
          return <Message key={index} message={message}/>
        })}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding: 91px 0 59.38px;
`

