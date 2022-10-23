import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { bank } from './redux/databank';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 
  <Provider store={bank}>
    <App />  
  </Provider>
   
);
