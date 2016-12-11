import ReactDOM from 'react-dom';
import React from 'react';
import App from './containers/App/App.js';
import routes from './routes/index.js';
import { AppContainer as HotWrapper } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <HotWrapper key={Math.random()}>
      <Component routes={routes} />
    </HotWrapper>,
    document.getElementById('target')
  );
}

render(App);

if (module.hot) {
  module.hot.accept(() => {
    render(require('./containers/App/App.js').default)
  });
}
