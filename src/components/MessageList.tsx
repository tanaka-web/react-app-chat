import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getMessages } from '../redux/actions/message';
import { IMessage } from '../types/message';
import { TReduxState } from '../redux/reducers';

import { Message } from './Message';

interface IProps {
  message: { messages: IMessage[] };
  getMessages(): void;
}

const MessageList = ({ message, getMessages }: IProps) => {
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <Wrapper>
      {message.messages.map((message, idx) => (
        <Message key={idx} message={message} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 91px 0 59.38px;
`;

const mapStateToProps = (state: TReduxState): TReduxState => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMessages: bindActionCreators(getMessages, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
