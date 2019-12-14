import * as React from "react";
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Chip from 'material-ui/Chip';
import {IMessage} from '../types/Message';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

interface IProps {
  key: number;
  message: IMessage;
}

export default class Message extends React.Component<IProps, {}> {
  render() {
    return (
      <div className="Message">
        <List>
          <ListItem>
            <span style={{marginBottom: -5}}>@{this.props.message.user_name}</span>
            <div className="">
              <Chip style={styles.chip}>
                {this.props.message.text}
              </Chip>
            </div>
          </ListItem>
        </List>
      </div>
    );
  }
}
