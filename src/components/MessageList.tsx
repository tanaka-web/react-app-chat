import * as React from "react";
import {IMessage} from '../types/message';
import Message from "./Message";
import * as moment from "moment";

interface IProps {
  messages: IMessage[];
}

export default class MessageList extends React.Component<IProps, {}> {
  render() {
    const messageList = this.props.messages.sort((a: IMessage, b: IMessage) => {
      if (moment(a.datetime).isBefore(moment(b.datetime))) return 1;
      if (moment(a.datetime).isAfter(moment(b.datetime))) return -1;
      return 0;
    });

    return (
      <div>
        {messageList.map((message: IMessage, index: number) => {
          return <Message key={index} message={message}/>
        })}
      </div>
    );
  }
}
