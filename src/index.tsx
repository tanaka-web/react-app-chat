import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/App';

ReactDOM.render(
  <App hoge="hello" fuga="react" />,
  document.getElementById('app')
);