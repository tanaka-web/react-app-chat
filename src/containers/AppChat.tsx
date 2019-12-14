import * as React from 'react';
import {firebaseDb} from '../firebase/index'
import Message from '../components/Message'
import ChatBox from '../components/ChatBox'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {IMessage} from "../types/Message";

const messagesRef = firebaseDb.ref('messages');

interface IProps {
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
    messagesRef.on('child_added', (snapshot: any) => {
      const message = snapshot.val()
      const messages = this.state.messages

      messages.push({
        'text': message.text,
        'user_name': message.user_name,
        'date': "0000-00-00 00:00:00"
      })

      this.setState({
        messages
      });
    })
  }

  onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    if (this.state.user_name == "") {
      alert('user_name empty')
      return
    } else if (this.state.text == "") {
      alert('text empty')
      return
    }
    messagesRef.push({
      "user_name": this.state.user_name,
      "text": this.state.text,
      "date": "0000-00-00 00:00:00"
    })
  }

  render = () => {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h2>Chat</h2>
          </div>
          <div className="MessageList">
            {this.state.messages.map((message: IMessage, index: number) => {
              return <Message key={index} message={message}/>
            })}
          </div>
          <ChatBox onTextChange={this.onTextChange} onButtonClick={this.onButtonClick}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AppChat;