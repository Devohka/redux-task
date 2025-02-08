import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store, persistorStore} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
console.log(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistorStore}>
      <App />
      </PersistGate>
    </Provider>

  </React.StrictMode>
);


