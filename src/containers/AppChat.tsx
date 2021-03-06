import React, { useEffect } from 'react';
import styled, { createGlobalStyle, FlattenSimpleInterpolation } from 'styled-components';
import reset from 'styled-reset';
import { animateScroll } from 'react-scroll/modules';
import ChatBox from '../components/ChatBox';
import MessageList from '../components/MessageList';

export const AppChat = () => {
  useEffect(() => {
    animateScroll.scrollToBottom();
  }, []);

  return (
    <>
      <GlobalStyle reset={reset} />
      <Header>
        <h1>Realtime Chat</h1>
        <p>React / React Redux / Firebase Realtime Database</p>
      </Header>
      <MessageList />
      <ChatBox />
    </>
  );
};

const GlobalStyle = createGlobalStyle<{ reset?: FlattenSimpleInterpolation }>`
  ${reset}
  body {
    font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', メイリオ, Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
    color: #555;
    line-height: 1.4;
  }
  
  input, button, textarea {
    appearance: none;
    font-size: 1rem;
    &:focus {
      outline: 0;
      border-color: orange;
    }
  }
`;

const Header = styled.header`
  background: linear-gradient(to right, #72b8ff 0%, #309eff 55%, #4095f7 100%);
  color: #fff;
  padding: 1rem 0.6rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  box-sizing: border-box;

  h1 {
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 0.01em;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`;
