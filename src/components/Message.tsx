import * as React from "react";
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

export default class Message extends React.Component<any, any> {
  render() {
    return (
      <div className="Message">
        <List>
          <ListItem disabled={true}>
            <span style={{marginBottom: -5}}>@{this.props.message.user_name}</span>
            <div className="">
              <Chip style={styles.chip} >
                {this.props.message.text}
              </Chip>
            </div>
          </ListItem>
        </List>
      </div>
    );
  }
}
