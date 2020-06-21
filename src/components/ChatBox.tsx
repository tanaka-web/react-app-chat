import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { animateScroll } from 'react-scroll/modules';
import { TReduxState } from '../reducers';
import { getMessages, pushMessage } from '../actions/message';
import { TUserActions, userLogin } from '../actions/user';
import { IMessage } from '../types/message';
import { IUser } from '../types/user';
import * as moment from 'moment';

interface IProps {
  user: IUser;
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

class ChatBox extends React.Component<IProps, IState> {
  state = initialState;

  onTextChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
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
      <Wrapper>
        {!this.props.user.loggedIn ? (
          <div>
            <input
              name="userName"
              value={this.state.userName}
              onChange={(event): void => this.onTextChange(event)}
              placeholder="お名前をどうぞ"
            />
          </div>
        ) : (
          <div>
            <p>{this.props.user.userName}</p>
            <input
              name="text"
              value={this.state.text}
              onChange={(event): void => this.onTextChange(event)}
              placeholder="メッセージをどうぞ"
            />
          </div>
        )}
        <button
          type="submit"
          onClick={(event): void => {
            event.preventDefault();
            this.onButtonClick();
          }}
        >
          {this.props.user.loggedIn ? '送信' : 'ログイン'}
        </button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.form`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;
  padding: 0.6rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: left;
  background: linear-gradient(to right, #e8e8e8 0%, #e8e8e8 60%, #e0e0e0 100%);

  > div {
    flex: 1;
    width: 100%;
    display: flex;

    > p {
      width: 28%;
      box-sizing: border-box;
      padding-right: 0.4rem;
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    > input,
    > textarea {
      border: 1px solid #aaa;
      border-radius: 100px;
      padding: 0.6rem 0.8rem;
      width: 100%;
      max-height: 1.2rem;
    }
  }

  button {
    border: 0;
    border-radius: 100px;
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
    background: #4095f7;
    color: #fff;
    margin-left: 0.4rem;
    min-width: 72px;
  }
`;

const mapStateToProps = (state: TReduxState): TReduxState => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMessages: bindActionCreators(getMessages, dispatch),
  pushMessage: bindActionCreators(pushMessage, dispatch),
  userLogin: (user: IUser): TUserActions => dispatch(userLogin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
