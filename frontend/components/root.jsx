import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => (
  <div className="root">
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
  </div>

);


export default Root;
