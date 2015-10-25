import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import History from 'history/lib/createBrowserHistory';
import { root as rootRoute } from '../common/routes';
import { App } from '../common/components';
import createStore from '../common/store';
import * as mocks from '../common/mocks';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { IntlProvider } from 'react-intl';

import React from 'react';

let history = new History();

let initialData = __INITIALSTATE__ || mocks.slides;
let store = createStore(initialData);

var intlData = {
  locale: 'en',
  messages: {
    'connections': 'foobar'
  }
};

let elements = [
  <IntlProvider key="intl" {...intlData}>
    <Provider store={store}>
      {() => <Router history={history} routes={rootRoute} />}
    </Provider>
  </IntlProvider>
];
if (process.env.NODE_DEVTOOLS) {
  elements.push(
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  );
}

React.render(
  <div>{elements}</div>,
  document.getElementById('app')
);
