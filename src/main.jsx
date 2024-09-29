import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ThemeProvider from './componants/ThemeProvider.jsx';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});



ReactDOM.createRoot(document.getElementById('root')).render(

  <PersistGate persistor={persistor}>
    <Provider store={store}>
      {/* <ThemeProvider> */}
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
      {/* </ThemeProvider> */}
    </Provider>
  </PersistGate>
)
