import * as React from "react";
import {IMessage} from '../types/message';
import Message from "./Message";

interface IProps {
  messages: IMessage[];
}

export default class MessageList extends React.Component<IProps, {}> {
  render() {
    return (
      <div>
        {this.props.messages.map((message: IMessage, index: number) => {
          return <Message key={index} message={message}/>
        })}
      </div>
    );
  }
}
