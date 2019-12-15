import * as React from "react"
import styled from "styled-components"
import {connect} from "react-redux"
import {IUser} from "../types/user"

interface IProps {
  onTextChange(event: React.ChangeEvent<HTMLInputElement>): void

  onButtonClick(): void

  user: IUser
}

interface IState {
}

class ChatBox extends React.Component<IProps, IState> {
  render() {
    return (
      <Wrapper>
        {!this.props.user.loggedIn ? (
          <div>
            <input name='userName' onChange={(event) => this.props.onTextChange(event)} placeholder="お名前をどうぞ"/>
          </div>
        ) : (
          <div>
            <p>{this.props.user.userName}</p>
            <input name='text' onChange={(event) => this.props.onTextChange(event)} placeholder="メッセージをどうぞ"/>
          </div>
        )}
        <button onClick={() => this.props.onButtonClick()}>
          {this.props.user.loggedIn ? "送信" : "ログイン"}
        </button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;
  padding: .6rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: left;
  background: linear-gradient(to right, #e8e8e8 0%,#e8e8e8 60%,#e0e0e0 100%);
  
  > div {
    flex: 1;
    width: 100%;
    display: flex;
    
    > p {
      width: 30%;
      box-sizing: border-box;
      padding-right: .4rem;
      display: flex;
      align-items: center;
      font-size: .9rem;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    
    > input, > textarea {
      border: 1px solid #aaa;
      border-radius: 100px;
      padding: .6rem .8rem;
      width: 100%;
      // max-height: 1.2rem;
    }
  }
  
  button {
    border: 0;
    border-radius: 100px;
    padding: .4rem .8rem;
    font-size: .9rem;
    background: #4095f7;
    color: #fff;
    margin-left: .4rem;
  }
`;

const mapStateToProps = (state: any) => ({
  user: state.user
});

export default connect(
  mapStateToProps
)(ChatBox);