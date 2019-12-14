import * as React from 'react';
import {render} from 'react-dom';
import AppChat from './containers/AppChat';
import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'
createGlobalStyle`
  ${reset}
`

render(<AppChat />, document.getElementById('app'));
