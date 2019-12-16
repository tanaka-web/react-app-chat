import * as React from 'react';
import { IMessage } from '../types/message';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import ChatBox from '../components/ChatBox';
import { MessageList } from '../components/MessageList';
import { connect } from 'react-redux';
import { getMessages, pushMessage } from '../actions/message';
import { userLogin } from '../actions/user';
import { bindActionCreators, Dispatch } from 'redux';
import { IUser } from '../types/user';
import * as moment from 'moment';
import { animateScroll } from 'react-scroll/modules';

interface IProps {
  messages: IMessage[];
  user: IUser;
  getMessages(): void;
  pushMessage(message: IMessage): void;
  userLogin(user: IUser): void;
}

interface IState {
  text: string;
  userName: string;
}

const initialState: IState = {
  text: '',
  userName: '',
};

class AppChat extends React.Component<IProps, IState> {
  state = initialState;

  componentDidMount(): void {
    this.props.getMessages();
    animateScroll.scrollToBottom();
  }

  onTextChange = (event: any): void => {
    if (event.target.name == 'userName') {
      this.setState({
        userName: event.target.value,
      });
    } else if (event.target.name == 'text') {
      this.setState({
        text: event.target.value,
      });
    }
  };

  onButtonClick = (): void => {
    if (this.props.user.loggedIn) {
      if (this.state.text === '') {
        alert('メッセージを入力してください');
        return;
      }
      const datetime = moment().format();
      const message = {
        userName: this.state.userName,
        text: this.state.text,
        datetime: datetime,
      };
      pushMessage(message);
      animateScroll.scrollToBottom();
      this.setState({
        text: '',
      });
    } else {
      if (this.state.userName === '') {
        alert('お名前を入力してください');
        return;
      }
      const user = {
        userName: this.state.userName,
        loggedIn: true,
      };
      this.props.userLogin(user);
    }
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Header>
          <h1>Realtime Chat</h1>
          <p>React / React Redux / Firebase Realtime Database</p>
        </Header>
        <MessageList messages={this.props.messages} />
        <ChatBox onTextChange={this.onTextChange} onButtonClick={this.onButtonClick} />
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle`
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

const mapStateToProps = (state: any) => ({
  messages: state.message.messages,
  user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMessages: bindActionCreators(getMessages, dispatch),
  pushMessage: bindActionCreators(pushMessage, dispatch),
  userLogin: (user: IUser) => dispatch(userLogin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppChat);
