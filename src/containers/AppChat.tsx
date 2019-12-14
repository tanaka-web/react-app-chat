import * as React from 'react';
import {firebaseDb} from '../firebase/index'
import Message from '../components/Message'
import ChatBox from '../components/ChatBox'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const messagesRef = firebaseDb.ref('messages');

interface IMessage {
  text: string;
  user_name: string;
  date: string;
}

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
      const m = snapshot.val()
      console.log(snapshot.val())
      const msgs = this.state.messages

      msgs.push({
        'text': m.text,
        'user_name': m.user_name,
        'date': "0000-00-00 00:00:00"
      })

      this.setState({
        messages: msgs
      });
    })
  }

  onTextChange = (e: any) => {
    if (e.target.name == 'user_name') {
      this.setState({
        "user_name": e.target.value,
      });
    } else if (e.target.name == 'text') {
      this.setState({
        "text": e.target.value,
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
            {this.state.messages.map((m: any, i: any) => {
              return <Message key={i} message={m}/>
            })}
          </div>
          <ChatBox onTextChange={this.onTextChange} onButtonClick={this.onButtonClick}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AppChat;