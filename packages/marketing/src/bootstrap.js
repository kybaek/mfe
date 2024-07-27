import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to render the marketing app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in isolation, call mount function immediately
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_marketing-dev-root');
  if (el) {
    mount(el);
  }
}

export { mount };
// export mount function