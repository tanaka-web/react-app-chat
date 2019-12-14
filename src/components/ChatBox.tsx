import * as React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class ChatBox extends React.Component<any, any> {
  render() {
    return (
      <MuiThemeProvider>
        <div className="ChatBox">
          <div className="">
            <TextField name='user_name' onChange={this.props.onTextChange} className=""  placeholder="Name" />
          </div>
          <TextField rows={4} multiLine={true} name='text' className="" onChange={this.props.onTextChange} />
          <RaisedButton primary={true} label="Send" className="" onClick={this.props.onButtonClick} />
        </div>
      </MuiThemeProvider>
    );
  }
}