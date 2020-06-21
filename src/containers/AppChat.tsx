import * as React from 'react';
import styled, { createGlobalStyle, InterpolationValue } from 'styled-components';
import reset from 'styled-reset';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { animateScroll } from 'react-scroll/modules';
import { IMessage } from '../types/message';
import ChatBox from '../components/ChatBox';
import { MessageList } from '../components/MessageList';
import { getMessages } from '../actions/message';
import { TReduxState } from '../reducers';

interface IProps {
  message: { messages: IMessage[] };
  getMessages(): void;
}

class AppChat extends React.Component<IProps, {}> {
  componentDidMount(): void {
    this.props.getMessages();
    animateScroll.scrollToBottom();
  }

  render() {
    return (
      <>
        <GlobalStyle reset={reset} />
        <Header>
          <h1>Realtime Chat</h1>
          <p>React / React Redux / Firebase Realtime Database</p>
        </Header>
        <MessageList messages={this.props.message.messages} />
        <ChatBox />
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle<{ reset?: InterpolationValue }>`
  ${reset}
  body {
    font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', メイリオ, Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
    color: #555;
    line-height: 1.4;
  }
  
  input, button, textarea {
    appearance: none;
    font-size: 1rem;
    &:focus {
      outline: 0;
      border-color: orange;
    }
  }
`;

const Header = styled.header`
  background: linear-gradient(to right, #72b8ff 0%, #309eff 55%, #4095f7 100%);
  color: #fff;
  padding: 1rem 0.6rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;

  h1 {
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 0.01em;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`;

const mapStateToProps = (state: TReduxState): TReduxState => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMessages: bindActionCreators(getMessages, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppChat);
