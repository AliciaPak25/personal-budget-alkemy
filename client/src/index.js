import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import ReduxStore from './redux/store/ReduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={ReduxStore}>
      <App />
    </Provider>
);

