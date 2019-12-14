import * as React from "react";
import styled from "styled-components";

interface IProps {
  onTextChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onButtonClick(): void;
}

interface IState {
}

export default class ChatBox extends React.Component<IProps, IState> {
  render() {
    return (
      <Wrapper>
        <p></p>
        <input name='user_name' onChange={(event) => this.props.onTextChange(event)} placeholder="お名前をどうぞ"/>
        <input name='text' onChange={(event) => this.props.onTextChange(event)} placeholder="メッセージをどうぞ"/>
        <button onClick={() => this.props.onButtonClick()}>ログイン</button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding: .6rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: left;
  background: linear-gradient(to right, #eaeaea 0%,#e8e8e8 60%,#e0e0e0 100%);
  
  input, textarea {
    border: 1px solid #aaa;
    border-radius: 100px;
    padding: .6rem .8rem;
    font-size: .9rem;
    width: 100%;
    flex: 1;
    max-height: 1.2rem;
  }
  
  button {
    border-radius: 100px;
    padding: .4rem .8rem;
    font-size: .9rem;
    background: #4095f7;
    color: #fff;
    margin-left: .6rem;
  }
`;