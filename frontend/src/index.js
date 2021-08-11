import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './utils/i18n';

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();