import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { AppChat } from './containers/AppChat';
import rootReducer from './redux/reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <AppChat />
  </Provider>,
  document.getElementById('app'),
);
