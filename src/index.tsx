import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const AUTH0_CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const AUTH0_REDIRECT_URI0 = import.meta.env.VITE_AUTH0_REDIRECT_URI0;

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Auth0Provider
      clientId={AUTH0_CLIENT_ID}
      domain={AUTH0_DOMAIN}
      authorizationParams={{ redirect_uri: AUTH0_REDIRECT_URI0 }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
