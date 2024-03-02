import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./main.css";
import ContextProvider from "./context/context";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="723151438680-tgplhf9ljvpm6ni86b685t86qjbmfs84.apps.googleusercontent.com">
    <Provider store={store}>
      <BrowserRouter>
      <ContextProvider>
         <App />
      </ContextProvider>
      </BrowserRouter>
    </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
