import * as React from 'react';
import {IMessage} from "../types/Message";
import styled, {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import ChatBox from '../components/ChatBox';
import MessageList from "../components/MessageList";
import {connect} from 'react-redux'
import {getMessages, pushMessage} from "../actions";
import {bindActionCreators, Dispatch} from "redux";

interface IProps {
  messages: any
  getMessages(): void
  pushMessage(message: IMessage): void
}

interface IState {
  text: string;
  user_name: string;
  date: string;
  messages: IMessage[];
}

const initialState: IState = {
  text: "",
  user_name: "",
  date: "",
  messages: []
}

class AppChat extends React.Component<IProps, IState> {
  state = initialState;

  componentDidMount = () => {
    this.props.getMessages()
  }

  onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change')
    if (event.target.name == 'user_name') {
      this.setState({
        "user_name": event.target.value,
      });
    } else if (event.target.name == 'text') {
      this.setState({
        "text": event.target.value,
      });
    }
  }

  onButtonClick = () => {
    console.log('click')
    if (this.state.user_name == "") {
      alert('user_name empty')
      return
    } else if (this.state.text == "") {
      alert('text empty')
      return
    }
    const message = {
      user_name: this.state.user_name,
      text: this.state.text,
      date: "0000-00-00 00:00:00"
    }
    console.log(pushMessage)
    pushMessage(message)
  }

  render = () => {
    return (
      <>
        <GlobalStyle/>
        <Header>
          <h1>Realtime Chat</h1>
          <p>React / React Redux / Firebase Realtime Database</p>
        </Header>
        <ChatBox onTextChange={this.onTextChange} onButtonClick={this.onButtonClick}/>
        <MessageList messages={this.props.messages.messages}/>
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
  messages: state.messages
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMessages: bindActionCreators(getMessages, dispatch),
  pushMessage: bindActionCreators(pushMessage, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppChat);