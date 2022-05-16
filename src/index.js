import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/cart-context';
//import { initializeApp } from "firebase/app";


/*const firebaseConfig = {
  apiKey: "AIzaSyDaHthBGPIdqhEH9Rj7RuRNbdh-6RsjCRM",
  authDomain: "mercado-x.firebaseapp.com",
  projectId: "mercado-x",
  storageBucket: "mercado-x.appspot.com",
  messagingSenderId: "158836854353",
  appId: "1:158836854353:web:3ec258106db4cdc645b270"
};

const app = initializeApp(firebaseConfig);
//initializeApp(firebaseConfig);*/

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
