import * as React from 'react';
import {IMessage} from "../types/message";
import styled, {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import ChatBox from '../components/ChatBox';
import MessageList from "../components/MessageList";
import {connect} from 'react-redux'
import {getMessages, pushMessage, userLogin} from "../actions";
import {bindActionCreators, Dispatch} from "redux";
import {IUser} from "../types/user";
import * as moment from "moment";

interface IProps {
  messages: IMessage[]
  user: IUser
  getMessages(): void
  pushMessage(message: IMessage): void
  userLogin(user: IUser): void
}

interface IState {
  text: string;
  userName: string;
  datetime: string;
  messages: IMessage[];
}

const initialState: IState = {
  text: "",
  userName: "",
  datetime: "",
  messages: []
}

class AppChat extends React.Component<IProps, IState> {
  state = initialState;

  componentDidMount() {
    this.props.getMessages()
  }

  onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name == 'userName') {
      this.setState({
        userName: event.target.value,
      });
    } else if (event.target.name == 'text') {
      this.setState({
        text: event.target.value,
      });
    }
  }

  onButtonClick = () => {
    if (this.props.user.loggedIn) {
      if (this.state.text == "") {
        alert('text empty')
        return
      }
      const datetime = moment().format()
      const message = {
        userName: this.state.userName,
        text: this.state.text,
        datetime: datetime
      }
      pushMessage(message);
    } else {
      if (this.state.userName == "") {
        alert('userName empty')
        return
      }
      const user = {
        userName: this.state.userName,
        loggedIn: true
      }
      this.props.userLogin(user)
    }
  }

  render() {
    return (
      <>
        <GlobalStyle/>
        <Header>
          <h1>Realtime Chat</h1>
          <p>React / React Redux / Firebase Realtime Database</p>
        </Header>
        <ChatBox
          onTextChange={this.onTextChange}
          onButtonClick={this.onButtonClick}/>
        <MessageList messages={this.props.messages}/>
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  color: #666;
  
  body {
    padding: 8px;
  }
  
  input, button, textarea {
    &:focus {
      outline: 0;
      border-color: orange;
    }
  }
`

const Header = styled.header`
  background: linear-gradient(to right, #72c9ff 0%,#309eff 55%,#4095f7 100%);
  color: #fff;
  padding: 1rem .6rem;
  
  h1 {
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 0.01em;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: .8rem;
  }
`

const mapStateToProps = (state: any) => ({
  messages: state.message.messages,
  user: state.user
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMessages: bindActionCreators(getMessages, dispatch),
  pushMessage: bindActionCreators(pushMessage, dispatch),
  userLogin:(user: IUser) => dispatch(userLogin(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppChat);