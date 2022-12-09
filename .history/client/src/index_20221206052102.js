import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* HERE */}
      <App /> {/* Now, App is wrapped in Provider and hence can read from store */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)


